import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface CustomFieldProps {
  control: any;
  name: string;
  label: string;
  checkboxLabel: string;
}

export const CustomField: React.FC<CustomFieldProps> = ({
  checkboxLabel,
  control,
  label,
  name,
}: CustomFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <>
              <div className="flex items-center space-x-4">
                <Checkbox
                  checked={field.value.state}
                  onCheckedChange={(checked) =>
                    field.onChange({
                      ...field.value,
                      state: checked,
                    })
                  }
                  id={`${name}Checkbox`}
                />
                <Label htmlFor={`${name}Checkbox`}>{checkboxLabel}</Label>
              </div>
              <Input
                value={field.value.name || ""}
                onChange={(e) =>
                  field.onChange({
                    ...field.value,
                    name: e.target.value,
                  })
                }
                disabled={!field.value.state}
                placeholder="Enter a name"
                className="mt-2"
              />
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
