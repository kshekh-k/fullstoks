import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globeicon } from "@/icons"; 
import React from "react";

export default function Language({
  languages,
  handleLanguage,
}: {
  languages: string;
  handleLanguage: (value: string) => void;
}) {
  return (
    <Select onValueChange={handleLanguage}>
      <SelectTrigger className="text-white rounded-none bg-transparent border-0 ring-0 w-auto gap-2 focus:ring-0">
        <Globeicon className="size-4" />
        <SelectValue placeholder={languages} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
