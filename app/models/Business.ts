import mongoose, { Schema } from "mongoose";

// Define the schema for a single section
const SectionSchema = new Schema({
  contentType: {
    type: String,
    enum: ["text", "photo"], // Only text and photo content types
    required: true,
  },
  content: {
    type: Schema.Types.Mixed, // Mixed type to handle both bilingual and single content
    required: function () {
      return this.contentType === "text" || this.contentType === "photo";
    },
  },
});

// Define the schema for the business case
const BusinessCaseSchema = new Schema(
  {
    backgroundImage: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    sections: [SectionSchema], // Array of sections
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Auto-generate slug from the title (English)
BusinessCaseSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = this.title.en
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  next();
});

export default mongoose.models.BusinessCase || mongoose.model("BusinessCase", BusinessCaseSchema);
