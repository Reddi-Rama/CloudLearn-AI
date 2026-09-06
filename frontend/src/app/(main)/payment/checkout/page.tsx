"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open(): void;
}

interface CreateOrderResponse {
  success: boolean;
  message?: string;
  data?: {
    paymentId: string;
    orderId: string;
    amount: number;
    currency: string;
    keyId: string;
    courseSlug: string;
    courseName: string;
  };
}

interface VerifyPaymentResponse {
  success: boolean;
  message?: string;
  data?: {
    enrollment?: {
      id: string;
    };
  };
}

interface RefreshResponse {
  success: boolean;
  message?: string;
  data?: {
    accessToken: string;
  };
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const course = searchParams.get("course") || "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const courseName = useMemo(() => {
    if (course === "c-development") {
      return "C Programming";
    }

    return course
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }, [course]);

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api/v1";

  useEffect(() => {
    const scriptId = "razorpay-checkout-script";

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");

    script.id = scriptId;
    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem(
      "cloudlearn-refresh-token"
    );

    if (!refreshToken) {
      return null;
    }

    try {
      const response = await fetch(
        `${apiUrl}/auth/refresh`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken,
          }),
        }
      );

      const data =
        (await response.json()) as RefreshResponse;

      if (
        !response.ok ||
        !data.success ||
        !data.data?.accessToken
      ) {
        return null;
      }

      localStorage.setItem(
        "cloudlearn-access-token",
        data.data.accessToken
      );

      return data.data.accessToken;
    } catch {
      return null;
    }
  };

  const getValidAccessToken = async () => {
    let token = localStorage.getItem(
      "cloudlearn-access-token"
    );

    if (!token) {
      return null;
    }

    const response = await fetch(
      `${apiUrl}/auth/me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      return token;
    }

    token = await refreshAccessToken();

    return token;
  };

  const goToLogin = () => {
    router.push(
      `/login?redirect=${encodeURIComponent(
        `/payment/checkout?course=${course}`
      )}`
    );
  };

  const verifyPayment = async (
    token: string,
    response: RazorpayResponse
  ) => {
    let currentToken = token;

    let verifyResponse = await fetch(
      `${apiUrl}/payment/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentToken}`,
        },
        body: JSON.stringify({
          razorpayOrderId:
            response.razorpay_order_id,
          razorpayPaymentId:
            response.razorpay_payment_id,
          razorpaySignature:
            response.razorpay_signature,
        }),
      }
    );

    if (verifyResponse.status === 401) {
      const refreshedToken =
        await refreshAccessToken();

      if (!refreshedToken) {
        goToLogin();
        return;
      }

      currentToken = refreshedToken;

      verifyResponse = await fetch(
        `${apiUrl}/payment/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentToken}`,
          },
          body: JSON.stringify({
            razorpayOrderId:
              response.razorpay_order_id,
            razorpayPaymentId:
              response.razorpay_payment_id,
            razorpaySignature:
              response.razorpay_signature,
          }),
        }
      );
    }

    const verifyData =
      (await verifyResponse.json()) as VerifyPaymentResponse;

    if (
      !verifyResponse.ok ||
      !verifyData.success
    ) {
      throw new Error(
        verifyData.message ||
          "Payment verification failed."
      );
    }

    setSuccess(
      "Payment successful! Course unlocked."
    );

    setTimeout(() => {
      router.replace(`/courses/${course}`);
    }, 1000);
  };

  const handlePayment = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    if (!course) {
      setError("Course information is missing.");
      setLoading(false);
      return;
    }

    try {
      let token = await getValidAccessToken();

      if (!token) {
        goToLogin();
        return;
      }

      let orderResponse = await fetch(
        `${apiUrl}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            courseSlug: course,
          }),
        }
      );

      if (orderResponse.status === 401) {
        token = await refreshAccessToken();

        if (!token) {
          goToLogin();
          return;
        }

        orderResponse = await fetch(
          `${apiUrl}/payment/create-order`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              courseSlug: course,
            }),
          }
        );
      }

      const orderData =
        (await orderResponse.json()) as CreateOrderResponse;

      if (
        !orderResponse.ok ||
        !orderData.success ||
        !orderData.data
      ) {
        throw new Error(
          orderData.message ||
            "Unable to create payment order."
        );
      }

      const RazorpayConstructor =
        window.Razorpay;

      if (!RazorpayConstructor) {
        throw new Error(
          "Razorpay checkout is still loading. Please try again."
        );
      }

      const {
        orderId,
        amount,
        currency,
        keyId,
        courseName: backendCourseName,
      } = orderData.data;

      const options: RazorpayOptions = {
        key: keyId,
        amount: amount * 100,
        currency,
        name: "CloudLearn AI",
        description:
          `Unlock ${backendCourseName}`,
        order_id: orderId,

        handler: async (
          razorpayResponse: RazorpayResponse
        ) => {
          try {
            setError("");
            setSuccess(
              "Payment received. Verifying payment..."
            );

            const latestToken =
              localStorage.getItem(
                "cloudlearn-access-token"
              );

            if (!latestToken) {
              goToLogin();
              return;
            }

            await verifyPayment(
              latestToken,
              razorpayResponse
            );
          } catch (verificationError) {
            setSuccess("");
            setError(
              verificationError instanceof Error
                ? verificationError.message
                : "Payment verification failed."
            );
          } finally {
            setLoading(false);
          }
        },

        theme: {
          color: "#0284c7",
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay =
        new RazorpayConstructor(options);

      razorpay.open();
    } catch (paymentError) {
      setError(
        paymentError instanceof Error
          ? paymentError.message
          : "Unable to start payment."
      );

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-8">
          <Link
            href={`/courses/${course}`}
            className="font-medium text-sky-600 hover:text-sky-700"
          >
            ← Back to Course
          </Link>
        </div>

        <section className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="border-b border-slate-200 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Course Checkout
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Unlock {courseName}
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Get complete access to all modules, lessons,
              practical examples, exercises, and course content.
            </p>
          </div>

          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_360px]">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                What's included
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Complete Course Access
                    </p>
                    <p className="text-sm text-slate-600">
                      Access all available course modules.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      All Lessons
                    </p>
                    <p className="text-sm text-slate-600">
                      Learn through structured lessons and examples.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Learning Content
                    </p>
                    <p className="text-sm text-slate-600">
                      Practical examples and real-world applications.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6">

              <p className="text-sm font-medium text-slate-500">
                Course Price
              </p>

              <div className="mt-4 flex items-end gap-3">
                <span className="text-lg font-medium text-slate-400 line-through">
                  ₹99
                </span>

                <span className="text-4xl font-bold text-slate-900">
                  ₹49
                </span>
              </div>

              <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1.5 text-sm font-bold text-green-700">
                50% OFF
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">
                    Original price
                  </span>

                  <span className="text-slate-500 line-through">
                    ₹99
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-slate-900">
                    ₹49
                  </span>
                </div>

              </div>

              {error && (
                <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  {success}
                </div>
              )}

              <button
                type="button"
                onClick={handlePayment}
                disabled={loading}
                className="
                  mt-6
                  w-full
                  rounded-2xl
                  bg-sky-600
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-sky-700
                  disabled:cursor-not-allowed
                  disabled:bg-slate-300
                "
              >
                {loading
                  ? "Processing..."
                  : "Pay ₹49 & Unlock Course"}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Secure payment powered by Razorpay TEST mode.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
