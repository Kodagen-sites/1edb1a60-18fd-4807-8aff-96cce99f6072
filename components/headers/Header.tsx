"use client";

import HeaderCommandBar from "./HeaderCommandBar";

export const HEADER_VARIANTS = {
  "command-bar": HeaderCommandBar,
} as const;

export type HeaderVariantId = keyof typeof HEADER_VARIANTS;

export default function Header() {
  return <HeaderCommandBar />;
}
