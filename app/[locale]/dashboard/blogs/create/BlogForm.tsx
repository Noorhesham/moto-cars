"use client";
import React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import FormInput from "@/app/components/inputs/FormInput";
import ArabicEnglishForm from "@/app/components/inputs/ArabicEnglishForm";
import { Button } from "@/components/ui/button";
import { createEntity, updateEntity } from "@/app/actions/actions";
import { BlogFormValues, blogSchema } from "@/app/validations/blogs";
import { Form } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export function BlogForm({ initialData }: { initialData?: BlogFormValues }) {
  const t = useTranslations("dashboard.blogs.form");
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialData || {
      title: { en: "", ar: "" },
      slug: "",
      backgroundImage: "",
      sections: [],
    },
  });
  const { toast } = useToast();

  const { handleSubmit, control, watch } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const onSubmit = async (data: BlogFormValues) => {
    const res = initialData ? await updateEntity("Blog", initialData._id, data) : await createEntity("Blog", data);
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
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <ArabicEnglishForm name="title" label={t("title")} />
        <FormInput name="slug" label={t("slug")} placeholder={t("slug")} />
        <FormInput name="backgroundImage" label={t("backgroundImage")} photo single />

        <div className="space-y-4">
          {fields.map((field, index) => {
            const contentType = watch(`sections.${index}.contentType`);

            return (
              <div key={field.id} className="p-4 border rounded-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">
                    {t("section")} {index + 1}
                  </h3>
                  <button type="button" onClick={() => remove(index)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <Select
                    value={contentType}
                    onValueChange={(value: "text" | "photo" | "video" | "slider") =>
                      form.setValue(`sections.${index}.contentType`, value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={t("selectContentType")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">{t("text")}</SelectItem>
                      <SelectItem value="photo">{t("photo")}</SelectItem>
                      <SelectItem value="video">{t("video")}</SelectItem>
                      <SelectItem value="slider">{t("slider")}</SelectItem>
                    </SelectContent>
                  </Select>

                  {contentType === "text" && (
                    <div className="flex items-center flex-col gap-4">
                      <ArabicEnglishForm area name={`sections.${index}.content`} label={t("content")} />
                    </div>
                  )}

                  {contentType === "photo" && (
                    <FormInput
                      photo
                      single
                      name={`sections.${index}.content`}
                      label={t("photoUrl")}
                      placeholder={t("photoUrl")}
                    />
                  )}

                  {contentType === "video" && (
                    <div className="flex items-center gap-4">
                      <FormInput
                        name={`sections.${index}.content.videourl`}
                        label={t("videoUrl")}
                        placeholder={t("videoUrl")}
                      />
                      <FormInput
                        name={`sections.${index}.content.videoThumbnail`}
                        label={t("videoThumbnail")}
                        placeholder={t("videoThumbnail")}
                      />
                    </div>
                  )}

                  {contentType === "slider" && (
                    <FormInput photo name={`sections.${index}.content`} label={t("sliderImages")} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={() =>
              append({
                contentType: "text",
                content: { en: "", ar: "" },
                slider: [],
              })
            }
          >
            <Plus className="h-4 w-4 mr-2" />
            {t("addSection")}
          </Button>

          <Button type="submit">{t("save")}</Button>
        </div>
      </form>
    </Form>
  );
}
