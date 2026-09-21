import { useEffect } from 'react';
import { brand } from '../../config/brand';
import { products } from '../../data/products';
import { caseStudies } from '../../data/caseStudies';

interface SEOHeadProps {
  currentPath: string;
}

interface PageMeta {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  serviceDetails?: {
    name: string;
    serviceType: string;
    description: string;
  };
  breadcrumbs?: { name: string; path: string }[];
}

const routeMetadataMap: Record<string, PageMeta> = {
  '/': {
    title: 'NHTech — From Complex Business Problems to Production AI',
    description: 'Forward-deployed engineers building AI and product systems alongside your team. We turn complex enterprise problems into production systems and edge runtimes.',
    ogType: 'website',
    pageType: 'WebPage',
  },
  '/fde': {
    title: 'Forward Deployed Engineering (FDE) — Dedicated AI Pods | NHTech',
    description: 'Senior forward-deployed engineering pods embedded directly with enterprise teams to deconstruct complex business problems into production AI systems.',
    ogType: 'website',
    pageType: 'WebPage',
    serviceDetails: {
      name: 'Forward Deployed Engineering (FDE)',
      serviceType: 'AI Systems Engineering & Implementation',
      description: 'Senior forward-deployed engineering pods embedded directly with enterprise teams to deconstruct complex business problems, architect state machines, and deploy production AI systems.'
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Forward Deployed Engineering', path: '/fde' }
    ]
  },
  '/forward-deployed-engineering': {
    title: 'Forward Deployed Engineering (FDE) — Dedicated AI Pods | NHTech',
    description: 'Senior forward-deployed engineering pods embedded directly with enterprise teams to deconstruct complex business problems into production AI systems.',
    canonicalPath: '/fde',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Forward Deployed Engineering', path: '/fde' }
    ]
  },
  '/computer-vision': {
    title: 'Computer Vision & Edge AI — Sub-15ms Real-Time Inference | NHTech',
    description: 'High-frequency computer vision, defect detection, kinematic analysis, and OpenVLA models engineered for edge silicon, factory floors, and industrial cameras.',
    ogType: 'website',
    pageType: 'WebPage',
    serviceDetails: {
      name: 'Vision & Edge AI Engineering',
      serviceType: 'Computer Vision & Real-Time Edge AI',
      description: 'Sub-15ms computer vision, automated defect detection, kinematic analysis, and OpenVLA models engineered for edge silicon, factory floors, and industrial cameras.'
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Computer Vision & Edge AI', path: '/computer-vision' }
    ]
  },
  '/on-prem-ai': {
    title: 'On-Prem AI & Sovereign Models — Private Deployment & Fine-Tuning | NHTech',
    description: 'Turn your enterprise data into a model you control. On-prem AI deployment, air-gapped runtimes, LoRA/QLoRA adaptation, and sovereign model fine-tuning.',
    ogType: 'website',
    pageType: 'WebPage',
    serviceDetails: {
      name: 'On-Prem AI & Sovereign Model Engineering',
      serviceType: 'On-Prem AI Deployment & Private Model Adaptation',
      description: 'Turn enterprise data into a model you control. Objective RAG vs fine-tuning vs distillation benchmarking, parameter-efficient LoRA/QLoRA adaptation, and deployment to private cloud, on-prem, or edge environments.'
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'On-Prem AI', path: '/on-prem-ai' }
    ]
  },
  '/sovereign-models': {
    title: 'On-Prem AI & Sovereign Models — Private Deployment & Fine-Tuning | NHTech',
    description: 'Turn your enterprise data into a model you control. On-prem AI deployment, air-gapped runtimes, LoRA/QLoRA adaptation, and sovereign model fine-tuning.',
    canonicalPath: '/on-prem-ai',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'On-Prem AI', path: '/on-prem-ai' }
    ]
  },
  '/sovereign-ai': {
    title: 'On-Prem AI & Sovereign Models — Private Deployment & Fine-Tuning | NHTech',
    description: 'Turn your enterprise data into a model you control. On-prem AI deployment, air-gapped runtimes, LoRA/QLoRA adaptation, and sovereign model fine-tuning.',
    canonicalPath: '/on-prem-ai',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'On-Prem AI', path: '/on-prem-ai' }
    ]
  },
  '/what-we-build': {
    title: 'What We Build — Custom Product Engineering with AI | NHTech',
    description: 'Applied AI engineering capabilities: agentic workflows, document intelligence, complex business systems, sovereign models, and real-time vision & edge systems.',
    ogType: 'website',
    pageType: 'WebPage',
    serviceDetails: {
      name: 'Custom Product Engineering with AI',
      serviceType: 'Applied AI & Enterprise Systems Architecture',
      description: 'Engineering applied AI systems, agentic workflows, document intelligence, complex business platforms, and edge runtimes with full client code and IP transfer.'
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'What We Build', path: '/what-we-build' }
    ]
  },
  '/agentic-ai': {
    title: 'Agentic AI Systems — Deterministic State-Bounded Workflows | NHTech',
    description: 'Enterprise AI agents bounded by deterministic state machine graphs, human-in-the-loop governance, and immutable execution audit logs.',
    ogType: 'website',
    pageType: 'WebPage',
    serviceDetails: {
      name: 'Agentic AI & Workflow Automation',
      serviceType: 'Deterministic Agentic Workflows',
      description: 'Deterministic state-bounded agentic systems with human-in-the-loop governance and immutable audit logs.'
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Agentic AI', path: '/agentic-ai' }
    ]
  },
  '/document-intelligence': {
    title: 'Document Intelligence & Spatial Knowledge Systems | NHTech',
    description: 'Spatial layout parsing, dense-sparse hybrid vector indexing, and deterministic citation guardrails for enterprise document archives.',
    ogType: 'website',
    pageType: 'WebPage',
    serviceDetails: {
      name: 'Document Intelligence & Spatial Knowledge Systems',
      serviceType: 'Spatial Document Processing & Dense-Sparse RAG',
      description: 'Multi-modal document intelligence, layout-aware spatial indexing, and deterministic citation guardrails for high-volume enterprise document archives.'
    },
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Document Intelligence', path: '/document-intelligence' }
    ]
  },
  '/products': {
    title: 'Incubated Software Platforms — Talkument, Hoot, Ottom8 | NHTech',
    description: 'Specialized enterprise software platforms engineered and incubated by NHTech: Talkument (Knowledge Intelligence), Hoot (Enterprise Collaboration), and Ottom8 (Agentic Orchestration).',
    ogType: 'website',
    pageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' }
    ]
  },
  '/work': {
    title: 'Case Studies & Production Deployments | NHTech',
    description: 'Real-world case studies across fintech streaming ledgers, industrial edge computer vision, document intelligence, and enterprise operations.',
    ogType: 'website',
    pageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' }
    ]
  },
  '/industries': {
    title: 'Industry AI Solutions — Manufacturing, Enterprise, FinTech, Retail | NHTech',
    description: 'Domain-specific AI implementations and production systems engineered for industrial manufacturing, enterprise operations, fintech, and startups.',
    ogType: 'website',
    pageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' }
    ]
  },
  '/industries/manufacturing': {
    title: 'Industrial & Manufacturing AI — Edge Vision & Plant Telemetry | NHTech',
    description: 'Sub-15ms edge defect inspection, kinematic safety tracking, and predictive equipment maintenance for smart manufacturing plants.',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
      { name: 'Manufacturing', path: '/industries/manufacturing' }
    ]
  },
  '/industries/enterprise': {
    title: 'Enterprise AI & Operations Modernization | NHTech',
    description: 'Modernizing complex operational workflows, enterprise communications, and high-security knowledge retrieval with deterministic AI.',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
      { name: 'Enterprise', path: '/industries/enterprise' }
    ]
  },
  '/industries/fintech': {
    title: 'FinTech & High-Frequency Streaming Ledgers | NHTech',
    description: 'High-throughput transactional ledgers, fraud telemetry, and automated financial reconciliation architectures.',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
      { name: 'FinTech', path: '/industries/fintech' }
    ]
  },
  '/industries/retail': {
    title: 'Retail Intelligence & Dynamic Pricing Engines | NHTech',
    description: 'Demand forecasting, automated catalog intelligence, and real-time inventory optimization platforms.',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
      { name: 'Retail', path: '/industries/retail' }
    ]
  },
  '/industries/startups': {
    title: 'High-Velocity AI Engineering for Growth Startups | NHTech',
    description: 'Rapid 30-day prototype-to-production validation tracks and dedicated engineering pods for scaleups.',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
      { name: 'Startups', path: '/industries/startups' }
    ]
  },
  '/about': {
    title: 'About NHTech — Mission, Leadership & Engineering Pedigree',
    description: 'Learn about NightHack Technology Private Limited (NHTech): our OpenAI Select Partner status, Microsoft R&D India research roots, and engineering thesis.',
    ogType: 'website',
    pageType: 'AboutPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ]
  },
  '/careers': {
    title: 'Careers — Join Our Senior Systems & AI Engineering Pods | NHTech',
    description: 'Join forward-deployed engineering squads building frontier AI models, edge silicon runtimes, and resilient enterprise platforms.',
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' }
    ]
  },
  '/contact': {
    title: 'Contact NHTech — Technical Feasibility & Assessment',
    description: 'Initiate a technical consultation with NHTech engineering leads for custom AI systems, FDE pods, or enterprise platform architecture.',
    ogType: 'website',
    pageType: 'ContactPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions, Payment Terms & Governance | NHTech',
    description: `Official terms of service, billing policies, online payment gateways, and refund framework for ${brand.displayName} (${brand.legalName}).`,
    ogType: 'website',
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms-and-conditions' }
    ]
  }
};

