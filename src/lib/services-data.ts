export type ServiceSlug =
  | "cybersecurity-and-law"
  | "data-driven-growth"
  | "product-service-development"
  | "cloud-services";

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string | string[];
    variant?: "list" | "prose" | "bullets";
  }>;
};

export const serviceSummaries: Array<{
  slug: ServiceSlug;
  title: string;
  description: string;
}> = [
  {
    slug: "cybersecurity-and-law",
    title: "Cybersecurity & Law",
    description:
      "We are a one-stop shop in cybersecurity and related legal matters. With our team of strategy, technology, and law experts, we can be a strategic partner and provide support to your management team and your IT department.",
  },
  {
    slug: "data-driven-growth",
    title: "Data-Driven Growth",
    description:
      "We help you and your organization move forward on your digital transformation journey so that you create lasting growth, identify new business opportunities, streamline your operations, and improve productivity across the organization.",
  },
  {
    slug: "product-service-development",
    title: "Product & Service Development",
    description:
      "Using digital technologies can accelerate the process of product development. As a result, Evolvic develops digital solutions enabling our clients to stay competitive and innovative.",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    description:
      "Grow your business and develop modern state-of-the-art applications by reaping the full benefits of the cloud comprehensively and sustainably.",
  },
];

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "cybersecurity-and-law": {
    slug: "cybersecurity-and-law",
    title: "Cybersecurity & Law",
    intro:
      "Do you want to take part in creating a digital world in which everyone feels safe? Together, we set your future strategy for cybersecurity and privacy, deal with existing security challenges of your operations, and navigate among new possibilities.",
    sections: [
      {
        heading: "Current Challenges",
        body: [
          "Virtually everything we do is touched by technology in some way. We are heavily inter-connected and networked, a fact that enhances our quality of life, but also creates vulnerabilities.",
          "From commercial supply chains to the critical infrastructure that underpins our economy and our society, the risks in the cyber world have multiplied, accelerated, and grown increasingly malicious.",
          "While cyber threats are global, we know that requirements vary locally and challenges are unique to each organization.",
        ],
      },
      {
        heading: "What we Offer",
        body:
          "We are a one-stop shop in cybersecurity and related legal matters. With our team of experts in strategy, technology, and law, we can be a strategic partner and provide support to both your management team and your IT department. Together, we create a secure world where you, your employees, your customers, and your customers' customers feel safe.\n\nAt evolvic, you will get advice about data protection and privacy, cybersecurity, digital marketing, and procurement. Of course, we will also help out with IT outsourcing and contracts.",
      },
      {
        heading: "Our Strengths",
        body:
          "As a digital transformation consulting firm, we help our clients deal with the digital challenges of the future in cybersecurity and IT law.",
      },
    ],
  },
  "data-driven-growth": {
    slug: "data-driven-growth",
    title: "Data-Driven Growth",
    intro:
      "We help you and your organization move forward on your digital transformation journey so that you create lasting growth, identify new business opportunities, streamline your operations, and improve productivity across the organization.",
    sections: [
      {
        heading: "Advanced Analytics",
        body:
          "Reap the benefits of the full potential of your data through advanced analytics to become insights-driven and get answers to important questions about the future of your operation. What challenges await on the horizon? What possibilities do you have? Use the right decision support.",
      },
      {
        heading: "What we Offer",
        variant: "bullets",
        body: [
          "Analytics",
          "Artificial Intelligence (AI)",
          "Data Engineering",
          "Business Intelligence and Visualization",
          "Intelligent Automation",
          "Internet of Things (IoT)",
        ],
      },
      {
        heading: "Our Partners",
        body: [
          "We collaborate with many partners in order to offer you the best tools and platforms on the market.",
          "Snowflake",
          "Tableau",
          "Microsoft",
          "DataBricks",
        ],
        variant: "list",
      },
    ],
  },
  "product-service-development": {
    slug: "product-service-development",
    title: "Product & Service Development",
    intro:
      "Using digital technologies can accelerate the process of product development. As a result, Evolvic develops digital solutions enabling our clients to stay competitive and innovative.",
    sections: [
      {
        heading: "Agile",
        body:
          "Moving fast and efficiently has never been such a significant key differentiator as it is today. For this reason, a whopping amount of organizations are now relying on agile teams to stay ahead of the curve and remain relevant to their target audience.",
      },
      {
        heading: "How we can help you",
        variant: "bullets",
        body: [
          "Application development and maintenance",
          "Quality assurance and testing",
          "Application modernization",
          "DevOps",
        ],
      },
      {
        heading: "Our Strengths",
        body:
          "We connect, digitalize and secure what you value, by high-tech software engineering in agile teams, on embedded, cloud and applications, for a more humane and sustainable business.",
      },
    ],
  },
  "cloud-services": {
    slug: "cloud-services",
    title: "Cloud Services",
    intro:
      "Grow your business and develop modern state-of-the-art applications by reaping the full benefits of the cloud comprehensively and sustainably.",
    sections: [
      {
        heading: "Current Challenges",
        body: [
          "Cloud is the new normal for how we work and an essential enabler of agile operating models that adapt continuously to constant change.",
          "Many organizations are struggling with inflexible cloud strategies, simplistic modernization approaches, immature cloud-native practices, and governance, security, management and operational models not designed for the cloud age.",
          "While cloud technology has matured, these organizations are not yet harnessing its full transformational potential.",
        ],
      },
      {
        heading: "What we Offer",
        body:
          "Evolvic has cutting-edge expertise in cloud technology, cyber resilience, and extensive experience of implementing large development projects. We are also helping clients transition to a sustainable cloud solution.",
      },
      {
        heading: "How we can help you",
        variant: "bullets",
        body: [
          "Cloud analysis and strategy",
          "Design and Architecture",
          "Cloud compliance analysis",
          "Cloud management",
        ],
      },
      {
        heading: "Our Strengths",
        body:
          "Whether you are planning to move to the cloud or have already migrated, we can guide you every step of the way with your cloud strategy and ease decision making by offering best practice advice. With the environment at heart, we will of course ensure your cloud strategy supports your sustainability goals.",
      },
    ],
  },
};

export function getAllServiceSlugs(): ServiceSlug[] {
  return serviceSummaries.map((s) => s.slug);
}
