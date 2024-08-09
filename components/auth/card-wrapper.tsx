import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
  backButtonHref
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md mt-10 mb-20">
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
            <CardFooter>
                <Social />
            </CardFooter>
        )}
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
    </Card>
  )
};