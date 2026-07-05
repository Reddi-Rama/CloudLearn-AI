import Link from "next/link";
import {
  GraduationCap,
  Globe,
  Users,
  Mail,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Domains", href: "/domains" },
  { name: "Courses", href: "/courses" },
  { name: "Learning Paths", href: "/learning-paths" },
];

const supportLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Certificates", href: "/certificates" },
  { name: "Profile", href: "/profile" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-blue-100 bg-white/70 backdrop-blur-xl">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap
                className="text-blue-600"
                size={34}
              />

              <div>
                <h2 className="text-2xl font-bold">
                  CloudLearn AI
                </h2>

                <p className="text-sm text-slate-500">
                  Learn Beyond Limits
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              A modern cloud-inspired learning platform designed to help
              students learn, practice and achieve their career goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">
              Support
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">

              <Link
                href="#"
                className="rounded-full bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <Globe size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <Users size={20} />
              </Link>

              <Link
                href="mailto:info@cloudlearn.ai"
                className="rounded-full bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <Mail size={20} />
              </Link>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-blue-100 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CloudLearn AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}