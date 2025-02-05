"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getEntries } from "./lib/contentful";

export default function Home() {
  const services = getEntries("service");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <motion.section
          className="py-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to EasyDoers
          </h1>
          <p className="text-2xl mb-10 text-gray-300">
            Empowering Complex Businesses with Intelligent Management Solutions
          </p>
          <Link href="/services" className="btn btn-primary">
            Explore Our Services
          </Link>
        </motion.section>

        <motion.section
          className="py-20 w-full max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(services) &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              services.map((service: any, index: number) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">{service.fields.title}</h3>
                  <p className="text-gray-300">{service.fields.description}</p>
                </motion.div>
              ))}
            {!Array.isArray(services) && (
              <p className="text-gray-300">No services available at the moment. Please check back later.</p>
            )}
          </div>
        </motion.section>

        <motion.section
          className="py-20 w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Why Choose EasyDoers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Our Expertise</h3>
              <p className="text-gray-300">
                With years of experience in developing management solutions for complex businesses, we understand the
                unique challenges you face. Our team of experts is dedicated to creating tailored solutions that
                streamline your operations and protect your assets.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Our Approach</h3>
              <p className="text-gray-300">
                We believe in a collaborative approach, working closely with you to understand your specific needs and
                develop solutions that integrate seamlessly with your existing processes. Our goal is to empower your
                business with tools that drive efficiency and growth.
              </p>
            </div>
          </div>
        </motion.section>

        <Testimonials />

        <motion.section
          className="py-20 w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl mb-10 text-gray-300">
            Let&apos;s discuss how EasyDoers can help you manage your business more effectively and securely.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Contact Us Today
          </Link>
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
