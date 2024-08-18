import React from "react";
import { Button } from "../ui/button";
import { FileIcon } from "lucide-react";

export const ExportButton = () => {
  return (
    <Button size="sm" variant="outline" className="h-8 gap-1">
      <FileIcon className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Export
      </span>
    </Button>
  );
};
