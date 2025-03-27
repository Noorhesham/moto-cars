import * as z from "zod";

export const productSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  category: z.string().min(1, "Category is required"),
  modelImage: z.string(),
  starter: z.object({
    name: z.object({
      en: z.string().min(1, "English name is required"),
      ar: z.string().min(1, "Arabic name is required"),
    }),
    title: z.object({
      en: z.string().min(1, "English title is required"),
      ar: z.string().min(1, "Arabic title is required"),
    }),
    subtitle: z.object({
      en: z.string().min(1, "English subtitle is required"),
      ar: z.string().min(1, "Arabic subtitle is required"),
    }),
    backgroundImage: z.string().min(1, "Background image is required"),
  }),
  colorTitle: z.object({
    en: z.string().min(1, "English color title is required"),
    ar: z.string().min(1, "Arabic color title is required"),
  }),
  features: z.array(
    z.object({
      description: z.object({
        en: z.string().min(1, "English feature description is required"),
        ar: z.string().min(1, "Arabic feature description is required"),
      }),
      image: z.string().min(1, "Feature image is required"),
    })
  ),
  titleFeatures: z.object({
    en: z.string().min(1, "English title features is required"),
    ar: z.string().min(1, "Arabic title features is required"),
  }),
  colors: z.array(
    z.object({
      color: z.string().min(1, "Color is required"),
      image: z.string().min(1, "Color image is required"),
    })
  ),
  leaflet: z.string().optional(),
  stats: z.array(
    z.object({
      prefix: z.object({
        en: z.string().min(1, "English prefix is required"),
        ar: z.string().min(1, "Arabic prefix is required"),
      }),
      number: z.union([z.string(), z.number()]),
      specialWord: z.object({
        en: z.string().min(1, "English special word is required"),
        ar: z.string().min(1, "Arabic special word is required"),
      }),
    })
  ),
  images: z.array(z.string()),
  ImageTitle: z
    .object({
      en: z.string().optional(),
      ar: z.string().optional(),
    })
    .optional(),
  specs: z.array(
    z.object({
      title: z.object({
        en: z.string().min(1, "English spec title is required"),
        ar: z.string().min(1, "Arabic spec title is required"),
      }),
      description: z.object({
        en: z.string().min(1, "English spec description is required"),
        ar: z.string().min(1, "Arabic spec description is required"),
      }),
    })
  ),
  content: z.object({
    en: z.string().min(1, "English content is required"),
    ar: z.string().min(1, "Arabic content is required"),
  }),
  videourl: z.string().optional(),
  videoThumbnail: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
