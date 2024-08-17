import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  HomeIcon,
  LineChartIcon,
  LogOutIcon,
  Package2Icon,
  PackageIcon,
  PanelLeftIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { ProfileButton } from "./profile-button";
import { UserButton } from "./user-button";
import { LogoutButton } from "./logout-button";
import { IoMdExit } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

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
          {/* <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            prefetch={false}
          >
            <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>

          </Link> */}
          <div className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <ProfileButton />
          </div>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <HomeIcon className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Orders
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground"
            prefetch={false}
          >
            <PackageIcon className="h-5 w-5" />
            Products
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            Customers
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
