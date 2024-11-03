import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 

export default function Currency({
  currency,
  handleCurrency,
}: {
  currency: string;
  handleCurrency: (value: string) => void;
}) {
  return (
    <Select onValueChange={handleCurrency}>
       <SelectTrigger className="text-white rounded-none bg-transparent border-0 ring-0 w-auto gap-2 focus:ring-0">
        <span>$</span>
        <SelectValue placeholder={currency} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">USD</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
