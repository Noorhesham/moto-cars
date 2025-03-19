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

export function BlogForm({ initialData }: { initialData?: BlogFormValues }) {
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
  console.log(form.formState.errors);
  const onSubmit = async (data: BlogFormValues) => {
    console.log(data);
    const res = initialData ? await updateEntity("Blog", initialData._id, data) : await createEntity("Blog", data);
    console.log(res);
    if (res.success)
      toast({
        title: "Blog created successfully",
        description: "",
      });
    else
      toast({
        title: "Error creating blog",
        description: "",
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <ArabicEnglishForm name="title" label="Title" />
        <FormInput name="slug" label="Slug" placeholder="Enter slug" />
        <FormInput name="backgroundImage" label="Background Image" photo single />

        <div className="space-y-4">
          {fields.map((field, index) => {
            const contentType = watch(`sections.${index}.contentType`);

            return (
              <div key={field.id} className="p-4 border rounded-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">Section {index + 1}</h3>
                  <button type="button" onClick={() => remove(index)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Shadcn Select Component */}
                  <Select
                    value={contentType}
                    onValueChange={(value: "text" | "photo" | "video" | "slider") =>
                      form.setValue(`sections.${index}.contentType`, value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="photo">Photo</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="slider">Slider</SelectItem>
                    </SelectContent>
                  </Select>

                  {contentType === "text" && (
                    <div className="flex items-center flex-col gap-4">
                      <ArabicEnglishForm area name={`sections.${index}.content`} label="Content" />
                    </div>
                  )}

                  {contentType === "photo" && (
                    <FormInput
                      photo
                      single
                      name={`sections.${index}.content`}
                      label="Photo URL"
                      placeholder="Enter photo URL"
                    />
                  )}

                  {contentType === "video" && (
                    <div className="flex items-center gap-4">
                      <FormInput
                        name={`sections.${index}.content.videourl`}
                        label="Video URL"
                        placeholder="Enter video URL"
                      />
                      <FormInput
                        name={`sections.${index}.content.videoThumbnail`}
                        label="Video Thumbnail"
                        placeholder="Enter video thumbnail URL"
                      />
                    </div>
                  )}

                  {contentType === "slider" && (
                    <FormInput photo name={`sections.${index}.content`} label="Slider Images" />
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
            Add Section
          </Button>

          <Button type="submit">Save Blog</Button>
        </div>
      </form>
    </Form>
  );
}
