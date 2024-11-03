import { cn } from "@/lib/utils";
import { Option, Style } from "@/types";
import Image from "next/image";
import React from "react";

export default function ProductStyleOptions({
  style,
  styles,
  setStyle,
  setActive,
  setOption,
  setOptionActive,
  setImages,
  getStock,
  option,
  options,
}: {
  style: Style;
  styles: Style[];
  setStyle: (value: Style) => void;
  setActive: (value: number) => void;
  setOption: (value: Option) => void;
  setOptionActive: (value: number) => void;
  setImages: (value: string[]) => void;
  getStock: () => void;
  option: Option;
  options: Option[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
      {/* styles  */}
      <div className="flex flex-col gap-4">
        <h2 className="text-primary-500">
          <span className="font-semibold text-lg">Styles:</span>
          <span className="text-sm font-normal ms-10">{style.name}</span>
        </h2>

        <div className="flex items-center gap-4">
          {styles.map((item: Style, idx: number) => (
            <div
              onMouseEnter={() => {
                setStyle(item);
                setActive(idx);
              }}
              key={idx}
              className={cn(
                "border border-primary-900/5 size-8 p-0.5 text-sm cursor-pointer rounded overflow-hidden hover:border-primary-400 flex items-center justify-center ease-in-out duration-200",
                item === style &&  "border-primary-600"
              )}
            >
              <Image
                src={item.image}
                className="size-6 object-cover rounded"
                width={8}
                height={8}
                alt="style image"
              />
              {!item.image && (
                <span className="absolute inset-0 top-2 text-center text-primary-900">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Options  */}
      <div className="flex flex-col gap-4 flex-1 w-full">
      <h2 className="text-primary-500">
          <span className="text-lg font-semibold">Options:</span>
          <span className="text-sm ms-10 font-normal text-red-400">
            {option.qty > 0 ? `${option.qty} Left in stock` : "Out of stock"}
          </span>
        </h2>

        <div className="flex items-center flex-wrap gap-1">
          {options.map((item: Option, idx2: number) => (
            <div
              key={idx2}
              onMouseEnter={() => {
                setOption(item);
                setImages(item.images);
                setOptionActive(idx2);
                getStock();
              }}
              className={cn(
                "border border-primary-900/5 px-2 py-1 text-sm cursor-pointer rounded overflow-hidden hover:border-primary-400 flex items-center justify-center ease-in-out duration-200",
                item === option &&
                  "border-primary-600"
              )}
            >
              <div>{item.option}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
