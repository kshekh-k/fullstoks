import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container h-full w-full max-w-screen-xl px-4 ${className}`}>{children}</div>;
}
