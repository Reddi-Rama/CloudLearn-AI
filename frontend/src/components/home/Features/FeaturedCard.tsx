"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="glass-card group rounded-3xl p-8"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
      >
        <Icon
          size={30}
          className="text-white"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}