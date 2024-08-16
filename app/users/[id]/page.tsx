"use client"
import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logOut } from "@/actions/logout";

const UserIdPage = () => {
  // const session = await auth();

  const user = useCurrentUser()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Collections</h1>
        {JSON.stringify({user})}

        <Button type="submit" onClick={() => logOut()}>Sign out</Button>

    </div>
  );
};

export default UserIdPage;
