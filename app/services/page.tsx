"use client";

import { motion } from "framer-motion"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <p className="text-xl mb-12">
        At EasyDoers, we offer a comprehensive suite of services designed to help complex businesses manage their
        operations effectively and securely. Our solutions are tailored to meet the unique needs of each client,
        ensuring maximum efficiency and protection against fraud and theft.
      </p>

      {services.map((service, index) => (
        <motion.section
          key={index}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
          <p className="mb-4">{service.description}</p>
          <ul className="list-disc pl-6">
            {service.features.map((feature, i) => (
              <li key={i} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  )
}

const services = [
  {
    title: "Paycheck Generation",
    description:
      "Our automated paycheck generation system simplifies your payroll process, ensuring accuracy and timeliness while reducing the risk of errors and fraud.",
    features: [
      "Automated calculation of wages, taxes, and deductions",
      "Integration with time tracking systems",
      "Secure distribution of electronic pay stubs",
      "Compliance with local, state, and federal regulations",
      "Detailed reporting for payroll audits",
    ],
  },
  {
    title: "Inventory Management",
    description:
      "Our comprehensive inventory management system helps you keep track of stock levels, manage reorders, and optimize your inventory to reduce costs and prevent theft.",
    features: [
      "Real-time tracking of stock levels across multiple locations",
      "Automated reorder notifications based on customizable thresholds",
      "Barcode and RFID integration for easy stock taking",
      "Detailed inventory reports and analytics",
      "Integration with point-of-sale systems for automatic stock updates",
    ],
  },
  {
    title: "EOD Reports",
    description:
      "Get a clear picture of your daily operations with our detailed end-of-day reports, helping you identify trends, discrepancies, and areas for improvement.",
    features: [
      "Customizable report templates to match your business needs",
      "Automatic compilation of sales, inventory, and financial data",
      "Comparison of actual vs. expected results",
      "Highlighting of anomalies and potential issues",
      "Easy distribution to key stakeholders",
    ],
  },
  {
    title: "Sales Invoice Tracking",
    description:
      "Our sales invoice tracking system ensures all transactions are properly recorded and accounted for, reducing the risk of revenue leakage and fraud.",
    features: [
      "Automated invoice generation and numbering",
      "Real-time tracking of invoice status (issued, paid, overdue)",
      "Integration with accounting systems for seamless reconciliation",
      "Customizable alerts for overdue invoices",
      "Detailed audit trails for all invoice-related activities",
    ],
  },
  {
    title: "Trend Prediction",
    description:
      "Leverage advanced analytics and machine learning to predict trends and make data-driven decisions for your business's future.",
    features: [
      "Analysis of historical data to identify patterns and trends",
      "Predictive modeling for sales forecasting",
      "Identification of potential market opportunities",
      "Early warning system for negative trends",
      "Customizable dashboards for easy visualization of trends",
    ],
  },
  {
    title: "Fraud Prevention",
    description:
      "Implement robust security measures to reduce the risk of internal fraud and theft in your organization, protecting your assets and reputation.",
    features: [
      "Multi-level approval systems for sensitive transactions",
      "Advanced user access controls and permissions",
      "Real-time monitoring and alerts for suspicious activities",
      "Regular security audits and vulnerability assessments",
      "Employee training programs on fraud awareness and prevention",
    ],
  },
]

