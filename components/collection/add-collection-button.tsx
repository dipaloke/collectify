import React from "react";
import { Button } from "../ui/button";
import { CirclePlusIcon } from "lucide-react";

export const AddCollectionButton = () => {
  return (
    <Button size="sm" className="h-8 gap-1">
      <CirclePlusIcon className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Add Collection
      </span>
    </Button>
  );
};
