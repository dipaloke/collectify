import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { AddCollectionFormContainer } from "./add-collection-form-container";

interface AddCollectionButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const AddCollectionButton = ({
  children,
  asChild,
}: AddCollectionButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent className="p-0 w-auto bg-transparent border-none">
        <AddCollectionFormContainer />
      </DialogContent>
    </Dialog>
  );
};

