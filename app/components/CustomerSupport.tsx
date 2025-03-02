"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { SkewedButton } from "./ButtonCustom";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const departments = [
  {
    name: "General & Corporate department",
    email: "info@vmoto.com",
  },
  {
    name: "Business Cooperation department",
    email: "info@vmoto.com",
  },
  {
    name: "Marketing department",
    email: "marketing@vmoto.com",
  },
  {
    name: "After Sales Service department",
    email: "service@vmoto.com",
  },
];

export function CustomerSupport() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm special uppercase tracking-wider text-gray-900 border-b border-black w-fit">
                CUSTOMER SUPPORT
              </p>
              <h1 className="text-5xl font-bold tracking-tight">CONNECT WITH OUR EXPERT SUPPORT</h1>
            </div>

            <div className="prose max-w-none">
              <p>
                For inquiries or further information about our cutting-edge products and services, please fill the form
                and contact directly our Customer Support, or use our listed contact details. We have a team of amazing
                humans who'd love to help you.
              </p>
              <ul className=" list-disc mt-3">
                <li>
                  General &amp; Corporate department: <a className=" text-[#16a8d8] underline" href="mailto:info@vmoto.com">info@vmoto.com</a>
                </li>
                <li>
                  Business Cooperation department: <a className=" text-[#16a8d8] underline" href="mailto:info@vmoto.com">info@vmoto.com</a>&nbsp;&nbsp;
                </li>
                <li>
                  Marketing department: <a className=" text-[#16a8d8] underline" href="mailto:marketing@vmoto.com">marketing@vmoto.com</a>
                </li>
                <li>
                  After Sales Service department: <a className=" text-[#16a8d8] underline" href="mailto:service@vmoto.com">service@vmoto.com</a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          NAME <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Please enter your full name." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          LAST NAME <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        EMAIL ADDRESS <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Please enter your email so we can get in touch." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        MESSAGE <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Please enter your comments." className="min-h-[100px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <SkewedButton type="submit">CONTACT US</SkewedButton>
              </form>
            </Form>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
