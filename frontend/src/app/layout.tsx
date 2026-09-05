import type { Metadata } from "next";

import BackNavigation from "@/components/layout/BackNavigation";
import NavigationLoading from "@/components/layout/NavigationLoading";
import MouseGlow from "@/components/effects/MouseGlow";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AppProvider } from "../providers";

import "./globals.css";


/* ============================================================
   METADATA
============================================================ */

export const metadata: Metadata = {
  title: {
    default: "CloudLearn",
    template: "%s | CloudLearn",
  },

  description:
    "A modern learning platform for students.",

  keywords: [
    "CloudLearn",
    "B.Tech",
    "Learning Platform",
    "Programming",
    "Artificial Intelligence",
    "Cloud Computing",
    "Machine Learning",
    "Web Development",
    "Data Science",
    "Cyber Security",
  ],

  authors: [
    {
      name: "CloudLearn Team",
    },
  ],

  creator: "CloudLearn",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  metadataBase: new URL(
    "https://cloudlearn.ai"
  ),
};


/* ============================================================
   ROOT LAYOUT
============================================================ */

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
      <body
        className="
          min-h-screen
          antialiased
        "
      >

        {/* ==================================================
            NAVIGATION LOADING
        ================================================== */}

        <NavigationLoading />


        {/* ==================================================
            THEME
        ================================================== */}

        <ThemeProvider>

          {/* =================================================
              APP PROVIDER
          ================================================= */}

          <AppProvider>

            {/* ===============================================
                GLOBAL BACK NAVIGATION
            =============================================== */}

            <BackNavigation />


            {/* ===============================================
                PAGE
            =============================================== */}

            {children}

          </AppProvider>

        </ThemeProvider>


        {/* ==================================================
            MOUSE EFFECT
        ================================================== */}

        <MouseGlow />

      </body>
    </html>
  );
}