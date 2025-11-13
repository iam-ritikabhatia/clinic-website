"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl shadow-md p-8 h-full"
    >
      <div className="flex items-start mb-4">
        <svg
          className="w-8 h-8 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-slate-700 mb-6 text-lg leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-800">{author}</p>
          {location && <p className="text-sm text-slate-500">{location}</p>}
        </div>
      </div>
    </motion.div>
  );
}

