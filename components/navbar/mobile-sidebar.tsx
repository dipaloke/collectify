import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  Library,
  LineChartIcon,
  LogOutIcon,
  PanelLeftIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { ProfileButton } from "./profile-button";
import { UserButton } from "./user-button";
import { LogoutButton } from "./logout-button";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeftIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <div className="border-b pb-4">
            <Logo height={50} width={50} />
          </div>
          <div className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <ProfileButton />
          </div>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Library className="h-5 w-5" />
            Collections
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <LineChartIcon className="h-5 w-5" />
            Settings
          </Link>

          <div className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <LogoutButton>
              <LogOutIcon className="h-5 w-5 mr-4" />
              Logout
            </LogoutButton>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
