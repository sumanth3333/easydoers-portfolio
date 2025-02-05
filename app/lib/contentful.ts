// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getEntries(content_type: string) {
  // Static data to replace Contentful entries
  const staticServices = [
    {
      fields: {
        title: "Paycheck Generation",
        description:
          "Streamline your payroll process with our automated paycheck generation system, ensuring accuracy and timeliness.",
      },
    },
    {
      fields: {
        title: "Inventory Management",
        description:
          "Keep track of your stock levels, manage reorders, and optimize your inventory with our comprehensive management system.",
      },
    },
    {
      fields: {
        title: "EOD Reports",
        description:
          "Get detailed end-of-day reports to keep your finger on the pulse of your business's daily operations.",
      },
    },
    {
      fields: {
        title: "Sales Invoice Tracking",
        description:
          "Easily manage and track sales invoices, ensuring all transactions are properly recorded and accounted for.",
      },
    },
    {
      fields: {
        title: "Trend Prediction",
        description:
          "Leverage advanced analytics to predict trends and make data-driven decisions for your business's future.",
      },
    },
    {
      fields: {
        title: "Fraud Prevention",
        description:
          "Implement robust security measures to reduce the risk of internal fraud and theft in your organization.",
      },
    },
  ]

  return staticServices
}

