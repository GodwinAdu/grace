import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ScrollUp from "@/components/commons/ScrollUp";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Altar of Grace Ministry",
  description: "Created by Jutech Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollUp />
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
