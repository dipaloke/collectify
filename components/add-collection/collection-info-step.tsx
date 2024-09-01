"use client";
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
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
import { z } from "zod";
import { AddCollectionFormSchema } from "@/schemas/add-collection";

import { FileUploader } from "./file-uploader";
import Markdown from 'react-markdown'
interface CollectionInfoStepProps {
  isPending: boolean;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const CollectionInfoStep = ({
  isPending,
  setImageUrl,
}: CollectionInfoStepProps) => {
  const form = useFormContext<z.infer<typeof AddCollectionFormSchema>>();

  return (
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
                    placeholder="Choose a name"
                    disabled={isPending}
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

                  <FileUploader
                    {...field}
                    setLoading={isPending}
                    setImageUrl={setImageUrl}
                  />
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
                <FormDescription>BOOKS is selected by default</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Write a short description</FormLabel>
                <FormControl>
                  <Markdown>

                  </Markdown>
                  <Textarea {...field} disabled={isPending} rows={10} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  );
};
