"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export function LoginPortal() {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("portal");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen  p-6 flex flex-col items-center justify-center gap-6">
      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-8">{t("loginTitle")}</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-1">
                    {t("username")}
                    <span className="text-red-500">{t("required")}</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#4A90E2] px-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-1">
                    {t("password")}
                    <span className="text-red-500">{t("required")}</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#4A90E2] px-0 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className={cn(
                "w-full bg-transparent text-[#4A90E2] border-2 border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-colors"
              )}
            >
              {t("loginButton")}
            </Button>
          </form>
        </Form>

        <button className="w-full text-center text-sm text-[#4A90E2] mt-4 hover:underline">
          {t("forgotPassword")}
        </button>
      </div>

      {/* RMI Service Card */}
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-6">{t("rmiTitle")}</h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
          >
            {t("ioRegistration")}
          </Button>
          <Button
            variant="outline"
            className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
          >
            {t("ioEmployeeRegistration")}
          </Button>
        </div>
      </div>
    </div>
  );
}
