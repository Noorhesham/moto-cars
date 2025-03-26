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
import FormSelect from "@/app/components/inputs/FormSelect";
import { useTranslations } from "next-intl";

interface ProductFormProps {
  initialData?: ProductFormValues;
}

export function ProductForm({ initialData }: ProductFormProps) {
  const t = useTranslations("dashboard.products.form");
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
      category: "",
      leaflet: "",
      slug: "",
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

  const onSubmit = async (data: ProductFormValues) => {
    const res = initialData
      ? await updateEntity("Product", initialData._id, data)
      : await createEntity("Product", data);

    if (res.success)
      toast({
        title: t("success"),
        description: "",
      });
    else
      toast({
        title: t("error"),
        description: "",
      });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
        <MaxWidthWrapper>
          <h1 className="text-4xl font-bold mb-4">{initialData ? t("edit") : t("create")}</h1>
          <FormInput name="slug" label={t("slug")} placeholder={t("slug")} />
          <FormSelect
            name="category"
            label={t("category")}
            placeholder={t("chooseCategory")}
            options={[
              { value: "E-MOTO", label: "E-MOTO" },
              { value: "E-SCOOTER", label: "E-SCOOTER" },
              { value: "E-FLEET", label: "E-FLEET" },
              { value: "Charging Systems", label: "Charging Systems" },
            ]}
          />
          <div className="p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">{t("basicInfo")}</h2>
            <div className="space-y-4">
              <ArabicEnglishForm name="starter.name" label={t("name")} />
              <ArabicEnglishForm name="starter.title" label={t("title")} />
              <ArabicEnglishForm name="starter.subtitle" label={t("subtitle")} />
              <FormInput
                name="starter.backgroundImage"
                label={t("backgroundImage")}
                placeholder={t("backgroundImage")}
                photo
                single={true}
              />
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <ArabicEnglishForm name="titleFeatures" label={t("features")} />
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t("features")}</h2>
              <button
                type="button"
                onClick={() => appendFeature({ description: { en: "", ar: "" }, image: "" })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t("addFeature")}
              </button>
            </div>
            <div className="space-y-4">
              {features.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">
                      {t("feature")} {index + 1}
                    </h3>
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <ArabicEnglishForm area name={`features.${index}.description`} label={t("description")} />
                    <FormInput
                      single
                      name={`features.${index}.image`}
                      label={t("imageUrl")}
                      placeholder={t("imageUrl")}
                      photo
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ArabicEnglishForm name={`colorTitle`} label={t("colorTitle")} />
          <div className="p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t("colors")}</h2>
              <button
                type="button"
                onClick={() => appendColor({ color: "", image: "" })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t("addColor")}
              </button>
            </div>
            <div className="space-y-4">
              {colors.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">
                      {t("color")} {index + 1}
                    </h3>
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
                      className="!w-[150px]"
                      name={`colors.${index}.color`}
                      label={t("colorHex")}
                      type="color"
                      placeholder="#000000"
                    />
                    <FormInput
                      name={`colors.${index}.image`}
                      label={t("imageUrl")}
                      single
                      placeholder={t("colorVariant")}
                      photo
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t("stats")}</h2>
              <button
                type="button"
                onClick={() => appendStat({ prefix: { en: "", ar: "" }, number: 0, specialWord: { en: "", ar: "" } })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t("addStat")}
              </button>
            </div>
            <div className="space-y-4">
              {stats.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">
                      {t("stat")} {index + 1}
                    </h3>
                    <button type="button" onClick={() => removeStat(index)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <ArabicEnglishForm name={`stats.${index}.prefix`} label={t("prefix")} />
                    <FormInput name={`stats.${index}.number`} label={t("number")} type="number" placeholder="0" />
                    <ArabicEnglishForm name={`stats.${index}.specialWord`} label={t("specialWord")} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t("gallery")}</h2>
            </div>
            <ArabicEnglishForm name="ImageTitle" label={t("galleryTitle")} />
            <div className="space-y-4 mt-4">
              <FormInput name={`images`} single={false} placeholder={t("imageUrl")} photo />
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t("specifications")}</h2>
              <button
                type="button"
                onClick={() => appendSpec({ title: { en: "", ar: "" }, description: { en: "", ar: "" } })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t("addSpecification")}
              </button>
            </div>
            <div className="space-y-4">
              {specs.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">
                      {t("specification")} {index + 1}
                    </h3>
                    <button type="button" onClick={() => removeSpec(index)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <ArabicEnglishForm name={`specs.${index}.title`} label={t("title")} />
                    <ArabicEnglishForm name={`specs.${index}.description`} label={t("description")} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">{t("content")}</h2>
            <ArabicEnglishForm area name="content" label={t("content")} />
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">{t("video")}</h2>
            <FormInput name="videourl" label={t("videoUrl")} placeholder={t("videoUrl")} optional />
            <FormInput
              name="videoThumbnail"
              photo
              single
              label={t("videoThumbnail")}
              placeholder={t("videoThumbnail")}
              optional
            />
          </div>
          <div className="p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">{t("leaflet")}</h2>
            <FormInput name="leaflet" label={t("leafletUrl")} placeholder={t("leafletUrl")} optional />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("save")}
            </button>
          </div>
        </MaxWidthWrapper>
      </form>
    </FormProvider>
  );
}
