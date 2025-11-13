"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const treatments = [
  {
    id: "acne",
    title: "Acne & Active Blemish Management",
    description:
      "Comprehensive treatment plans targeting active acne and preventing future breakouts through personalized care and daily follow-ups.",
    whatItIs:
      "A holistic approach combining medical-grade treatments, topical solutions, and lifestyle modifications to address acne at its root cause.",
    whoItsFor: "Individuals with active acne, persistent breakouts, or post-acne marks seeking long-term solutions.",
    benefits: [
      "Reduced active breakouts",
      "Improved skin texture",
      "Prevention of future acne",
      "Personalized treatment plans",
    ],
    whatToExpect: "3-month plan with monthly reviews, 30-45 minute sessions, daily follow-ups with doctor guidance.",
  },
  {
    id: "pigmentation",
    title: "Pigmentation & Tone Correction",
    description:
      "Advanced treatments to reduce dark spots, melasma, and uneven skin tone for a radiant, even complexion.",
    whatItIs:
      "Combination of chemical peels, Q-switched lasers, and brightening treatments tailored to your skin type and concerns.",
    whoItsFor: "Anyone dealing with hyperpigmentation, dark spots, melasma, or uneven skin tone.",
    benefits: [
      "Reduced pigmentation",
      "Even skin tone",
      "Brighter complexion",
      "Minimal downtime",
    ],
    whatToExpect: "20-30 minute sessions, gradual improvement over 4-8 weeks, personalized treatment frequency.",
  },
  {
    id: "anti-aging",
    title: "Anti-Ageing & Fine Line/Wrinkle Reduction",
    description:
      "Comprehensive anti-aging solutions to reduce fine lines, wrinkles, and restore youthful skin elasticity.",
    whatItIs:
      "Advanced treatments including dermal fillers, botulinum toxin, micro-needling, and laser resurfacing for comprehensive rejuvenation.",
    whoItsFor: "Individuals looking to reduce signs of aging, fine lines, wrinkles, and restore skin firmness.",
    benefits: [
      "Reduced fine lines and wrinkles",
      "Improved skin elasticity",
      "Youthful appearance",
      "Long-lasting results",
    ],
    whatToExpect: "Results build over 2-4 weeks, minimal downtime, personalized treatment plans based on your goals.",
  },
  {
    id: "hair",
    title: "Hair Loss & Scalp Treatments",
    description:
      "Effective solutions for hair loss, thinning, and scalp health through PRP, microneedling, and advanced therapies.",
    whatItIs:
      "Multi-modal approach combining PRP (Platelet-Rich Plasma), microneedling, topical treatments, and low-level laser therapy.",
    whoItsFor: "Individuals experiencing hair loss, thinning, or scalp conditions seeking effective, long-term solutions.",
    benefits: [
      "Reduced hair fall",
      "Improved hair density",
      "Healthier scalp",
      "Natural hair regrowth",
    ],
    whatToExpect: "Monthly treatments, 45-60 minute sessions, visible improvement in 3-6 months with consistent care.",
  },
  {
    id: "contouring",
    title: "Skin & Body Contouring",
    description:
      "Non-invasive body contouring and skin tightening treatments for a more sculpted, toned appearance.",
    whatItIs:
      "Advanced technologies including radiofrequency, cryolipolysis, and cellulite reduction treatments for targeted body shaping.",
    whoItsFor: "Individuals looking to reduce stubborn fat, tighten skin, or improve body contours without surgery.",
    benefits: [
      "Reduced fat deposits",
      "Tighter, firmer skin",
      "Improved body contours",
      "No surgery required",
    ],
    whatToExpect: "3-6 sessions recommended, minimal downtime, gradual results with proper maintenance.",
  },
];

const consultationSteps = [
  {
    step: 1,
    title: "Book Consultation",
    description: "Schedule your free consultation online or by phone",
  },
  {
    step: 2,
    title: "Initial Assessment",
    description: "Comprehensive evaluation of your skin, hair, and wellness needs",
  },
  {
    step: 3,
    title: "Personalized Plan",
    description: "Custom treatment plan designed specifically for you",
  },
  {
    step: 4,
    title: "Treatment & Follow-Up",
    description: "Begin treatments with daily follow-ups and doctor guidance",
  },
  {
    step: 5,
    title: "Maintenance & Reviews",
    description: "Ongoing care and regular reviews to ensure lasting results",
  },
];

const faqs = [
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies based on your individual needs and treatment goals. During your consultation, we'll create a personalized plan with a recommended treatment schedule. Most treatments show visible results within 3-6 months with consistent care.",
  },
  {
    question: "Is there any downtime after treatments?",
    answer:
      "Most of our treatments have minimal to no downtime. Some procedures like chemical peels or laser treatments may require a day or two of recovery. We'll discuss all details during your consultation and provide specific aftercare instructions.",
  },
  {
    question: "Are the treatments safe?",
    answer:
      "Yes, all treatments are performed by qualified dermatologists and trained professionals using FDA-approved technologies and medical-grade products. We follow strict safety protocols and conduct thorough assessments before any treatment.",
  },
  {
    question: "Will the results last?",
    answer:
      "Results vary by treatment type and individual factors. We focus on long-term solutions and provide maintenance plans to help sustain results. Our holistic approach addresses root causes for more lasting outcomes.",
  },
  {
    question: "Do you offer daily follow-ups?",
    answer:
      "Yes, daily follow-ups and doctor guidance are a core part of our approach. We ensure you receive continuous support throughout your treatment journey to maximize results and address any concerns promptly.",
  },
];

export default function ServicesPage() {
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
              Expert Dermatology, Everyday Care
            </h1>
            <p className="text-xl text-slate-600">
              Personalized treatments designed for your unique skin, hair, and wellness needs with
              daily follow-ups and expert guidance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                id={treatment.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <Card className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">{treatment.title}</h2>
                      <p className="text-lg text-slate-600 mb-6">{treatment.description}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">What It Is</h3>
                          <p className="text-slate-600">{treatment.whatItIs}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">Who It&apos;s For</h3>
                          <p className="text-slate-600">{treatment.whoItsFor}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-slate-50 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Benefits</h3>
                        <ul className="space-y-3">
                          {treatment.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
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
                              <span className="text-slate-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">What to Expect</h3>
                        <p className="text-slate-700">{treatment.whatToExpect}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
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
              Our Consultation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent journey from consultation to results
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {consultationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="text-center h-full">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </Card>
                  {index < consultationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions about our treatments and process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Book your free consultation and discover your personalized treatment plan
            </p>
            <Button
              href="/contact"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-4"
            >
              Book Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

