"use client";

import Link from "next/link";
import { ReactNode } from "react";
import CloudShape from "./CloudShape";

interface DomainCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export default function DomainCard({
  title,
  description,
  icon,
  href,
}: DomainCardProps) {
  return (
    <Link href={href}>

      <CloudShape className="h-full p-8 transition hover:scale-105">

        <div className="mb-6 flex justify-center text-sky-600">

          {icon}

        </div>

        <h3 className="text-center text-2xl font-bold">

          {title}

        </h3>

        <p className="mt-4 text-center text-slate-600">

          {description}

        </p>

      </CloudShape>

    </Link>
  );
}