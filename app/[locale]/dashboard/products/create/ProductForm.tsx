"use client";
import React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { ProductFormValues, productSchema } from "@/app/validations/product";
import FormInput from "@/app/components/inputs/FormInput";
import ArabicEnglishForm from "@/app/components/inputs/ArabicEnglishForm";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { createEntity, updateEntity } from "@/app/actions/actions";
import { toast } from "react-toastify";
import { useToast } from "@/hooks/use-toast";

interface ProductFormProps {
  initialData?: ProductFormValues;
}

export function ProductForm({ initialData }: ProductFormProps) {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {
      starter: {
        name: { en: "", ar: "" },
        title: { en: "", ar: "" },
        subtitle: { en: "", ar: "" },
        backgroundImage: "",
      },
      features: [],
      titleFeatures: { en: "", ar: "" },
      colors: [],
      stats: [],
      images: [],
      specs: [],
      content: { en: "", ar: "" },
    },
  });

  const { handleSubmit, control } = form;

  // Use useFieldArray for dynamic arrays
  const {
    fields: features,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });

  const {
    fields: colors,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({
    control,
    name: "colors",
  });

  const {
    fields: stats,
    append: appendStat,
    remove: removeStat,
  } = useFieldArray({
    control,
    name: "stats",
  });
  const { toast } = useToast();
  const {
    fields: specs,
    append: appendSpec,
    remove: removeSpec,
  } = useFieldArray({
    control,
    name: "specs",
  });
  console.log(form.formState.errors);
  const onSubmit = async (data: ProductFormValues) => {
    console.log(data);
    const res = initialData
      ? await updateEntity("Product", initialData._id, data)
      : await createEntity("Product", data);
    console.log(res);
    if (res.success)
      toast({
        title: "Product created successfully",
        description: "",
      });
    else
      toast({
        title: "Error creating Product",
        description: "",
      });
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
        <MaxWidthWrapper className="">
          {" "}
          <h1 className="text-4xl font-bold mb-4"> {initialData ? "Edit" : "Create"} Product</h1>
          {/* Starter Section */} <FormInput name="slug" label="slug" placeholder="Enter slug" />
          <div className=" p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <ArabicEnglishForm name="starter.name" label="Name" />
              <ArabicEnglishForm name="starter.title" label="Title" />
              <ArabicEnglishForm name="starter.subtitle" label="Subtitle" />
              <FormInput
                name="starter.backgroundImage"
                label="Background Image URL"
                placeholder="Enter background image URL"
                photo
                single={true}
              />
            </div>
          </div>
          {/* Title Features */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <ArabicEnglishForm name="titleFeatures" label="Features Title" />
          </div>
          {/* Features Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Features</h2>
              <button
                type="button"
                onClick={() => appendFeature({ description: { en: "", ar: "" }, image: "" })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Feature
              </button>
            </div>
            <div className="space-y-4">
              {features.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">Feature {index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <ArabicEnglishForm area name={`features.${index}.description`} label="Description" />
                    <FormInput
                      single
                      name={`features.${index}.image`}
                      label="Image URL"
                      placeholder="Feature image URL"
                      photo
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ArabicEnglishForm name={`colorTitle`} label="Color Title" />
          {/* Colors Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Colors</h2>
              <button
                type="button"
                onClick={() => appendColor({ color: "", image: "" })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Color
              </button>
            </div>
            <div className="space-y-4">
              {colors.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">Color {index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeColor(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <FormInput
                      className=" !w-[150px]"
                      name={`colors.${index}.color`}
                      label="Color (Hex)"
                      type="color"
                      placeholder="#000000"
                    />
                    <FormInput
                      name={`colors.${index}.image`}
                      label="Image URL"
                      single
                      placeholder="Color variant image URL"
                      photo
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Stats Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Stats</h2>
              <button
                type="button"
                onClick={() => appendStat({ prefix: { en: "", ar: "" }, number: 0, specialWord: { en: "", ar: "" } })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Stat
              </button>
            </div>
            <div className="space-y-4">
              {stats.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">Stat {index + 1}</h3>
                    <button type="button" onClick={() => removeStat(index)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <ArabicEnglishForm name={`stats.${index}.prefix`} label="Prefix" />
                    <FormInput name={`stats.${index}.number`} label="Number" type="number" placeholder="0" />
                    <ArabicEnglishForm name={`stats.${index}.specialWord`} label="Special Word" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Images Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Gallery Images</h2>
            </div>
            <ArabicEnglishForm name="ImageTitle" label="Gallery Title" optional />
            <div className="space-y-4 mt-4">
              <FormInput name={`images`} single={false} placeholder="Image URL" photo />
            </div>
          </div>
          {/* Specs Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <button
                type="button"
                onClick={() => appendSpec({ title: { en: "", ar: "" }, description: { en: "", ar: "" } })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Specification
              </button>
            </div>
            <div className="space-y-4">
              {specs.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">Specification {index + 1}</h3>
                    <button type="button" onClick={() => removeSpec(index)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <ArabicEnglishForm name={`specs.${index}.title`} label="Title" />
                    <ArabicEnglishForm name={`specs.${index}.description`} label="Description" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Content Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Content</h2>
            <ArabicEnglishForm area name="content" label="HTML Content" />
          </div>
          <div className=" p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Video</h2>
            <FormInput name="videourl" label="Video URL" placeholder="Enter video URL" optional />
            <FormInput
              name="videoThumbnail"
              photo
              single
              label="Video Thumbnail"
              placeholder="Enter video thumbnail"
              optional
            />
          </div>
          {/* Optional Leaflet Section */}
          <div className=" p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Product Leaflet</h2>
            <FormInput name="leaflet" label="Leaflet URL" placeholder="Enter leaflet URL" optional />
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Product
            </button>
          </div>
        </MaxWidthWrapper>
      </form>
    </FormProvider>
  );
}
