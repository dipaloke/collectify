import React from "react";
import { useParams } from "next/navigation";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const UserIdPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default UserIdPage;