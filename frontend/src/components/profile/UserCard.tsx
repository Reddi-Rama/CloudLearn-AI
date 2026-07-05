"use client";

import { Mail, GraduationCap } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

interface UserCardProps {
  name: string;
  email: string;
  course: string;
}

export default function UserCard({
  name,
  email,
  course,
}: UserCardProps) {
  return (
    <div className="glass-card rounded-3xl p-8 text-center">

      <ProfileAvatar />

      <h2 className="mt-6 text-3xl font-bold">

        {name}

      </h2>

      <div className="mt-8 space-y-5 text-left">

        <div className="flex items-center gap-3">

          <Mail className="text-blue-600" />

          {email}

        </div>

        <div className="flex items-center gap-3">

          <GraduationCap className="text-blue-600" />

          {course}

        </div>

      </div>

    </div>
  );
}