import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CirclePlusIcon } from "lucide-react";
import { UserSettingsForm } from "./user-settings-form";
import { generateVerificationToken } from "@/lib/token";
import { currentUser } from "@/lib/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

export const UserSettings = async () => {
  const user = await currentUser();

  const token = await generateVerificationToken(user?.email as string);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex-1 flex">
          <div className="">
            <CardTitle className="text-md md:text-2xl">Settings</CardTitle>
            <CardDescription className="text-sm">
              Manage your account.
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {/* alert dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <CirclePlusIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Generate API Token
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>This is your API Token</AlertDialogTitle>
                  <AlertDialogDescription>
                    {token && `${token}`}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardHeader>
      <CardContent className="container mx-auto">
        <UserSettingsForm />
      </CardContent>
    </Card>
  );
};
