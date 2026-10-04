"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { authService } from "@/services/auth.service";
import { login } from "@/lib/auth";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: {
              credential: string;
            }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              type?: "standard" | "icon";
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              text?: "signin_with" | "signup_with" | "continue_with";
              shape?: "rectangular" | "pill" | "circle" | "square";
              width?: string | number;
            }
          ) => void;
        };
      };
    };
  }
}

function loadGoogleScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) {
      resolve();
      return;
    }

    const existing = document.getElementById(
      "google-identity-services"
    );

    if (existing) {
      existing.addEventListener("load", () => resolve(), {
        once: true,
      });
      existing.addEventListener("error", () => reject(), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");

    script.id = "google-identity-services";
    script.src =
      "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load Google Sign-In"));

    document.head.appendChild(script);
  });
}

export default function SocialLogin() {
  const googleButtonRef =
    useRef<HTMLDivElement>(null);

  const [googleError, setGoogleError] =
    useState("");
  const [googleLoading, setGoogleLoading] =
    useState(true);

  useEffect(() => {
    let cancelled = false;

    const initializeGoogle = async () => {
      try {
        const clientId =
          process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

        if (!clientId) {
          throw new Error(
            "Google Sign-In is not configured."
          );
        }

        await loadGoogleScript();

        if (
          cancelled ||
          !googleButtonRef.current ||
          !window.google?.accounts?.id
        ) {
          return;
        }

        googleButtonRef.current.innerHTML = "";

        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: async (response) => {
            if (!response?.credential) {
              setGoogleError(
                "Google Sign-In did not return a valid credential."
              );
              setGoogleLoading(false);
              return;
            }

            try {
              setGoogleError("");
              setGoogleLoading(true);

              const data =
                await authService.googleLogin(
                  response.credential
                );

              login(data);

              window.location.href = "/";
            } catch (error) {
              setGoogleError(
                error instanceof Error
                  ? error.message
                  : "Google Sign-In failed."
              );
              setGoogleLoading(false);
            }
          },
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        window.google.accounts.id.renderButton(
          googleButtonRef.current,
          {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "continue_with",
            shape: "rectangular",
            width: "360",
          }
        );

        setGoogleLoading(false);
      } catch (error) {
        if (!cancelled) {
          setGoogleError(
            error instanceof Error
              ? error.message
              : "Unable to load Google Sign-In."
          );
          setGoogleLoading(false);
        }
      }
    };

    initializeGoogle();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <div
          ref={googleButtonRef}
          className="flex min-h-[46px] items-center justify-center"
        />

        {googleLoading && !googleError && (
          <p className="mt-2 text-center text-xs text-slate-500">
            Loading Google Sign-In...
          </p>
        )}

        {googleError && (
          <p className="mt-2 text-center text-xs font-medium text-red-600">
            {googleError}
          </p>
        )}
      </div>


    </div>
  );
}