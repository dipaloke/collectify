"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddCollectionForm } from "./add-collection-form";

export const AddCollectionFormContainer = () => {
  return (
    <Card className="max-w-2xl mx-auto p-6 mt-10 mb-40">
      <CardHeader>
        <CardTitle>Create New Collection</CardTitle>
      </CardHeader>
      <CardContent>
        <AddCollectionForm />
      </CardContent>
    </Card>
  );
};
