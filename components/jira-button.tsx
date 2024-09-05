"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BadgeHelp} from "lucide-react";
import { JiraIssueCollectorSrc } from "@/constants";

const JiraButton: React.FC = () => {
  useEffect(() => {
    window.ATL_JQ_PAGE_PROPS = {
      triggerFunction: function (showCollectorDialog: () => void) {
        document
          .getElementById("myCustomTrigger")
          ?.addEventListener("click", function (e) {
            e.preventDefault();
            showCollectorDialog();
          });
      },
    };

    const script = document.createElement("script");
    script.src = JiraIssueCollectorSrc;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-1 z-50">
      <Button id="myCustomTrigger" className="rounded-full" variant="ghost">
        <BadgeHelp className="h-8 w-8 text-muted-foreground" />
      </Button>
    </div>
  );
};

export default JiraButton;
