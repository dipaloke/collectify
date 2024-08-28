"use client";

import React, { useState, useTransition } from "react";
import { FormNav } from "./form-nav";
import { FormFooter } from "./form-footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCollectionFormSchema } from "@/schemas/add-collection";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { addCollection } from "@/actions/add-collection";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Category } from "@prisma/client";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { CustomField } from "./custom-field";
import { Separator } from "../ui/separator";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { FaCircleNotch } from "react-icons/fa";

const steps = [
  {
    id: "Step 1",
    name: "Collection Information",
    fields: ["Collection Name", "Collection Cover", "Description"],
  },

  {
    id: "Step 2",
    name: "Collection Fields",
    fields: [
      "Custom String One Name",
      "Custom Number One Name",
      "Custom Text One Name",
      "Custom Check Name One",
      "Custom Date One Name",
      "Other Fields",
    ],
  },
  { id: "Step 3", name: "Complete" },
];

export const AddCollectionForm = () => {
  const router = useRouter();

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof AddCollectionFormSchema>>({
    resolver: zodResolver(AddCollectionFormSchema),
    defaultValues: {
      name: "",
      description: "",
      category: Category.BOOKS,
      imageUrl: "",
      items: [],
      customString1: { state: false, name: "" },
      customString2: { state: false, name: "" },
      customString3: { state: false, name: "" },
      customText1: { state: false, name: "" },
      customText2: { state: false, name: "" },
      customText3: { state: false, name: "" },
      customInt1: { state: false, name: "" },
      customInt2: { state: false, name: "" },
      customInt3: { state: false, name: "" },
      customCheckbox1: { state: false, name: "" },
      customCheckbox2: { state: false, name: "" },
      customCheckbox3: { state: false, name: "" },
      customDate1: { state: false, name: "" },
      customDate2: { state: false, name: "" },
      customDate3: { state: false, name: "" },

      customFields: {},
    },
  });

  const onSubmit = (values: z.infer<typeof AddCollectionFormSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      addCollection(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
            toast({
              title: "Uh oh! Something went wrong.",
              description: `${data.error}`,
              variant: "destructive",
            });
          } else if (data?.success) {
            setSuccess("Collection added successfully!");
            router.push("/collections"); //TODO:REdirect back to collectionList
            toast({
              title: "Success!!",
              description: "Your collection has been created successfully.",
              variant: "default",
            });
          }
        })
        .catch((err) => {
          setError("An unexpected error occurred.");
          console.error("Submission error:", err);
          toast({
            title: "Unexpected Error",
            description: "An unexpected error occurred. Please try again.",
            variant: "destructive",
          });
        });
    });
  };

  type FieldName = keyof z.infer<typeof AddCollectionFormSchema>;

  const next = async () => {
    //TODO:test async functionality. remove if not necessary
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(onSubmit)();
      }

      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="absolute inset-0 flex flex-col justify-between p-24">
      <FormNav
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <Form {...form}>
        <form className="mt-9 py-12" onSubmit={form.handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <>
              <h2 className="text-2xl font-semibold leading-7">
                Collection Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Provide your collection details.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium leading-6">
                          Collection Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Choose a name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Cover Image</FormLabel>
                        <FormControl>
                          <Input {...field} disabled={isPending} type="file" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="sm:col-span-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Select {...form.control.register("category")}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="select a Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                {Object.values(Category).map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-full">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Write a short description</FormLabel>
                        <FormControl>
                          <Textarea {...field} disabled={isPending} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              <h2 className="text-2xl font-semibold leading-7">
                Choose Item fields
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Choose a custom field by checking a box
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customString1"
                    label="Custom String Field One"
                    checkboxLabel="Enable Custom String One"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customString2"
                    label="Custom String Field Two"
                    checkboxLabel="Enable Custom String Two"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customString3"
                    label="Custom String Field Three"
                    checkboxLabel="Enable Custom String Three"
                  />
                </div>

                <Separator className="col-span-full my-4" />

                {/* custom text */}

                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customText1"
                    label="Custom Text Field One"
                    checkboxLabel="Enable Custom Text One"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customText2"
                    label="Custom Text Field Two"
                    checkboxLabel="Enable Custom Text Two"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customText3"
                    label="Custom Text Field Three"
                    checkboxLabel="Enable Custom Text Three"
                  />
                </div>

                <Separator className="col-span-full my-4" />

                {/* custom Int */}
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customInt1"
                    label="Custom Number Field One"
                    checkboxLabel="Enable Custom Number One"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customInt2"
                    label="Custom Number Field Two"
                    checkboxLabel="Enable Custom Number Two"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customInt3"
                    label="Custom Number Field Three"
                    checkboxLabel="Enable Custom Number Three"
                  />
                </div>

                <Separator className="col-span-full my-4" />
                {/* custom checkbox */}

                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customCheckbox1"
                    label="Custom CheckBox Field One"
                    checkboxLabel="Enable Custom CheckBox One"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customCheckbox2"
                    label="Custom CheckBox Field Two"
                    checkboxLabel="Enable Custom CheckBox Two"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customCheckbox3"
                    label="Custom CheckBox Field Three"
                    checkboxLabel="Enable Custom CheckBox Three"
                  />
                </div>

                <Separator className="col-span-full my-4" />
                {/* custom Date */}

                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customDate1"
                    label="Custom Date Field One"
                    checkboxLabel="Enable Custom Date One"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customDate2"
                    label="Custom Date Field Two"
                    checkboxLabel="Enable Custom Date Two"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customDate3"
                    label="Custom Date Field Three"
                    checkboxLabel="Enable Custom Date Three"
                  />
                </div>

                <Separator className="col-span-full my-4" />
                {/* custom Fields */}

                <div className="sm:col-span-2">
                  <CustomField
                    control={form.control}
                    name="customFields"
                    label="JSON Custom Field"
                    checkboxLabel="Enable JSON Custom Field"
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-2xl font-semibold leading-7 ">Complete</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                You are one click away from creating a Collection.
              </p>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className="mt-5">
                {isPending ? (
                  <span className="flex items-center space-x-2">
                    <FaCircleNotch className="h-4 w-4 animate-spin" />
                    <span>Creating...</span>
                  </span>
                ) : (
                  "Create Collection"
                )}
              </Button>
            </>
          )}
        </form>
      </Form>
      {/* <FormFooter
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      /> */}
      {/* form footer */}
      <div className="pb-20">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
