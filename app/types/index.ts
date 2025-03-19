<<<<<<< HEAD
interface DynamicFormProps {
  fields: any[];
  onSubmit: any;
  defaultValues?: any;
  submitButtonText?: string;
  className?: string;
  children?: any;
  fieldArrays?: any[];
}
=======
import { ZodTypeAny } from "zod";

export interface DynamicFormProps {
  fields: IFormField[];
  onSubmit: any;
  defaultValues?: Record<string, any>;
  submitButtonText?: string;
  className?: string;
  children?: React.ReactNode;
  fieldArrays?: any[];
}

export type IFormField = {
  name: string;
  label?: string;
  description?: string;
  component: "input" | "select" | "checkbox" | "textarea" | "switch" | "photo" | "array";
  type?: string;
  options?: Array<{ value: string; label: string }>;
  validation?: ZodTypeAny;
  placeholder?: string;
  className?: string;
  props?: Record<string, any>;
  password?: boolean;
};
>>>>>>> 845e2b7 (meow)
