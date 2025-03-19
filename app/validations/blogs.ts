import * as z from "zod";

// Define the schema for a single section
const SectionSchema = z.object({
  contentType: z.enum(["text", "photo", "video", "slider"]),
  content: z.union([
    z.object({
      en: z.string(),
      ar: z.string(),
    }),
    z.string().min(1, "Content is required"),
    z.object({
      videourl: z.string().min(1, "Video URL is required"),
      videoThumbnail: z.string().min(1, "Video thumbnail is required"),
    }),
    z.array(z.string()).min(1, "At least one image is required for slider sections."),
  ]),
});

// Define the schema for the blog
export const blogSchema = z.object({
  title: z.object({
    en: z.string().min(1, "English title is required"),
    ar: z.string().min(1, "Arabic title is required"),
  }),
  slug: z.string().min(1, "Slug is required"),
  sections: z.array(SectionSchema).min(1, "At least one section is required"),
});

export type BlogFormValues = z.infer<typeof blogSchema>;
