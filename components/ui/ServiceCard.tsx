"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Button from "./Button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-md p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-transparent hover:border-primary">
        <div className="text-primary mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-slate-600">
                <svg
                  className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button href="/services" variant="secondary" className="w-full">
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

