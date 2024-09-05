"use client";

import React, { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { userSettingsSchema } from "@/schemas/user-settings-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useSession } from "next-auth/react";
import { userSettings } from "@/actions/user-settings";
import { toast } from "sonner";
import { FileUploader } from "../file-uploader";
import { useRouter } from "next/navigation";

export const UserSettingsForm = () => {
  const user = useCurrentUser();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [imageUrl, setImageUrl] = useState("");
//   const [isPending, startTransition] = useTransition();

  const { update } = useSession();

  const form = useForm<z.infer<typeof userSettingsSchema>>({
    resolver: zodResolver(userSettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      image: user?.image || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
    },
  });

    const onSubmit = (values: z.infer<typeof userSettingsSchema>) => {
      setIsLoading(true);
      setError("");
      setSuccess("");

      values.image = imageUrl;

      userSettings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            toast.error(data.error);
            setIsLoading(false);
          }
          if (data.success) {
            update();
            setSuccess(data.success);
            toast.success(data.success);
            setIsLoading(false);
            // form.reset(values);
            router.refresh();
          }
        })
        .catch(() => {
          setError("something went wrong");
          toast.error("something went wrong");
        });
    };



  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start rounded-lg border p-3 shadow-md">
                <div className="space-y-0.5">
                  <FormLabel>Name</FormLabel>
                  <FormDescription>Change your Name</FormDescription>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    disabled={isLoading}
                    className=" bg-gray-100"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start rounded-lg border p-3 shadow-md">
                <div className="space-y-0.5">
                  <FormLabel>Image</FormLabel>
                  <FormDescription>Change your Image</FormDescription>
                </div>
                <FormControl>
                  <FileUploader {...field} setImageUrl={setImageUrl} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {user?.isOAuth === false && (
            <>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start rounded-lg border p-3 shadow-md">
                    <div className="space-y-0.5">
                      <FormLabel>Email</FormLabel>
                      <FormDescription>
                        Providing same email for more then one account is
                        prohibited
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        type="email"
                        disabled={isLoading}
                        className=" bg-gray-100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start rounded-lg border p-3 shadow-md">
                    <div className="space-y-0.5">
                      <FormLabel>Password</FormLabel>
                      <FormDescription>
                        Provide your current password.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                        disabled={isLoading}
                        className=" bg-gray-100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* new password */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start rounded-lg border p-3 shadow-md">
                    <div className="space-y-0.5">
                      <FormLabel>New Password</FormLabel>
                      <FormDescription>
                        Provide a new password (at least 6 characters)
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                        disabled={isLoading}
                        className=" bg-gray-100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          disabled={
            !form.formState.isValid || !form.formState.isDirty || isLoading
          }
          type="submit"
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
    
  );
};
