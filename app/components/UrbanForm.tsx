"use client";

import type React from "react";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { SkewedButton } from "./ButtonCustom";

// Sample countries list - you can replace with your own data
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Japan",
  "China",
  "India",
  "Brazil",
  // Add more countries as needed
];

export default function UrbanForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.country.trim()) newErrors.country = "Country cannot be blank";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // Replace with your actual form submission logic
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          country: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const selectCountry = (country: string) => {
    setFormData((prev) => ({ ...prev, country }));
    setShowCountryDropdown(false);
    if (errors.country) {
      setErrors((prev) => ({ ...prev, country: "" }));
    }
  };

  return (
    <div className="bg-white  p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <p className="text-gray-500 mb-2">Please enter your full name.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
                NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
                LAST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
            COUNTRY <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div
              className="w-full border-b border-gray-300 py-2 flex justify-between items-center cursor-pointer"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              <span className={formData.country ? "text-gray-900" : "text-gray-400"}>
                {formData.country || "Select an option"}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>

            {showCountryDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectCountry(country)}
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            EMAIL ADDRESS <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-sm mb-2">Please enter your email so we can get in touch.</p>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. psherman@wallaby.com"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            MESSAGE <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-sm mb-2">Please enter your comments.</p>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. The reason for my enquiry is..."
            rows={4}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="border border-gray-200 p-4 rounded-md flex items-center gap-4">
          <input type="checkbox" id="captcha" className="h-5 w-5 border-gray-300 rounded" />
          <label htmlFor="captcha" className="text-gray-700 flex items-center gap-2">
            <span className="text-gray-500 font-arabic">أنا الإنسان</span>
            <div className="flex flex-col items-center">
              <img src="/captcha-icon.png" alt="hCaptcha" className="h-8 w-8" />
              <div className="text-[10px] text-gray-500">Privacy - Terms</div>
            </div>
          </label>
        </div>

        <div>
          <SkewedButton
            type="submit"
            disabled={isSubmitting}
            className=" text-black font-bold py-3 px-8 uppercase hover:bg-[#6dcfe3] hover:before:bg-[#6dcfe3] transition-colors"
          >
            {isSubmitting ? "SENDING..." : "CONTACT US"}
          </SkewedButton>
        </div>
      </form>
    </div>
  );
}
