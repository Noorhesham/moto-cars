"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import FormInput from "@/app/components/inputs/FormInput";
import ArabicEnglishForm from "@/app/components/inputs/ArabicEnglishForm";
import { Button } from "@/components/ui/button";
import { createEntity, updateEntity } from "@/app/actions/actions";
import { type BusinessCaseFormValues, businessCaseSchema } from "@/app/validations/businesscase";
import { Form } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import FormSelect from "@/app/components/inputs/FormSelect";

export function BusinessCaseForm({ initialData }: { initialData?: BusinessCaseFormValues }) {
  const form = useForm<BusinessCaseFormValues>({
    resolver: zodResolver(businessCaseSchema),
    defaultValues: initialData || {
      title: { en: "", ar: "" },
      slug: "",
      backgroundImage: "",
      sections: [],
      category: "",
    },
  });
  const { toast } = useToast();

  const { handleSubmit, control, watch } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const onSubmit = async (data: BusinessCaseFormValues) => {
    console.log(data);
    const res = initialData
      ? await updateEntity("BusinessCase", initialData._id, data)
      : await createEntity("BusinessCase", data);

    if (res.success)
      toast({
        title: "Business case created successfully",
        description: "",
      });
    else
      toast({
        title: "Error creating business case",
        description: res.error || "An error occurred",
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <ArabicEnglishForm name="title" label="Title" />
        <FormInput name="slug" label="Slug" placeholder="Enter slug" />
        <FormInput name="backgroundImage" label="Background Image" photo single />
        <FormSelect
          name="category"
          label="category"
          options={[
            {
              value: "FOOD AND EXPRESS DELIVERY",
              label: "FOOD AND EXPRESS DELIVERY",
            },
            {
              value: "RIDE SHARING",
              label: "RIDE SHARING",
            },
            {
              value: "PUBLIC SERVICES",
              label: "PUBLIC SERVICES",
            },
          ]}
        />
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
                    onValueChange={(value: "text" | "photo") => form.setValue(`sections.${index}.contentType`, value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="photo">Photo</SelectItem>
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
                      name={`sections.${index}.content`}
                      label="Photo URL"
                      placeholder="Enter photo URL"
                    />
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
              })
            }
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>

          <Button type="submit">Save Business Case</Button>
        </div>
      </form>
    </Form>
  );
}
