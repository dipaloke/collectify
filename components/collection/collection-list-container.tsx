
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { HeaderBreadcrumb } from "./breadcrumb";
import { CollectionList } from "./collection-list";

export default function CollectionListContainer() {
  return (
    <div className="flex w-full flex-col bg-muted/40 md:container">
      <div className="flex flex-col sm:gap-4 sm:py-4 ">
        <div className="flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <HeaderBreadcrumb />
        </div>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="collection">My collections</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="collection">
              <CollectionList />
            </TabsContent>
            <TabsContent value="settings">
              {/* TODO: Settings for normal user and admins  */}
              Settings page
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
