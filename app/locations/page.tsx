"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const locations = [
  {
    city: "Chandigarh",
    address: "192, Himalaya Marg, Sector 21A",
    fullAddress: "192, Himalaya Marg, Sector 21A, Chandigarh – 160022",
    phone: "+91 XXX XXX XXXX",
  },
  {
    city: "Ludhiana",
    address: "42F, Sat Paul Mittal Rd, F-Block, Sarabha Nagar",
    fullAddress: "42F, Sat Paul Mittal Rd, F-Block, Sarabha Nagar, Punjab 141001",
    phone: "+91 XXX XXX XXXX",
  },
  {
    city: "Bathinda",
    address: "PUDA Complex, SCO-6-7, Civil Lines",
    fullAddress: "PUDA Complex, SCO-6-7, Civil Lines, Punjab 151001",
    phone: "+91 XXX XXX XXXX",
  },
  {
    city: "Amritsar",
    address: "SCO 2, Ranjit Avenue, D-Block",
    fullAddress: "SCO 2, Ranjit Avenue, D-Block, Amritsar, Punjab 143001",
    phone: "+91 XXX XXX XXXX",
  },
];

export default function LocationsPage() {
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
              Our Clinic Locations
            </h1>
            <p className="text-xl text-slate-600">
              Four convenient locations across Punjab to serve you better. Visit us at any of our
              state-of-the-art clinics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">{location.city}</h2>
                      <p className="text-slate-600 leading-relaxed mb-4">{location.fullAddress}</p>
                      <div className="flex items-center text-slate-600 mb-6">
                        <svg
                          className="w-5 h-5 mr-2 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>{location.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" className="w-full">
                        Get Directions
                      </Button>
                    </a>
                    <Button href="/contact" variant="secondary" className="flex-1">
                      Book Appointment
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on any location above to get directions via Google Maps
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-slate-500">
                Interactive map can be integrated here (Google Maps API)
              </p>
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
              Ready to Visit Us?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Book your free consultation at any of our convenient locations
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

