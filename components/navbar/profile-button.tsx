"use client";

import { logOut } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegUser } from "react-icons/fa";

export const ProfileButton = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const onClick = () => {
    router.push(`/users/${user?.id}`);
  };
  return (
    <span className="cursor-pointer flex" onClick={onClick}>
      <FaRegUser className="h-5 w-5 mr-4" />
      Profile
    </span>
  );
};
