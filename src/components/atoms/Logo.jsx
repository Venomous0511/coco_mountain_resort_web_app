import Image from "next/image";
import React from "react";
import logoSrc from "/images/ui/logo.png";

export default function Logo({
  alt = "Logo",
  width = 100,
  height = 100,
  className = "",
  ...props
}) {
  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}
