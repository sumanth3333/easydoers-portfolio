"use client";

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About EasyDoers
      </motion.h1>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          EasyDoers was founded in 2010 by a team of software engineers and business consultants who recognized the need
          for more effective management solutions in complex businesses. Having worked with numerous companies across
          various industries, we saw firsthand the challenges that many organizations face in managing their operations
          efficiently and securely.
        </p>
        <p className="mb-4">
          Over the years, we&apos;ve grown from a small startup to a trusted partner for businesses of all sizes. Our
          commitment to innovation, security, and customer satisfaction has driven our success and helped us build
          long-lasting relationships with our clients.
        </p>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At EasyDoers, our mission is to empower businesses with intelligent, secure, and user-friendly management
          solutions that drive efficiency, reduce risk, and foster growth. We are committed to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Developing cutting-edge software that addresses the unique challenges of complex businesses</li>
          <li>Providing exceptional customer service and support throughout the implementation and beyond</li>
          <li>
            Continuously innovating and improving our solutions to stay ahead of emerging threats and industry trends
          </li>
          <li>
            Fostering a culture of integrity, collaboration, and excellence within our team and in our partnerships with
            clients
          </li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <p className="mb-8">
          EasyDoers is powered by a diverse team of experts in software development, business consulting, data
          analytics, and cybersecurity. Our combined experience and skills allow us to deliver comprehensive solutions
          that address all aspects of business management and security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Jane Doe",
    position: "CEO & Co-founder",
    bio: "With over 20 years of experience in software development and business consulting, Jane leads our team with vision and expertise.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "John Smith",
    position: "CTO",
    bio: "John's background in cybersecurity and cloud computing ensures that our solutions are always at the cutting edge of technology and security.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emily Brown",
    position: "Head of Customer Success",
    bio: "Emily's dedication to understanding and meeting our clients' needs has been instrumental in building strong, lasting partnerships.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

