"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote: "Gleuhr transformed my skin completely. The daily follow-ups and personalized care made all the difference. I finally found a clinic that truly cares about results.",
    author: "A delighted client",
    location: "Chandigarh",
  },
  {
    quote: "The holistic approach combining dermatology and nutrition was exactly what I needed. My skin and overall wellness have improved significantly.",
    author: "A delighted client",
    location: "Ludhiana",
  },
  {
    quote: "Professional, science-backed treatments with genuine care. The team guided me through every step, and the results speak for themselves.",
    author: "A delighted client",
    location: "Bathinda",
  },
  {
    quote: "From consultation to treatment and follow-ups, Gleuhr exceeded my expectations. The personalized treatment plan addressed my root concerns.",
    author: "A delighted client",
    location: "Amritsar",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real people who trusted Gleuhr with their skin and wellness journey
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                <TestimonialCard
                  key={currentIndex + index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

