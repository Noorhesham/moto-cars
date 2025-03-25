import * as z from "zod";

const SectionSchema = z.object({
  contentType: z.enum(["text", "photo"]),
  content: z.union([
    z.object({
      en: z.string(),
      ar: z.string(),
    }),
    z.array(z.string()),
  ]),
});

// Define the schema for the business case
export const businessCaseSchema = z.object({
  title: z.object({
    en: z.string().min(1, "English title is required"),
    ar: z.string().min(1, "Arabic title is required"),
  }),
  slug: z.string().min(1, "Slug is required"),
  backgroundImage: z.string().min(1, "Background image is required"),
  sections: z.array(SectionSchema),
  category: z.string().min(1, "Category is required"),
});

export type BusinessCaseFormValues = z.infer<typeof businessCaseSchema>;
