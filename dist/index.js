// server/index.ts
import express2 from "express";
import rateLimit2 from "express-rate-limit";

// server/routes.ts
import { createServer } from "http";
import rateLimit from "express-rate-limit";

// shared/schema.ts
import { z } from "zod";
var contactFormSchema = z.object({
  type: z.enum(["b2b", "b2c"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  organization: z.string().min(1, "Organization is required"),
  role: z.string().min(1, "Role is required"),
  serviceInterest: z.string().min(1, "Service interest is required"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to contact you")
});

// shared/data/locations.json
var locations_default = {
  locations: [
    {
      id: "airedale-general",
      name: "Airedale General Hospital",
      type: "facility",
      address: "Skipton Road, Steeton",
      city: "Keighley",
      postcode: "BD20 6TD",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1535 652511",
      coordinates: { lat: 53.9171, lng: -1.9528 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "andover-war-memorial",
      name: "Andover War Memorial Hospital",
      type: "facility",
      address: "Charlton Road",
      city: "Andover",
      postcode: "SP10 3LB",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1264 523407",
      coordinates: { lat: 51.2115, lng: -1.4985 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "azienda-ospedaliera-messina",
      name: "Azienda Ospedaliera Universitaria G. Martino",
      type: "facility",
      address: "Via Consolare Valeria, 1",
      city: "Messina",
      postcode: "98124",
      country: "Italy",
      countryCode: "IT",
      phone: "+39 090 2212111",
      coordinates: { lat: 38.1938, lng: 15.554 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "balfour-hospital",
      name: "Balfour Hospital",
      type: "facility",
      address: "New Forma Road",
      city: "Kirkwall",
      postcode: "KW15 1SG",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1856 888000",
      coordinates: { lat: 58.9814, lng: -2.9601 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "bradford-region",
      name: "Bradford Region - Multiple Sites",
      type: "facility",
      address: "Multiple Sites",
      city: "Bradford",
      postcode: "",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1274 364011",
      coordinates: { lat: 53.796, lng: -1.7594 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "epsom-hospital",
      name: "Epsom Hospital",
      type: "facility",
      address: "Dorking Road",
      city: "Epsom",
      postcode: "KT18 7EG",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1372 735735",
      coordinates: { lat: 51.3312, lng: -0.2725 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "healthshare-norwich",
      name: "Healthshare Clinic Norwich",
      type: "facility",
      address: "Colney Lane",
      city: "Norwich",
      postcode: "NR4 7UY",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1603 287287",
      coordinates: { lat: 52.6167, lng: 1.2233 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "hermitage-clinic",
      name: "Hermitage Clinic",
      type: "facility",
      address: "Old Lucan Road",
      city: "Dublin",
      postcode: "D20",
      country: "Ireland",
      countryCode: "IE",
      phone: "+353 1 645 6000",
      coordinates: { lat: 53.3498, lng: -6.2603 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "homerton-hospital",
      name: "Homerton Hospital",
      type: "facility",
      address: "Homerton Row",
      city: "London",
      postcode: "E9 6SR",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 20 8510 5555",
      coordinates: { lat: 51.5498, lng: -0.0428 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "inselspital-bern",
      name: "Inselspital Bern",
      type: "facility",
      address: "Freiburgstrasse 18",
      city: "Bern",
      postcode: "3010",
      country: "Switzerland",
      countryCode: "CH",
      phone: "+41 31 632 21 11",
      coordinates: { lat: 46.945, lng: 7.4034 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "kings-college-hospital",
      name: "King's College Hospital",
      type: "facility",
      address: "Denmark Hill",
      city: "London",
      postcode: "SE5 9RS",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 20 3299 9000",
      coordinates: { lat: 51.4681, lng: -0.0927 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "leicester-general",
      name: "Leicester General Hospital",
      type: "facility",
      address: "Gwendolen Road",
      city: "Leicester",
      postcode: "LE5 4PW",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 116 258 8000",
      coordinates: { lat: 52.6369, lng: -1.1054 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "lister-hospital",
      name: "Lister Hospital",
      type: "facility",
      address: "Coreys Mill Lane",
      city: "Stevenage",
      postcode: "SG1 4AB",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1438 314333",
      coordinates: { lat: 51.9045, lng: -0.2037 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "mayo-roscommon",
      name: "Mayo/Roscommon Region",
      type: "facility",
      address: "Regional Sites",
      city: "Castlebar",
      postcode: "",
      country: "Ireland",
      countryCode: "IE",
      phone: "+353 94 902 1733",
      coordinates: { lat: 53.8567, lng: -9.2985 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "morriston-hospital",
      name: "Morriston Hospital",
      type: "facility",
      address: "Heol Maes Eglwys",
      city: "Swansea",
      postcode: "SA6 6NL",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1792 702222",
      coordinates: { lat: 51.6701, lng: -3.8576 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "ospedale-galliera",
      name: "Ospedale Galliera",
      type: "facility",
      address: "Mura delle Cappuccine, 14",
      city: "Genoa",
      postcode: "16128",
      country: "Italy",
      countryCode: "IT",
      phone: "+39 010 56321",
      coordinates: { lat: 44.4118, lng: 8.9264 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "pinderfields-hospital",
      name: "Pinderfields Hospital",
      type: "facility",
      address: "Aberford Road",
      city: "Wakefield",
      postcode: "WF1 4DG",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1924 541000",
      coordinates: { lat: 53.6848, lng: -1.4889 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "poole-hospital",
      name: "Poole Hospital",
      type: "facility",
      address: "Longfleet Road",
      city: "Poole",
      postcode: "BH15 2JB",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1202 665511",
      coordinates: { lat: 50.7326, lng: -1.9567 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "queen-marys-hospital",
      name: "Queen Mary's Hospital",
      type: "facility",
      address: "Roehampton Lane",
      city: "London",
      postcode: "SW15 5PN",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 20 8487 6000",
      coordinates: { lat: 51.4497, lng: -0.2326 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "royal-blackburn-hospital",
      name: "Royal Blackburn Hospital",
      type: "facility",
      address: "Haslingden Road",
      city: "Blackburn",
      postcode: "BB2 3HH",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1254 263555",
      coordinates: { lat: 53.7638, lng: -2.4523 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "royal-free-hospital",
      name: "Royal Free Hospital",
      type: "facility",
      address: "Pond Street",
      city: "London",
      postcode: "NW3 2QG",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 20 7794 0500",
      coordinates: { lat: 51.5574, lng: -0.1646 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "salford-royal",
      name: "Salford Royal Hospital",
      type: "facility",
      address: "Stott Lane",
      city: "Salford",
      postcode: "M6 8HD",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 161 789 7373",
      coordinates: { lat: 53.5115, lng: -2.3347 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "southend-hospital",
      name: "Southend Hospital",
      type: "facility",
      address: "Prittlewell Chase",
      city: "Southend-on-Sea",
      postcode: "SS0 0RY",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1702 435555",
      coordinates: { lat: 51.5407, lng: 0.6896 },
      services: ["MRI", "CT"],
      status: "active"
    },
    {
      id: "yeovil-hospital",
      name: "Yeovil Hospital",
      type: "facility",
      address: "Higher Kingston",
      city: "Yeovil",
      postcode: "BA21 4AT",
      country: "United Kingdom",
      countryCode: "GB",
      phone: "+44 1935 475122",
      coordinates: { lat: 50.9407, lng: -2.6158 },
      services: ["MRI", "CT"],
      status: "active"
    }
  ]
};

// shared/location-data.ts
var COMPLEO_LOCATIONS = locations_default.locations;

// server/email-service.ts
import { MailService } from "@sendgrid/mail";
if (!process.env.SENDGRID_API_KEY) {
}
var mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}
async function sendContactEmail(contactData) {
  if (!process.env.SENDGRID_API_KEY) {
    console.error("SendGrid API key not configured");
    return false;
  }
  try {
    const emailContent = `
New Contact Form Submission

Contact Type: ${contactData.type.toUpperCase()}
Name: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Phone: ${contactData.phone || "Not provided"}
Organization: ${contactData.organization || "Not provided"}
Role: ${contactData.role || "Not provided"}
Service Interest: ${contactData.serviceInterest || "Not provided"}

Message:
${contactData.message || "No message provided"}

---
This email was sent from the Compleo Health website contact form.
    `;
    await mailService.send({
      to: "sales@compleohealth.com",
      from: "noreply@compleohealth.com",
      subject: "Contact from Website",
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f2e2e;">New Contact Form Submission</h2>
          
          <div style="background: #f7f9f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0f2e2e; margin-top: 0;">Contact Information</h3>
            <p><strong>Contact Type:</strong> ${contactData.type.toUpperCase()}</p>
            <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
            <p><strong>Organization:</strong> ${contactData.organization || "Not provided"}</p>
            <p><strong>Role:</strong> ${contactData.role || "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${contactData.serviceInterest || "Not provided"}</p>
          </div>
          
          ${contactData.message ? `
            <div style="background: #ffffff; padding: 20px; border-left: 4px solid #00a990; margin: 20px 0;">
              <h3 style="color: #0f2e2e; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${contactData.message}</p>
            </div>
          ` : ""}
          
          <div style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            This email was sent from the Compleo Health website contact form.
          </div>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error("SendGrid email error:", error);
    if (error.code === 403) {
      console.error("SendGrid domain verification required. The domain compleohealth.com needs to be verified in SendGrid.");
    }
    return false;
  }
}

// server/routes.ts
import { z as z2 } from "zod";

// client/src/lib/sitemap.ts
var SITEMAP_URLS = [
  {
    loc: "/",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "weekly",
    priority: "1.0"
  },
  {
    loc: "/services",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "weekly",
    priority: "0.9"
  },
  {
    loc: "/services/managed-equipment",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    loc: "/services/clinical-insourcing",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    loc: "/services/equipment-rental",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    loc: "/services/mobile-imaging",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    loc: "/services/community-diagnostic-centres",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    loc: "/services/screening-programmes",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    loc: "/equipment",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.7"
  },
  {
    loc: "/sustainability",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.6"
  },
  {
    loc: "/news-and-views",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "weekly",
    priority: "0.6"
  },
  {
    loc: "/about",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.6"
  },
  {
    loc: "/equipment-details",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.7"
  },
  {
    loc: "/net-zero-goals",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.6"
  },
  {
    loc: "/our-team",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.5"
  },
  {
    loc: "/work-with-us",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.5"
  },
  {
    loc: "/case-studies",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "weekly",
    priority: "0.7"
  },
  {
    loc: "/case-study/dartford-gravesham",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.6"
  },
  {
    loc: "/team-member/beverley-wallace",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/james-berry",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/paula-moore",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/claire-zeki",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/cordelia-wilson",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/david-uregbula",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/candice-martin",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/team-member/carsten-nyborg",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.4"
  },
  {
    loc: "/contact",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.6"
  },
  {
    loc: "/privacy-policy",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  },
  {
    loc: "/cookie-policy",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  },
  {
    loc: "/csr",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  },
  {
    loc: "/modern-slavery-statement",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  },
  {
    loc: "/policies",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  },
  {
    loc: "/accessibility",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  },
  {
    loc: "/sitemap",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "monthly",
    priority: "0.4"
  },
  {
    loc: "/manage-cookies",
    lastmod: (/* @__PURE__ */ new Date()).toISOString(),
    changefreq: "yearly",
    priority: "0.3"
  }
];
function generateSitemap() {
  const baseUrl = "https://www.compleohealth.com";
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  SITEMAP_URLS.forEach((url) => {
    sitemap += "  <url>\n";
    sitemap += `    <loc>${baseUrl}${url.loc}</loc>
`;
    sitemap += `    <lastmod>${url.lastmod}</lastmod>
`;
    sitemap += `    <changefreq>${url.changefreq}</changefreq>
`;
    sitemap += `    <priority>${url.priority}</priority>
`;
    sitemap += "  </url>\n";
  });
  sitemap += "</urlset>";
  return sitemap;
}

// client/src/lib/structured-data.ts
var ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Compleo Health",
  alternateName: "Compleo Health Limited",
  url: "https://www.compleohealth.com",
  logo: "https://www.compleohealth.com/images/shared/logo-seo.jpg",
  description: "Leading provider of diagnostic imaging services, MRI and CT scanner rentals, and clinical insourcing solutions to NHS Trusts and private healthcare facilities across the UK and Europe.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beehive Mill, Jersey Street",
    addressLocality: "Manchester",
    addressRegion: "Greater Manchester",
    postalCode: "M4 6JG",
    addressCountry: "GB"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-161-884-1303",
    contactType: "customer service",
    areaServed: ["GB", "IE", "IT", "CH", "DK"],
    availableLanguage: ["en", "da"]
  },
  sameAs: [
    "https://www.linkedin.com/company/compleo-health"
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 53.4808,
      longitude: -2.2426
    },
    geoRadius: "2000000"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Diagnostic Imaging Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MRI Scanner Rental",
          description: "High-field MRI scanner rental services for healthcare facilities"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CT Scanner Rental",
          description: "Advanced CT scanner rental and managed services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clinical Insourcing",
          description: "Expert radiographer and clinical staff provision"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Imaging Units",
          description: "Relocatable MRI and CT units for temporary installations"
        }
      }
    ]
  }
};
var MEDICAL_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Compleo Health",
  medicalSpecialty: "Diagnostic Imaging",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ISO 9001:2015",
      recognizedBy: {
        "@type": "Organization",
        name: "DNV"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Care Quality Commission Registration",
      recognizedBy: {
        "@type": "Organization",
        name: "Care Quality Commission"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Cyber Essentials Plus",
      recognizedBy: {
        "@type": "Organization",
        name: "NCSC"
      }
    }
  ]
};

// client/src/components/common/robots-txt.tsx
var ROBOTS_TXT = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.compleohealth.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /login

# Allow important pages
Allow: /
Allow: /services
Allow: /services/*
Allow: /equipment

Allow: /about
Allow: /contact
Allow: /sustainability
Allow: /news-and-views
Allow: /case-studies
Allow: /work-with-us
Allow: /our-team
Allow: /privacy-policy
Allow: /csr

# Allow CSS, JS, and images
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp
Allow: /*.ico

# Performance optimizations
Allow: /*.woff
Allow: /*.woff2
Allow: /*.ttf
Allow: /*.eot

# Block development files
Disallow: /*.map
Disallow: /src/
Disallow: /node_modules/
Disallow: /.git/
Disallow: /.env
Disallow: /.replit
Disallow: /package.json
Disallow: /tsconfig.json
Disallow: /vite.config.ts
Disallow: /tailwind.config.ts
`;
function generateRobotsTxt() {
  return ROBOTS_TXT;
}

// server/routes.ts
import DOMPurify from "isomorphic-dompurify";
async function registerRoutes(app2) {
  const contactLimiter2 = rateLimit({
    windowMs: 15 * 60 * 1e3,
    // 15 minutes
    max: 5,
    message: {
      error: "Too many contact form submissions. Please wait 15 minutes before trying again.",
      retryAfter: 900
      // 15 minutes in seconds
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: "Too many contact form submissions. Please wait 15 minutes before trying again.",
        retryAfter: 900
      });
    }
  });
  app2.post("/api/contact", contactLimiter2, async (req, res) => {
    try {
      const contactData = contactFormSchema.parse(req.body);
      const sanitizedData = {
        ...contactData,
        firstName: DOMPurify.sanitize(contactData.firstName, { ALLOWED_TAGS: [] }),
        lastName: DOMPurify.sanitize(contactData.lastName, { ALLOWED_TAGS: [] }),
        email: DOMPurify.sanitize(contactData.email, { ALLOWED_TAGS: [] }),
        phone: contactData.phone ? DOMPurify.sanitize(contactData.phone, { ALLOWED_TAGS: [] }) : contactData.phone,
        organization: contactData.organization ? DOMPurify.sanitize(contactData.organization, { ALLOWED_TAGS: [] }) : contactData.organization,
        role: contactData.role ? DOMPurify.sanitize(contactData.role, { ALLOWED_TAGS: [] }) : contactData.role,
        serviceInterest: contactData.serviceInterest ? DOMPurify.sanitize(contactData.serviceInterest, { ALLOWED_TAGS: [] }) : contactData.serviceInterest,
        message: contactData.message ? DOMPurify.sanitize(contactData.message, {
          ALLOWED_TAGS: ["p", "br", "strong", "em"],
          ALLOWED_ATTR: []
        }) : contactData.message
      };
      const emailSent = await sendContactEmail(sanitizedData);
      if (emailSent) {
        res.json({ success: true, message: "Contact form submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      if (error instanceof z2.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to process contact form" });
      }
    }
  });
  app2.get("/about/our-employees/", (req, res) => {
    res.status(410).send(`
      <!DOCTYPE html>
      <html><head><title>Page No Longer Available | Compleo Health</title></head>
      <body>
        <h1>Page No Longer Available</h1>
        <p>This page has been permanently removed. Please visit <a href="/our-team">Our Team</a> instead.</p>
      </body></html>
    `);
  });
  app2.get("/mobile-units/", (req, res) => {
    res.status(410).send(`
      <!DOCTYPE html>
      <html><head><title>Page No Longer Available | Compleo Health</title></head>
      <body>
        <h1>Page No Longer Available</h1>
        <p>This page has been permanently removed. Please visit <a href="/equipment-details">Equipment Details</a> instead.</p>
      </body></html>
    `);
  });
  app2.get("/solutions/", (req, res) => {
    res.status(410).send(`
      <!DOCTYPE html>
      <html><head><title>Page No Longer Available | Compleo Health</title></head>
      <body>
        <h1>Page No Longer Available</h1>
        <p>This page has been permanently removed. Please visit <a href="/services">Our Services</a> instead.</p>
      </body></html>
    `);
  });
  app2.get("/api/locations", async (req, res) => {
    try {
      res.json(COMPLEO_LOCATIONS);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch locations" });
    }
  });
  app2.get("/sitemap.xml", (req, res) => {
    const sitemap = generateSitemap();
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.send(sitemap);
  });
  app2.get("/robots.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(generateRobotsTxt());
  });
  app2.get("/api/structured-data/organization", (req, res) => {
    res.json(ORGANIZATION_SCHEMA);
  });
  app2.get("/api/structured-data/medical-organization", (req, res) => {
    res.json(MEDICAL_ORGANIZATION_SCHEMA);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import crypto from "crypto";
var app = express2();
app.set("trust proxy", 1);
app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString("base64");
  res.locals.nonce = nonce;
  const cspPolicy = [
    "default-src 'self'",
    // Allow specific trusted domains for scripts, still permissive for map/dev but more restrictive
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.linkedin.com https://platform.linkedin.com https://cdn.jsdelivr.net https://unpkg.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com",
    // Restrict images to specific trusted domains plus map tile servers
    "img-src 'self' data: blob: https://flagcdn.com https://www.gov.uk https://www.england.nhs.uk https://www.siemens-healthineers.com https://marketing.webassets.siemens-healthineers.com https://assets.nhs.uk https://www.compleohealth.com https://compleohealth.com https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org https://tiles.wmflabs.org",
    "media-src 'self' https://www.compleohealth.com https://compleohealth.com",
    "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
    // Specific endpoints for map functionality
    "connect-src 'self' https://*.basemaps.cartocdn.com https://raw.githubusercontent.com https://*.tile.openstreetmap.org https://tiles.wmflabs.org",
    "frame-src 'self' https://www.linkedin.com https://platform.linkedin.com",
    "object-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    // Upgrade insecure requests
    "upgrade-insecure-requests"
  ].join("; ");
  res.setHeader("Content-Security-Policy", cspPolicy);
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=(), payment=(), usb=()");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  next();
});
var createRateLimiter = (windowMs, max, message) => {
  return rateLimit2({
    windowMs,
    max,
    message: {
      error: message,
      retryAfter: Math.ceil(windowMs / 1e3)
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      log(`Rate limit exceeded for ${req.ip} on ${req.path}`, "security");
      res.status(429).json({
        error: message,
        retryAfter: Math.ceil(windowMs / 1e3)
      });
    }
  });
};
var generalLimiter = createRateLimiter(
  15 * 60 * 1e3,
  // 15 minutes
  100,
  "Too many requests from this IP, please try again later."
);
var contactLimiter = createRateLimiter(
  15 * 60 * 1e3,
  // 15 minutes
  5,
  "Too many contact form submissions. Please wait 15 minutes before trying again."
);
app.use("/api", generalLimiter);
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/videos", express2.static("public/videos", {
  setHeaders: (res, path3) => {
    if (path3.endsWith(".mp4")) {
      res.setHeader("Content-Type", "video/mp4");
    }
  }
}));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
export {
  contactLimiter
};
