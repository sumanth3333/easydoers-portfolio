"use client";

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    quote:
      "EasyDoers transformed our inventory management process. We've seen a 30% reduction in stockouts and a significant decrease in internal shrinkage.",
  },
  {
    name: "Michael Lee",
    company: "Global Manufacturing Co.",
    quote:
      "The paycheck generation system from EasyDoers has streamlined our payroll process, saving us countless hours each month and ensuring accuracy.",
  },
  {
    name: "Emma Rodriguez",
    company: "Retail Solutions Ltd.",
    quote:
      "Thanks to EasyDoers' trend prediction tools, we've been able to make data-driven decisions that have boosted our sales by 25% year-over-year.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="mb-4 italic text-gray-300">&quot;{testimonial.quote}&quot;</p>
            <p className="font-semibold text-blue-300">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

