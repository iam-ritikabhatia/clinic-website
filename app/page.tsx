"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Locations from "@/components/sections/Locations";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const aboutPoints = [
  {
    title: "Clinic-Backed",
    description: "Expert medical supervision with proven clinical protocols",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Personalized Care",
    description: "Tailored treatment plans designed for your unique needs",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Science-First",
    description: "Evidence-based treatments backed by clinical research",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const whyChoosePoints = [
  {
    title: "Result-Driven Approach",
    description: "We focus on visible, measurable outcomes, not just treatments",
  },
  {
    title: "Expert Team",
    description: "Led by experienced dermatologists and wellness specialists",
  },
  {
    title: "Highest Standards",
    description: "State-of-the-art facilities with rigorous safety protocols",
  },
  {
    title: "Personalization",
    description: "Every treatment plan is customized to your unique needs",
  },
  {
    title: "Holistic Care",
    description: "Combining dermatology, nutrition, and wellness for complete results",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
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
              About Gleuhr
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Founded by <span className="font-semibold text-primary">Urminder Singh</span> and{" "}
              <span className="font-semibold text-primary">Dt. Gagan Sidhu</span>, Gleuhr is a
              result-oriented clinic and wellness brand dedicated to addressing root causes and
              delivering visible, lasting results.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                <Card>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600">
                    To provide result-oriented solutions that address root causes, combining
                    clinical expertise with personalized care for every patient.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600">
                    To become a leading global brand that redefines beauty and wellness through
                    clinical expertise, innovation, and genuine care.
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="flex justify-center mb-4">{point.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600">{point.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Gleuhr */}
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
              Why Choose Gleuhr
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What sets us apart in delivering exceptional dermatology and wellness care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600 text-sm">{point.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Locations />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Skin, Hair and Wellness?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Book your free consultation today and take the first step towards visible results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-4"
              >
                Book Free Consultation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                View Services
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

