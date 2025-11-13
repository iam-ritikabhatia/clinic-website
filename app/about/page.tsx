"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const approachSteps = [
  {
    step: "Diagnose",
    description:
      "Comprehensive assessment of your skin, hair, and overall wellness to identify root causes and underlying issues.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    step: "Treat",
    description:
      "Personalized treatment plans using advanced technologies and evidence-based protocols tailored to your unique needs.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    step: "Maintain",
    description:
      "Ongoing care with daily follow-ups, regular reviews, and maintenance plans to ensure lasting results and long-term wellness.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Daily Follow-Ups",
    description:
      "Unmatched support with daily check-ins and continuous doctor guidance throughout your treatment journey.",
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "Every plan is customized based on comprehensive assessments, ensuring treatments address your specific needs.",
  },
  {
    title: "Holistic Approach",
    description:
      "Combining dermatology, nutrition, and wellness for complete, long-term results that address root causes.",
  },
  {
    title: "Science-Backed Solutions",
    description:
      "All treatments are based on clinical research and proven protocols, ensuring safety and effectiveness.",
  },
  {
    title: "Result-Oriented Focus",
    description:
      "We measure success by visible, lasting results, not just treatments performed. Your outcomes matter most.",
  },
];

const teamMembers = [
  {
    name: "Urminder Singh",
    role: "Co-Founder",
    description: "Visionary leader dedicated to transforming dermatology and wellness care.",
  },
  {
    name: "Dt. Gagan Sidhu",
    role: "Co-Founder & Nutrition Specialist",
    description: "Expert in holistic wellness and personalized nutrition counseling.",
  },
  {
    name: "Expert Dermatologists",
    role: "Medical Team",
    description: "Board-certified dermatologists with years of experience in clinical care.",
  },
  {
    name: "Wellness Specialists",
    role: "Support Team",
    description: "Dedicated professionals ensuring your comfort and care throughout your journey.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-slate-600">
              A clinic and wellness brand dedicated to delivering visible results through
              science-backed treatments and personalized care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Founders</h2>
              <p className="text-lg text-slate-600">
                Gleuhr was founded by <span className="font-semibold text-primary">Urminder Singh</span>{" "}
                and <span className="font-semibold text-primary">Dt. Gagan Sidhu</span> with a vision
                to revolutionize dermatology and wellness care in India.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  name: "Urminder Singh",
                  role: "Co-Founder",
                  description:
                    "A visionary leader passionate about combining clinical expertise with personalized care to deliver exceptional results.",
                },
                {
                  name: "Dt. Gagan Sidhu",
                  role: "Co-Founder & Nutrition Specialist",
                  description:
                    "An expert in holistic wellness, bringing years of experience in nutrition counseling and personalized wellness solutions.",
                },
              ].map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-primary">
                        {founder.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                    <p className="text-primary font-semibold mb-4">{founder.role}</p>
                    <p className="text-slate-600">{founder.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide result-oriented solutions that address root causes, combining clinical
                  expertise with personalized care. We believe in treating the whole person, not just
                  symptoms, ensuring every patient receives the attention and care they deserve.
                </p>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become a leading global brand that redefines beauty and wellness through clinical
                  expertise, innovation, and genuine care. We envision a future where everyone has
                  access to science-backed, personalized dermatology and wellness solutions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diagnose. Treat. Maintain. Our three-step methodology ensures comprehensive care and
              lasting results
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="text-primary mb-4 flex justify-center">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{step.step}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
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
              What Sets Us Apart
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The key differentiators that make Gleuhr unique in dermatology and wellness care
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-primary"
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the experts dedicated to your skin, hair, and wellness journey
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Experience the Gleuhr Difference
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Join thousands of satisfied clients who have transformed their skin, hair, and wellness
            </p>
            <Button
              href="/contact"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-4"
            >
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

