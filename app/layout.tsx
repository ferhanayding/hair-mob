
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Hair Clinic - Saç Ekimi Merkezi",
  description: "Türkiye'nin en iyi saç ekimi merkezi. Safir FUE, DHI Plus ve daha fazlası.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}