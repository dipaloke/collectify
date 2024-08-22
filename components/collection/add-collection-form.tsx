"use client"
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const categories = ["book", "coins", "silverware", "anime", "others"];

export const AddCollectionForm = () => {

  // const [customFields, setCustomFields] = useState({
  //   customStringName: "",
  //   customIntName: "",
  //   customDateName: "",
  //   customCheckboxName: "",
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCustomFields({ ...customFields, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  

  return (
    <Card className="max-w-md mx-auto p-6">
      <CardHeader>
        <CardTitle>Create New Collection</CardTitle>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  );
};
