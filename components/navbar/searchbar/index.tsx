"use client"
import { useState } from "react";
import { AutoComplete, type Option } from "./autoComplete";

const FRAMEWORKS = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "wordpress",
    label: "WordPress",
  },
  {
    value: "express.js",
    label: "Express.js",
  },
  {
    value: "nest.js",
    label: "Nest.js",
  },
];

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState<Option>();
  return (
    <div className="flex flex-col gap-4">
      <AutoComplete
        options={FRAMEWORKS}
        emptyMessage="No result"
        placeholder="Find item or collection"
        onValueChange={setValue}
        value={value}
        disabled={isDisabled}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchBar;
