"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { vehicles } from "../constants";
import { SkewedButton } from "./ButtonCustom";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  vehicle: z.string().min(1, "Please select a vehicle"),
  dealer: z.string().min(1, "Please select a dealer"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const dealers = ["Downtown Dealership", "West Side Location", "East Side Location", "North Side Location"];

export function BookTestRide() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      vehicle: "",
      dealer: "",
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider special border-b border-black w-fit text-gray-600">
                BOOK A TEST RIDE
              </p>
              <h1 className="text-5xl font-bold tracking-tight">BOOK A TEST RIDE</h1>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Hop on one of our electric motorcycles or scooters and get ready to discover a whole new world of
                sensations. Put yourself to the test and experience the performance and comfort of our vehicles
                firsthand, appreciating their handling and responsive acceleration. Simulate your usual journeys to
                check the riding range based on your real needs, immersing yourself in the pleasure of a fun ride,
                enriched by the charm of electric technology.
              </p>
              <p className="leading-relaxed">
                Don&apos;t miss the chance to live a unique and sustainable driving experience! Fill out the form now to
                book your free test ride!
              </p>
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
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          FIRST NAME <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
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

                {/* Vehicle Selection */}
                <FormField
                  control={form.control}
                  name="vehicle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>VEHICLE</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an entry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {vehicles.map((vehicle) => (
                            <SelectItem key={vehicle} value={vehicle}>
                              {vehicle}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dealer Selection */}
                <FormField
                  control={form.control}
                  name="dealer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SELECT YOUR DEALER</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an entry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {dealers.map((dealer) => (
                            <SelectItem key={dealer} value={dealer}>
                              {dealer}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                        <Textarea
                          {...field}
                          placeholder="e.g. The reason for my enquiry is..."
                          className="min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <SkewedButton>CONTACT US</SkewedButton>
              </form>
            </Form>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
