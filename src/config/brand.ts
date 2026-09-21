/**
 * GLOBAL BRAND CONFIGURATION
 * 
 * To rebrand or rename the company, update values in this file.
 * All components across the application consume these properties.
 */

export const brand = {
  // Brand Names
  displayName: "NHTech",
  shortName: "NHTech",
  legalName: "NightHack Technology Private Limited",
  formerName: "NightHack Labs",
  
  // Core Positioning
  heroHeadline: "Complex business problems. Production systems.",
  tagline: "Forward-deployed engineers building AI and product systems alongside your team.",
  subHeadline: "NHTech takes difficult business problems and converts them into production technology. We combine deep product engineering with AI implementation, with engineers working closely with your team from problem definition through deployment.",
  editorialKicker: "Forward Deployed Engineering. Deep Product Thinking. Production Systems.",
  strategicPositioning: "NHTech takes difficult business problems and converts them into production technology. We combine deep product engineering with AI implementation, with engineers working closely with the customer from problem definition through deployment.",
  
  // Contact & Location
  contact: {
    email: "info@nighthack.in",
    displayEmailPlaceholder: "info@nighthack.in",
    inquiriesUrl: "/contact",
    address: "Forward Deployed Engineering & AI Systems Pods",
    primaryRegion: "Europe & Global Enterprise",
    linkedInUrl: "https://www.linkedin.com/company/nhtech",
    githubUrl: "https://github.com/nhtech",
  },

  // Credibility & Model Ecosystem
  partnerships: {
    openai: {
      status: "OpenAI Select Partner",
      specialization: "Agent Building and AI Operations",
      tag: "Verified Select Partner"
    },
    ecosystem: {
      partner: "OpenAI Select Partner",
      technologies: ["Google", "Anthropic", "Microsoft", "Qwen", "GLM", "DeepSeek", "Open-Source Models"],
      spectrum: "SLMs ←→ Frontier Models",
      modelAgnosticNote: "Model-agnostic implementation: we select and optimize the exact intelligence layer appropriate for your latency, privacy, and reasoning requirements."
    },
    researchRoots: {
      institution: "Microsoft R&D India",
      description: "Our AI journey began through research projects with Microsoft R&D India, establishing our foundational rigor in machine learning systems."
    }
  },

  // Prototype Promise
  prototypeCommitment: "Focused prototypes can move from problem statement to working validation in short sprint cycles, with approximately 30-day prototype tracks available for suitable scopes.",

  // Visual Tokens & Theming
  tokens: {
    colors: {
      background: "#0b0c0e",
      surface: "#111317",
      surfaceRaised: "#16191f",
      surfaceHighlight: "#1c2027",
      border: "#1f232b",
      borderSubtle: "#171a20",
      borderActive: "#343b47",
      textPrimary: "#ededed",
      textSecondary: "#9ca3af",
      textMuted: "#6b7280",
      accent: "#10b981", // Crisp architectural emerald
      accentHover: "#059669",
      accentMuted: "rgba(16, 185, 129, 0.12)",
      accentBorder: "rgba(16, 185, 129, 0.3)",
      warning: "#f59e0b",
      info: "#38bdf8",
      error: "#f43f5e"
    },
    radius: {
      card: "12px",
      button: "8px",
      pill: "9999px"
    }
  }
} as const;

export const brandConfig = brand;
export type BrandConfig = typeof brand;
