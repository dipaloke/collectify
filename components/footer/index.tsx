"use client";

import { Logo } from "../logo";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100 dark:bg-inherit">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between font-bold">
        <Logo height={40} width={40} />
        <div className="md:space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
