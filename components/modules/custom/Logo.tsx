import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link id="logo" href="/" className="flex relative w-60">
      <Image
        src="/assets/images/fullstoks-logo.svg"
        width={150}
        height={50}
        alt="logo" className="h-auto w-auto"
      />
      <h2 data-testid="Full Stocks" className="sr-only">
        Full Stoks
      </h2>
    </Link>
  );
}
