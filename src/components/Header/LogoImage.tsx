import React from "react";
import Image from "next/image";

interface OwnProps {
  style?: Record<string, any>;
}
export default function LogoImage({ style }: OwnProps) {
  return (
    <Image
      style={style}
      layout="responsive"
      width={192}
      height={44}
      src="/logo-softr.svg"
    />
  );
}
