import React from "react";
import { Button } from "../ui/button";
import { CirclePlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { AddCollectionForm } from "./add-collection-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
        <AddCollectionForm />
      </DialogContent>
    </Dialog>
    // <Sheet>
    //   <SheetTrigger asChild={asChild}>{children}</SheetTrigger>
    //   <SheetContent className="w-auto">
    //     <SheetHeader>
    //       <SheetTitle>Add your collection</SheetTitle>
    //       <SheetDescription>
    //         You can easily add a custom field to your item just by adding the custom field name from here.
    //       </SheetDescription>
    //     </SheetHeader>
    //     <AddCollectionForm />
    //   </SheetContent>
    // </Sheet>
  );
};
