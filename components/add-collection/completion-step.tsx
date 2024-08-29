import React from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Button } from "../ui/button";
import { FaCircleNotch } from "react-icons/fa";

interface CompletionStepProps {
  error: string | undefined
  success: string | undefined
  isPending: boolean
}

export const CompletionStep = ({error,isPending,success}: CompletionStepProps) => {
  return (
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
  );
};
