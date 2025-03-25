interface DynamicFormProps {
  fields: any[];
  onSubmit: any;
  defaultValues?: any;
  submitButtonText?: string;
  className?: string;
  children?: any;
  fieldArrays?: any[];
}
// Add this interface to your existing types file
export interface IBusinessCase {
  _id: string;
  title: {
    en: string;
    ar: string;
  };
  slug: string;
  backgroundImage: string;
  sections: Array<{
    contentType: "text" | "photo";
    content: string | { en: string; ar: string };
  }>;
  createdAt: string;
  updatedAt: string;
}
