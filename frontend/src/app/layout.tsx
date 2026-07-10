import type { Metadata } from "next";
import "./globals.css";

import { AppProvider } from "../providers";

export const metadata: Metadata = {
  title: {
    default: "CloudLearn AI",
    template: "%s | CloudLearn AI",
  },
  description:
    "A modern cloud-based learning platform for B.Tech students.",

  keywords: [
    "CloudLearn AI",
    "B.Tech",
    "Learning Platform",
    "Programming",
    "AI",
    "Cloud Computing",
    "Machine Learning",
    "Web Development",
    "Data Science",
  ],

  authors: [
    {
      name: "CloudLearn AI Team",
    },
  ],

  creator: "CloudLearn AI",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  metadataBase: new URL("https://cloudlearn.ai"),
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
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}