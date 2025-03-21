"use server";

import bcrypt from "bcryptjs";
import { revalidatePath, revalidateTag } from "next/cache";

import connect from "../utils/clientPromise";
import Product from "../models/Product";
import Blog from "../models/Blog";
import User from "../models/User";
interface ModelProps {
  modelName: "Product" | "User" | "Blog";
}
const getModel = (modelName: "Product" | "User" | "Blog") => {
  const models: Record<any, any> = {
    Product: Product,
    Blog: Blog,
    User: User,
  };
  return models[modelName];
};

export const createEntity = async (modelName: "Product" | "User" | "Blog", data: any) => {
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
  modelName: "Product" | "User" | "Blog",
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
export const deleteImage = async (publicId: string) => {
  try {
    const res = await cloudinary.uploader.destroy(publicId);
    console.log(`Deleted image with public ID: ${publicId}`, res);
    return res;
  } catch (error) {
    console.error(`Error deleting image with public ID: ${publicId}`, error);
    throw new Error(`Failed to delete image: ${error.message}`);
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
