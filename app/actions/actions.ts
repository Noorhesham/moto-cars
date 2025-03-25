"use server";

import bcrypt from "bcryptjs";
import { revalidatePath, revalidateTag } from "next/cache";

import connect from "../utils/clientPromise";
import Product from "../models/Product";
import Blog from "../models/Blog";
import User from "../models/User";
import Business from "../models/Business";
interface ModelProps {
  modelName: "Product" | "User" | "Blog";
}
const getModel = (modelName: "Product" | "User" | "Blog" | "BusinessCase") => {
  const models: Record<any, any> = {
    Product: Product,
    Blog: Blog,
    User: User,
    BusinessCase: Business,
  };
  return models[modelName];
};

export const createEntity = async (modelName: "Product" | "User" | "Blog" | "BusinessCase", data: any) => {
  try {
    console.log(data, modelName);
    await connect();
    const Model = getModel(modelName);
    const entity = await Model.create(data);
    const entityObj = JSON.parse(JSON.stringify(entity));
    console.log(entityObj);
    revalidateTag(`${modelName}-1`);
    revalidateTag(`${modelName}`);

    revalidatePath("/en");

    revalidatePath("/ar");
    return { success: `${modelName} created successfully`, data: entityObj };
  } catch (error: any) {
    console.log(error);
    return { error: `Error creating ${modelName}`, details: error.message };
  }
};

export const updateEntity = async (
  modelName: "Product" | "User" | "Blog" | "BusinessCase",
  id: string,
  data: any,
  customRevalidatePaths?: string[]
) => {
  try {
    await connect();
    console.log(data, id, modelName);
    const Model = getModel(modelName);
    const entity = await Model.findByIdAndUpdate(id, data, { new: true });
    const entityObj = JSON.parse(JSON.stringify(entity));
    revalidateTag(`${modelName}-1`);
    revalidateTag(`${modelName}`);
    customRevalidatePaths?.forEach((path) => revalidatePath(path));
    revalidatePath("/");
    return { success: `${modelName} updated successfully`, data: entityObj };
  } catch (error: any) {
    return { error: `Error updating ${modelName}`, details: error.message };
  }
};

export const deleteEntity = async (modelName: "Product" | "User" | "Blog", id: string) => {
  "use server";

  try {
    await connect();

    console.log(modelName, id);
    const Model = getModel(modelName);

    // Find the entity to check for associated images
    const entity = await Model.findById(id);

    if (!entity) {
      return { error: `${modelName} with ID ${id} not found` };
    }

    await Model.findByIdAndDelete(id);

    // Revalidate cache
    revalidateTag(modelName);
    revalidatePath("/");

    return { success: `${modelName} deleted successfully` };
  } catch (error: any) {
    console.error(`Error deleting ${modelName}:`, error);
    return { error: `Error deleting ${modelName}`, details: error.message };
  }
};

export const getEntities = async (
  modelName: "Product" | "User" | "Blog",
  options: {
    page: number;
    category?: string | null;
    locale?: string;
    search?: string;
    populateFields?: string[];
    limitCustom?: number;
  } = { page: 1 }
) => {
  try {
    await connect();

    const Model = getModel(modelName);
    const page = options.page;
    const limit = options.limitCustom || 10; // adjust your limit per page as needed
    const skip = (page - 1) * limit;

    // Build query filter.
    const queryObj: Record<string, any> = {};

    // If a category is provided, filter by it.
    if (options.category) {
      queryObj["category.name"] = options.category;
    }

    // If a search term is provided, add regex filters for title and description.
    if (options.search) {
      queryObj["$or"] = [
        { title: { $regex: options.search, $options: "i" } },
        { description: { $regex: options.search, $options: "i" } },
      ];
    }

    // Build the query with pagination
    let query = Model.find(queryObj).skip(skip).limit(limit);

    options.populateFields?.forEach((field) => {
      query = query.populate(field);
    });

    const entities = await query.lean();
    if (!entities || entities.length === 0) {
      return { error: `${modelName} not found` };
    }

    // Count total documents to determine if there are more pages
    const totalCount = await Model.countDocuments(queryObj);
    const hasMore = skip + entities.length < totalCount;

    // Localize fields if needed
    console.log(entities);
    return {
      success: `${modelName} fetched successfully`,
      products: JSON.parse(JSON.stringify(entities)),
      hasMore,
    };
  } catch (error) {
    return { error: `Error fetching ${modelName}`, details: error };
  }
};

export const getEntity = async (
  modelName: "Product" | "User" | "Blog",
  id: string,
  locale: string,
  populateFields: string[] = []
) => {
  try {
    await connect();

    const Model = getModel(modelName);

    let query = Model.findById(id);

    populateFields.forEach((field) => {
      query = query.populate(field);
    });

    const entity = await query.lean();

    return { success: `${modelName} fetched successfully`, data: JSON.parse(JSON.stringify(entity)) };
  } catch (error) {
    return { error: `Error fetching ${modelName}`, details: error };
  }
};
export async function getStats() {
  try {
    await connect();

    // Get counts from all models
    const [productsCount, blogsCount, usersCount] = await Promise.all([
      Product.countDocuments(),
      Blog.countDocuments(),
      User.countDocuments(),
    ]);

    // Get total features count across all products
    const featuresAggregation = await Product.aggregate([
      {
        $project: {
          featuresCount: { $size: "$features" },
        },
      },
      {
        $group: {
          _id: null,
          totalFeatures: { $sum: "$featuresCount" },
        },
      },
    ]);

    const featuresCount = featuresAggregation.length > 0 ? featuresAggregation[0].totalFeatures : 0;

    return {
      productsCount,
      blogsCount,
      usersCount,
      featuresCount,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      productsCount: 0,
      blogsCount: 0,
      usersCount: 0,
      featuresCount: 0,
    };
  }
}

export async function getRecentActivity() {
  try {
    await connect();

    // Get recent products
    const recentProducts = await Product.find().sort({ createdAt: -1 }).limit(3).select("starter.name slug createdAt");

    // Get recent blogs
    const recentBlogs = await Blog.find().sort({ createdAt: -1 }).limit(3).select("title slug createdAt");

    // Get recent users
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(3).select("name email createdAt");

    // Combine and sort by createdAt
    const allActivity = [
      ...recentProducts.map((product) => ({
        type: "product",
        title: product.starter.name,
        slug: product.slug,
        createdAt: product.createdAt,
      })),
      ...recentBlogs.map((blog) => ({
        type: "blog",
        title: blog.title,
        slug: blog.slug,
        createdAt: blog.createdAt,
      })),
      ...recentUsers.map((user) => ({
        type: "user",
        title: user.name,
        email: user.email,
        createdAt: user.createdAt,
      })),
    ]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);

    return allActivity;
  } catch (error) {
    console.error("Error fetching recent activity:", error);
    return [];
  }
}

export async function getTopProducts() {
  try {
    await connect();

    // For demonstration purposes, we'll just get the products with the most features
    const topProducts = await Product.aggregate([
      {
        $project: {
          name: "$starter.name",
          slug: "$slug",
          featuresCount: { $size: "$features" },
          colorsCount: { $size: "$colors" },
          totalCount: { $add: [{ $size: "$features" }, { $size: "$colors" }] },
        },
      },
      { $sort: { totalCount: -1 } },
      { $limit: 3 },
    ]);

    return topProducts;
  } catch (error) {
    console.error("Error fetching top products:", error);
    return [];
  }
}
