import React from "react";
import { format, parseISO } from "date-fns";

interface DateProps {
  createdAt: Date | string;
}

export const Date = ({ createdAt }: DateProps) => {
  const date = typeof createdAt === "string" ? parseISO(createdAt) : createdAt;

  const formattedDate = format(date, "MMMM dd, yyyy");

  return formattedDate;
};
