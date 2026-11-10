export const siteConfig = {
  name: "Vishal",
  role: "Freelance Web Developer",
  location: "Chennai, India",

  email: "svishal0820@gmail.com",

  /**
   * Availability is intentionally configurable.
   * Set `open` to true only when you are actually taking on new work.
   */
  availability: {
    open: false,
    openLabel: "Available for select projects",
    closedLabel: "Availability on request",
  },

  copyrightYear: 2026,
} as const;

const WHATSAPP_NUMBER = "917338969296";

export const mailHref = `mailto:${siteConfig.email}`;

export const whatsappHref =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  "?text=Hi%20Vishal%21%20I%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20getting%20a%20website%20developed%20for%20my%20business.%20Could%20you%20please%20share%20your%20services%2C%20pricing%2C%20and%20the%20next%20steps%3F";

export const availabilityLabel = siteConfig.availability.open
  ? siteConfig.availability.openLabel
  : siteConfig.availability.closedLabel;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    id: "prathi-fitness-studio",
    name: "Prathi Fitness Studio",
    tagline: "Private gym management application",
    status: "private" as const,
    label: "Private Client Project · Access Restricted",
    description:
      "A private, internal gym-management application built for a fitness studio. It brings day-to-day operations — member records, renewals, enquiries, staff and reporting — into one focused dashboard.",
    tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Member management",
      "Membership renewals",
      "Payment tracking",
      "Staff management",
      "Enquiries",
      "Reporting",
    ],
  },
  {
    id: "concept-project",
    name: "Your project could be next",
    tagline: "Concept project · Demo",
    status: "concept" as const,
    label: "Concept Project · Demo",
    description:
      "A clearly-labelled demo slot reserved for the next real project. This is not a client engagement — it is a placeholder for the kind of thoughtful, business-focused work we could build together.",
    tech: [],
    features: [],
  },
] as const;

export const services = [
  {
    id: "business-websites",
    title: "Business Website Development",
    icon: "layout" as const,
    description:
      "A credible, multi-page online home that makes your business easy to understand and easy to contact.",
    points: [
      "Custom, responsive design",
      "SEO-friendly structure",
      "Clear enquiry journeys",
      "Fast, accessible build",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Page Design & Development",
    icon: "target" as const,
    description:
      "Focused, single-goal pages for a service, offer or campaign — built to turn attention into enquiries.",
    points: [
      "Conversion-focused layout",
      "Persuasive content structure",
      "Analytics-ready setup",
      "Mobile-first performance",
    ],
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    icon: "code" as const,
    description:
      "Dashboards, portals and internal tools shaped around how your business actually works.",
    points: [
      "Admin dashboards & portals",
      "Accounts & role-based access",
      "API & data integrations",
      "Built to grow with your workflow",
    ],
  },
  {
    id: "website-redesign",
    title: "Website Redesign & Responsive Optimisation",
    icon: "refresh" as const,
    description:
      "Give an existing site a sharper, more modern feel — with layouts that hold up on every screen.",
    points: [
      "Modern visual refresh",
      "Mobile & tablet fixes",
      "Speed & accessibility improvements",
      "Clearer content hierarchy",
    ],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with a conversation about your goals, your audience and what success looks like for the project.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "I shape a clean, modern design focused on clarity, trust and guiding visitors toward taking action.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "I develop a fast, responsive and accessible website or app using modern, reliable technologies.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We test everything together, go live with confidence, and I stay available for support and refinements.",
  },
] as const;

export const toolkit = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
] as const;
