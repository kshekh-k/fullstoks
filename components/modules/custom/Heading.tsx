import React from "react";

export default function Heading({ name }: { name: string }) {
  return (
    <div className="flex w-full relative">
      <h2 className="text-lg w-full font-semibold text-primary-500 uppercase border-b border-primary-900/5 after:absolute after:left-0 after:bottom-0 after:w-[80px] after:h-[2px] after:bg-primary-700 pb-2">
        {name}
      </h2>
    </div>
  );
}
