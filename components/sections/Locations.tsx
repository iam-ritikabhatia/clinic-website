"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const locations = [
  {
    city: "Chandigarh",
    address: "192, Himalaya Marg, Sector 21A",
    fullAddress: "192, Himalaya Marg, Sector 21A, Chandigarh – 160022",
  },
  {
    city: "Ludhiana",
    address: "42F, Sat Paul Mittal Rd, F-Block, Sarabha Nagar",
    fullAddress: "42F, Sat Paul Mittal Rd, F-Block, Sarabha Nagar, Punjab 141001",
  },
  {
    city: "Bathinda",
    address: "PUDA Complex, SCO-6-7, Civil Lines",
    fullAddress: "PUDA Complex, SCO-6-7, Civil Lines, Punjab 151001",
  },
  {
    city: "Amritsar",
    address: "SCO 2, Ranjit Avenue, D-Block",
    fullAddress: "SCO 2, Ranjit Avenue, D-Block, Amritsar, Punjab 143001",
  },
];

export default function Locations() {
  return (
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
            Visit Our Clinics
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Four convenient locations across Punjab to serve you better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {location.city}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {location.fullAddress}
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:text-primary-dark text-sm font-medium"
                >
                  Get Directions →
                </a>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full text-sm py-2"
                >
                  Book at This Location
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

