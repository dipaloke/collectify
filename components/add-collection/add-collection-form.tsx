"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";

import { FormNav } from "./form-nav";
import { FormFooter } from "./form-footer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { AddCollectionFormSchema } from "@/schemas/add-collection";

import { Form } from "../ui/form";
import { toast } from "sonner";

import { addCollection } from "@/actions/add-collection";

import { CollectionInfoStep } from "./collection-info-step";
import { CustomFieldStep } from "./custom-field-step";
import { CompletionStep } from "./completion-step";
import { useCurrentUser } from "@/hooks/use-current-user";


const steps = [
  {
    id: "Step 1",
    name: "Collection Information",
    fields: ["name", "imageUrl", "category", "description"],
  },

  {
    id: "Step 2",
    name: "Choose Item fields",
    fields: [
      "customString1",
      "customString2",
      "customString3",
      "customText1",
      "customText2",
      "customText3",
      "customInt1",
      "customInt2",
      "customInt3",
      "customCheckbox1",
      "customCheckbox2",
      "customCheckbox3",
      "customDate1",
      "customDate2",
      "customDate3",
      "customFields",
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

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("")


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

  const user = useCurrentUser();

  const onSubmit = (values: z.infer<typeof AddCollectionFormSchema>) => {
    setError("");
    setSuccess("");
    setLoading(true);
    values.imageUrl = imageUrl

    addCollection(values)
      .then((data) => {
        if (data?.error) {
          setError(data.error);
          toast.error("Uh oh! Something went wrong.");
        } else if (data?.success) {
          setSuccess(data.success);
          toast.success(`${data.success}`);
          router.push(`users/${user?.id}`);
        }
      })
      .catch((err) => {
        setError("An unexpected error occurred.");
        console.error("Submission error:", err);
        toast.error("An unexpected error occurred. Please try again.");
      });
  };


  type FieldName = keyof z.infer<typeof AddCollectionFormSchema>;

  const next = async () => {
    const fields = steps[currentStep].fields;

    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;

    if (currentStep < steps.length - 1) {
      // if (currentStep === steps.length - 2) {
      //   await form.handleSubmit(onSubmit)();
      // }

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
          {currentStep === 0 && <CollectionInfoStep isPending={loading} setImageUrl={setImageUrl}/>}

          {currentStep === 1 && <CustomFieldStep />}

          {currentStep === 2 && (
            <CompletionStep
              error={error}
              success={success}
              // isPending={isPending}
              isPending={loading}
            />
          )}
        </form>
      </Form>

      <FormFooter
        onNext={next}
        onPrev={prev}
        currentStep={currentStep}
        stepsLength={steps.length}
      />
    </section>
  );
};
