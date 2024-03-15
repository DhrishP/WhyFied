import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WhyFied",
  description: "A Progressive web app that makes you think",
  manifest: "/manifest.json",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Create a higher-order component (HOC) that provides the context

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={rajdhani.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
