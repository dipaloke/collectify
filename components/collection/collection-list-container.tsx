import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { HeaderBreadcrumb } from "./breadcrumb";
import { CollectionList } from "./collection-list";

import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UserSettings } from "../settings/user-settings";


 const CollectionListContainer = async () =>{

  return (
    <div className="flex w-full flex-col bg-muted/40 md:container">
      <div className="flex flex-col sm:gap-4 sm:py-4 ">
        <div className="flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <HeaderBreadcrumb />
        </div>
        <div className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="collection">
            <TabsList>
              <TabsTrigger value="collection">My collections</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="collection">
              <CollectionList />
            </TabsContent>
            <TabsContent value="settings">
              <UserSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default CollectionListContainer
