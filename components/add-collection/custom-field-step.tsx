import React from "react";
import { CustomField } from "./custom-field";
import { useFormContext } from "react-hook-form";
import { Separator } from "../ui/separator";

export const CustomFieldStep = () => {
  const form = useFormContext();
  return (
    <>
      <h2 className="text-2xl font-semibold leading-7">Choose Item fields</h2>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        Choose a custom field by checking a box
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customString1"
            label="Custom String Field One"
            checkboxLabel="Enable Custom String One"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customString2"
            label="Custom String Field Two"
            checkboxLabel="Enable Custom String Two"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customString3"
            label="Custom String Field Three"
            checkboxLabel="Enable Custom String Three"
          />
        </div>

        <Separator className="col-span-full my-4" />

        {/* custom text */}

        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customText1"
            label="Custom Text Field One"
            checkboxLabel="Enable Custom Text One"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customText2"
            label="Custom Text Field Two"
            checkboxLabel="Enable Custom Text Two"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customText3"
            label="Custom Text Field Three"
            checkboxLabel="Enable Custom Text Three"
          />
        </div>

        <Separator className="col-span-full my-4" />

        {/* custom Int */}
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customInt1"
            label="Custom Number Field One"
            checkboxLabel="Enable Custom Number One"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customInt2"
            label="Custom Number Field Two"
            checkboxLabel="Enable Custom Number Two"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customInt3"
            label="Custom Number Field Three"
            checkboxLabel="Enable Custom Number Three"
          />
        </div>

        <Separator className="col-span-full my-4" />
        {/* custom checkbox */}

        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customCheckbox1"
            label="Custom CheckBox Field One"
            checkboxLabel="Enable Custom CheckBox One"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customCheckbox2"
            label="Custom CheckBox Field Two"
            checkboxLabel="Enable Custom CheckBox Two"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customCheckbox3"
            label="Custom CheckBox Field Three"
            checkboxLabel="Enable Custom CheckBox Three"
          />
        </div>

        <Separator className="col-span-full my-4" />
        {/* custom Date */}

        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customDate1"
            label="Custom Date Field One"
            checkboxLabel="Enable Custom Date One"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customDate2"
            label="Custom Date Field Two"
            checkboxLabel="Enable Custom Date Two"
          />
        </div>
        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customDate3"
            label="Custom Date Field Three"
            checkboxLabel="Enable Custom Date Three"
          />
        </div>

        <Separator className="col-span-full my-4" />
        {/* custom Fields */}

        <div className="sm:col-span-2">
          <CustomField
            control={form.control}
            name="customFields"
            label="JSON Custom Field"
            checkboxLabel="Enable JSON Custom Field"
          />
        </div>
      </div>
    </>
  );
};
