import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  Notification,
} from "@/components/notifications";

export default function NotificationsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="mx-auto max-w-6xl px-6">

          <Notification />

        </div>

      </main>

      <Footer />
    </>
  );
}