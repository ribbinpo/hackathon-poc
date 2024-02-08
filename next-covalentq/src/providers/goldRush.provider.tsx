"use client";
import { GoldRushProvider } from "@covalenthq/goldrush-kit";

export default function GoldRushWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoldRushProvider
      apikey={process.env.NEXT_PUBLIC_COVALENT_API_KEY || ""}
      color="emerald"
    >
      {children}
    </GoldRushProvider>
  );
}
