import React from "react";
import CollectionListContainer from "@/components/collection/collection-list-container";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const UserIdPage = async () => {
  const user = await currentUser()

  if(!user) {
    redirect("/")
  }
  return (
    <div className="w-full flex flex-col justify-center items-center mb-16 lg:mb-16">
      <CollectionListContainer />
    </div>
  );
};

export default UserIdPage;
