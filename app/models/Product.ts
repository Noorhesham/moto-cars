import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const ProductSchema = new mongoose.Schema(
  {
    starter: {
      name: {
        en: { type: String, required: true },
        ar: { type: String, required: true },
      },
      title: {
        en: { type: String, required: true },
        ar: { type: String, required: true },
      },
      subtitle: {
        en: { type: String, required: true },
        ar: { type: String, required: true },
      },
      backgroundImage: { type: String, required: true },
    },
    category: { type: String },
    features: [
      {
        description: {
          en: { type: String, required: true },
          ar: { type: String, required: true },
        },
        image: { type: String, required: true },
      },
    ],
    titleFeatures: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    colorTitle: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    colors: [
      {
        color: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    leaflet: { type: String },
    stats: [
      {
        prefix: {
          en: { type: String, required: true },
          ar: { type: String, required: true },
        },
        number: { type: Number, required: true },
        specialWord: {
          en: { type: String, required: true },
          ar: { type: String, required: true },
        },
      },
    ],
    images: [String],
    ImageTitle: {
      en: { type: String },
      ar: { type: String },
    },
    specs: [
      {
        title: {
          en: { type: String, required: true },
          ar: { type: String, required: true },
        },
        description: {
          en: { type: String, required: true },
          ar: { type: String, required: true },
        },
      },
    ],
    content: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    slug: { type: String, required: true, unique: true },
    videourl: { type: String },
    videoThumbnail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
