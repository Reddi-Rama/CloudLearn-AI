import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "CloudLearn AI",
  description:
    "A modern cloud-based learning platform for B.Tech students.",

  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>
    </html>
  );
}