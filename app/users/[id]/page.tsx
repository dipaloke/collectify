import React from "react";
import CollectionListContainer from "@/components/collection/collection-list-container";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const UserIdPage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div className="bg-slate-100 pt-5 pb-10 w-full flex flex-col justify-center items-center">
      <CollectionListContainer />
    </div>
  );
};

export default UserIdPage;
