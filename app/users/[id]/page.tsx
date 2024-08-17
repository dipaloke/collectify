"use client"
import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logOut } from "@/actions/logout";
import CollectionListContainer from "@/components/collection/collection-list-container";


const UserIdPage = () => {

  const user = useCurrentUser()

  return (
    <div className="w-full flex flex-col mb-16 lg:mb-16">
      {/* <h1 className="text-3xl font-bold mb-4">Your Collections</h1>
        {JSON.stringify({user})}

        <Button type="submit" onClick={() => logOut()}>Sign out</Button> */}
        <CollectionListContainer />

    </div>
  );
};

export default UserIdPage;