export function SEOHead({ currentPath }: SEOHeadProps) {
  useEffect(() => {
    const meta = routeMetadataMap[currentPath] || routeMetadataMap['/'];
    const resolvedPath = meta.canonicalPath || currentPath;
    const canonicalUrl = `https://nighthack.in${resolvedPath === '/' ? '' : resolvedPath}`;
    const defaultImage = 'https://nighthack.in/logo.jpg';

    // 1. Title
    document.title = meta.title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // 3. Robots meta tags
    const robotsTags = ['robots', 'googlebot'];
    robotsTags.forEach((name) => {
      let rTag = document.querySelector(`meta[name="${name}"]`);
      if (!rTag) {
        rTag = document.createElement('meta');
        rTag.setAttribute('name', name);
        document.head.appendChild(rTag);
      }
      rTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    });

    // 4. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. OpenGraph & Twitter/X tags
    const ogTags: Record<string, string> = {
      'og:title': meta.title,
      'og:description': meta.description,
      'og:url': canonicalUrl,
      'og:type': meta.ogType || 'website',
      'og:site_name': brand.displayName,
      'og:locale': 'en_US',
      'og:image': defaultImage,
      'og:image:width': '800',
      'og:image:height': '800',
      'og:image:alt': 'NHTech — From Complex Business Problems to Production AI',
      'twitter:title': meta.title,
      'twitter:description': meta.description,
      'twitter:card': 'summary_large_image',
      'twitter:image': defaultImage,
      'twitter:image:alt': 'NHTech — From Complex Business Problems to Production AI',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      const isTwitter = property.startsWith('twitter:');
      const attr = isTwitter ? 'name' : 'property';
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 6. Structured Data (JSON-LD)
    const organizationSchema = {
      '@type': 'Organization',
      '@id': 'https://nighthack.in/#organization',
      name: brand.legalName,
      alternateName: [brand.displayName, brand.formerName],
      url: 'https://nighthack.in/',
      logo: {
        '@type': 'ImageObject',
        url: defaultImage,
        caption: brand.displayName
      },
      email: brand.contact.email,
      description: brand.tagline,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN'
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Forward-Deployed Engineering',
        'Computer Vision',
        'Document Intelligence',
        'Agentic AI Systems',
        'Edge AI',
        'On-Prem AI',
        'Sovereign Models',
        'Enterprise Software Systems'
      ],
      sameAs: [
        brand.contact.linkedInUrl,
        brand.contact.githubUrl
      ]
    };

    const websiteSchema = {
      '@type': 'WebSite',
      '@id': 'https://nighthack.in/#website',
      name: brand.displayName,
      url: 'https://nighthack.in/',
      description: brand.subHeadline,
      publisher: {
        '@id': 'https://nighthack.in/#organization'
      }
    };

    const schemas: any[] = [];

    if (currentPath === '/') {
      // Homepage: Organization + WebSite + WebPage
      schemas.push({
        '@context': 'https://schema.org',
        ...organizationSchema
      });
      schemas.push({
        '@context': 'https://schema.org',
        ...websiteSchema
      });
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: {
          '@id': 'https://nighthack.in/#website'
        },
        about: {
          '@id': 'https://nighthack.in/#organization'
        },
        inLanguage: 'en-US'
      });
    } else {
      // Sub-pages: WebPage / AboutPage / ContactPage / CollectionPage
      const pageSchema: any = {
        '@context': 'https://schema.org',
        '@type': meta.pageType || 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: {
          '@type': 'WebSite',
          name: brand.displayName,
          url: 'https://nighthack.in/'
        },
        inLanguage: 'en-US'
      };

      if (meta.pageType === 'AboutPage') {
        pageSchema.mainEntity = organizationSchema;
      } else if (meta.pageType === 'ContactPage') {
        pageSchema.mainEntity = {
          '@type': 'Organization',
          name: brand.legalName,
          email: brand.contact.email,
          url: 'https://nighthack.in/'
        };
      }

      schemas.push(pageSchema);

      // Service Schema for capability pages
      if (meta.serviceDetails) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: meta.serviceDetails.name,
          serviceType: meta.serviceDetails.serviceType,
          provider: {
            '@type': 'Organization',
            name: brand.legalName,
            url: 'https://nighthack.in/'
          },
          description: meta.serviceDetails.description,
          areaServed: 'Worldwide'
        });
      }

      // Products page: SoftwareApplication schemas for Talkument, Hoot, Ottom8
      if (currentPath === '/products') {
        products.forEach((prod) => {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: prod.name,
            applicationCategory: prod.id === 'talkument' 
              ? 'BusinessApplication' 
              : prod.id === 'hoot' 
              ? 'CommunicationApplication' 
              : 'DeveloperApplication',
            operatingSystem: 'Cloud / Private VPC / On-Premise',
            description: prod.description,
            url: prod.liveUrl,
            author: {
              '@type': 'Organization',
              name: brand.legalName,
              url: 'https://nighthack.in/'
            },
            featureList: prod.keyCapabilities.join(', ')
          });
        });
      }

      // Work page: Article schemas for case studies
      if (currentPath === '/work') {
        const publicStudies = caseStudies.filter(cs => cs.approvedForPublicWebsite);
        publicStudies.forEach((cs) => {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: cs.title,
            description: cs.context,
            articleBody: cs.systemDesigned,
            keywords: cs.technologies.join(', '),
            publisher: {
              '@type': 'Organization',
              name: brand.legalName,
              url: 'https://nighthack.in/'
            }
          });
        });
      }
    }

    // BreadcrumbList Schema for any page with breadcrumbs
    if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: meta.breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: `https://nighthack.in${b.path === '/' ? '' : b.path}`
        }))
      });
    }

    // Update Script Tag in Head
    let jsonLdScript = document.getElementById('nhtech-jsonld');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'nhtech-jsonld';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(schemas);

  }, [currentPath]);

  return null;
}
