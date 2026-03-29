export const site = {
  name: "Evolvic",
  tagline: "Helping organizations move to the cloud",
  phone: "+1-877-969-3799",
  phoneTel: "+18779693799",
  emails: {
    general: "info@evolvic.com",
    talent: "talent@evolvic.com",
  },
  social: {
    twitter: "https://twitter.com/evolvicinc",
    linkedin: "https://linkedin.com/company/evolvic",
  },
  copyrightYear: 2026,
} as const;

export const nav = {
  primary: [
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const footer = {
  useful: [
    { href: "/about-us", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/terms-and-conditions", label: "Terms and Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
  services: [
    {
      href: "/services/cybersecurity-and-law",
      label: "Cybersecurity & Law",
    },
    { href: "/services/data-driven-growth", label: "Data Driven Growth" },
    {
      href: "/services/product-service-development",
      label: "Product & Service Development",
    }, 
    { href: "/services/cloud-services", label: "Cloud Services" },
  ],
  support: [
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/#faqs", label: "FAQs" },
  ],
} as const;
