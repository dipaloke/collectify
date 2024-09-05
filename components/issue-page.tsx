"use client"
import React, { useEffect, useState } from "react";

export const IssuePage = () => {
  const [issueData, setIssueData] = useState<any>(null);

  useEffect(() => {
    const fetchJiraIssue = async () => {
      try {
        const response = await fetch("/api/get-jira-issue");

        if (!response.ok) {
          throw new Error("Error fetching Jira issue");
        }

        const data = await response.json();
        setIssueData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJiraIssue();
  }, []);

  return (
    <div>
      <h1>Jira Issue</h1>
      {issueData ? (
        <pre>{JSON.stringify(issueData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
