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
    relatedLink?: { href: string; label: string };
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
      "Cyber risk, privacy, and IT legal support in one engagement—strategy, implementation, and governance for teams in Canada and the United States, including continuous exposure management with partners such as CyberCyte.",
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
      "Evolvic helps leadership and IT teams reduce cyber risk with a single engagement that blends cybersecurity advisory, implementation support, and IT law. Based in Montreal and active across Canada and the United States, we align strategy, controls, and contracts so you can move faster without outrunning your governance obligations.",
    sections: [
      {
        heading: "Why cyber, privacy, and legal counsel belong together",
        body: [
          "Regulators, customers, and boards expect evidence of reasonable security—not just tools. That requires clear accountability across technical controls, vendor contracts, and incident response.",
          "Evolvic works with your executives and technical owners so priorities match real business impact: data protection, supply-chain security, outsourcing, and operational resilience.",
          "Threats are global; your obligations are local. We help you interpret requirements in context and turn them into practical roadmaps.",
        ],
      },
      {
        heading: "What we offer",
        body:
          "We act as a strategic partner to management and IT: cybersecurity and privacy programs, control assessments, procurement and outsourcing agreements, breach readiness, and security-aware digital operations. You get coordinated advice across strategy, technology, and law instead of juggling disconnected vendors.",
      },
      {
        heading: "Continuous exposure management & platform partnerships",
        body: [
          "Many organizations now consolidate vulnerability intelligence, misconfigurations, attack-surface data, and governance metrics into unified exposure-management programs—often discussed under continuous threat exposure management (CTEM). Done well, this reduces tool sprawl and helps teams remediate what matters first.",
          "Evolvic combines advisory, rollout support, and legal context so you can adopt the right platform without gaps between security operations, compliance evidence, and executive reporting.",
        ],
        relatedLink: {
          href: "/partners/cybercyte",
          label: "CyberCyte X-CTEM and Evolvic in North America",
        },
      },
      {
        heading: "Who we work with",
        body:
          "Growth companies and established enterprises modernizing identity, cloud, data, and SaaS footprints—especially when legal, regulatory, or customer scrutiny makes security and documentation non-negotiable.",
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
