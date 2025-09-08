/**
 * Script to populate Page SEO data in Strapi
 * Run this after setting up the Page SEO content type
 */

const seoData = {
  pages: [
    {
      pageSlug: "home",
      title: "Compleo Health | Medical Imaging Equipment Rental UK | MRI & CT Scanners",
      description: "Leading UK provider of MRI and CT scanner equipment rental, clinical services, and mobile imaging solutions for NHS Trusts and private healthcare providers.",
      keywords: "medical imaging equipment rental uk, mri scanner rental, ct scanner hire, healthcare diagnostic services, mobile mri services, clinical insourcing"
    },
    {
      pageSlug: "services",
      title: "Medical Imaging Services | MRI & CT Equipment Solutions | Compleo Health",
      description: "Comprehensive medical imaging services including equipment rental, clinical insourcing, mobile imaging units, and managed equipment services for healthcare providers.",
      keywords: "medical imaging services, equipment rental, clinical insourcing, mobile imaging, managed equipment services, healthcare solutions"
    },
    {
      pageSlug: "managed-equipment",
      title: "Managed Equipment Services | Medical Device Management | Compleo Health",
      description: "Professional managed equipment services for MRI and CT scanners. Complete lifecycle management including maintenance, upgrades, and technical support for NHS Trusts and healthcare providers.",
      keywords: "managed equipment services, medical device management, mri maintenance, ct scanner support, healthcare equipment lifecycle, nhs equipment management"
    },
    {
      pageSlug: "equipment-rentals",
      title: "Equipment Rental | MRI & CT Scanner Hire UK | Compleo Health",
      description: "Flexible MRI and CT scanner rental solutions for NHS trusts and private healthcare providers. Short-term and long-term equipment hire with comprehensive support.",
      keywords: "equipment rental, mri scanner rental uk, ct scanner hire, medical equipment rental, healthcare equipment lease, diagnostic imaging rental"
    },
    {
      pageSlug: "clinical-insourcing",
      title: "Clinical Insourcing | Healthcare Staffing Solutions UK | Compleo Health",
      description: "Professional clinical insourcing services providing qualified radiographers and technical staff for medical imaging departments across NHS Trusts and private healthcare providers.",
      keywords: "clinical insourcing, healthcare staffing uk, radiographer services, medical imaging staff, clinical personnel, healthcare workforce solutions"
    },
    {
      pageSlug: "equipment-details",
      title: "Mobile & Relocatable Imaging Units | Equipment Portfolio | Compleo Health",
      description: "Comprehensive mobile and relocatable imaging solutions with advanced equipment portfolio. Mobile MRI units and CT scanners for flexible healthcare deployment.",
      keywords: "mobile relocatable imaging units, equipment portfolio, mobile mri units, relocatable ct scanners, portable imaging equipment, mobile diagnostic technology"
    },
    {
      pageSlug: "community-diagnostic-centres",
      title: "Community Diagnostic Centres | NHS Diagnostic Services | Compleo Health",
      description: "Supporting NHS community diagnostic centres with advanced imaging equipment and clinical expertise to reduce waiting times and improve patient access to diagnostics.",
      keywords: "community diagnostic centres, nhs diagnostic services, diagnostic imaging nhs, community healthcare, diagnostic centres uk, nhs waiting times"
    },
    {
      pageSlug: "screening-programmes",
      title: "Screening Programmes | Health Screening Services UK | Compleo Health",
      description: "Comprehensive health screening programmes using advanced imaging technology. Early detection and preventive healthcare services for NHS and private healthcare providers.",
      keywords: "screening programmes, health screening services uk, medical screening programmes, preventive healthcare, early detection, health screening uk"
    },
    {
      pageSlug: "about",
      title: "About Compleo Health | Medical Imaging Experts | Healthcare Technology Leaders",
      description: "Learn about Compleo Health's mission to deliver advanced medical imaging solutions. Meet our expert team and discover our commitment to healthcare excellence.",
      keywords: "about compleo health, medical imaging experts, healthcare technology leaders, diagnostic imaging company, medical equipment specialists"
    },
    {
      pageSlug: "work-with-us",
      title: "Work With Us | Join Our Healthcare Technology Team | Compleo Health",
      description: "Explore career opportunities at Compleo Health. Join our team of healthcare technology experts and make a difference in medical imaging.",
      keywords: "work with compleo health, healthcare jobs, medical imaging careers, healthcare technology jobs, medical equipment careers"
    },
    {
      pageSlug: "contact",
      title: "Contact Compleo Health | Get Medical Imaging Solutions Quote",
      description: "Contact Compleo Health for medical imaging equipment rental, clinical services, or mobile imaging solutions. Get your quote today.",
      keywords: "contact compleo health, medical imaging quote, healthcare equipment rental contact, diagnostic services enquiry"
    },
    {
      pageSlug: "sustainability",
      title: "Healthcare Sustainability | Environmental Leadership | Compleo Health",
      description: "Discover Compleo Health's commitment to sustainable healthcare practices, environmental responsibility, and social impact initiatives.",
      keywords: "healthcare sustainability, environmental healthcare, sustainable medical equipment, green healthcare practices, carbon neutral healthcare"
    },
    {
      pageSlug: "news-and-views",
      title: "Healthcare News & Industry Insights | Compleo Health Blog",
      description: "Stay updated with the latest healthcare industry news, medical imaging innovations, and expert insights from Compleo Health.",
      keywords: "healthcare news, medical imaging news, healthcare technology insights, industry updates, healthcare innovation"
    },
    {
      pageSlug: "case-studies",
      title: "Healthcare Case Studies | Success Stories | Compleo Health",
      description: "Explore our healthcare case studies and success stories from NHS trusts and private healthcare providers across the UK.",
      keywords: "healthcare case studies, nhs success stories, medical imaging case studies, healthcare provider testimonials"
    },
    {
      pageSlug: "our-team",
      title: "Our Leadership Team | Healthcare Experts | Compleo Health",
      description: "Meet the expert leadership team behind Compleo Health's medical imaging solutions and healthcare technology innovations.",
      keywords: "compleo health team, healthcare leadership, medical imaging experts, healthcare technology leaders"
    },
    {
      pageSlug: "privacy-policy",
      title: "Privacy Policy | Data Protection & Privacy Rights | Compleo Health",
      description: "Learn how Compleo Health protects your personal data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights under GDPR.",
      keywords: "privacy policy, data protection, GDPR compliance, personal data, privacy rights, healthcare data security"
    },
    {
      pageSlug: "cookie-policy",
      title: "Cookie Policy | Website Cookies & Tracking Information | Compleo Health",
      description: "Understand how Compleo Health uses cookies to improve your website experience. Learn about cookie types, management options, and your privacy choices.",
      keywords: "cookie policy, website cookies, tracking, analytics, user experience, privacy settings, browser cookies"
    },
    {
      pageSlug: "accessibility",
      title: "Accessibility Statement | Digital Inclusion & Web Accessibility | Compleo Health",
      description: "Learn about Compleo Health's commitment to digital accessibility and web inclusion. Our accessibility statement details WCAG 2.1 compliance and support for assistive technologies.",
      keywords: "accessibility statement, web accessibility, WCAG compliance, digital inclusion, assistive technology, screen reader support, keyboard navigation, healthcare accessibility"
    },
    {
      pageSlug: "net-zero-goals",
      title: "Net Zero Carbon Goals | Environmental Sustainability | Compleo Health",
      description: "Learn about Compleo Health's commitment to achieving net zero carbon emissions and our environmental sustainability initiatives.",
      keywords: "net zero carbon goals, environmental sustainability, healthcare carbon reduction, green healthcare initiatives"
    }
  ]
};

// This data will need to be manually added to Strapi Admin
console.log('Page SEO data to be added to Strapi:');
console.log('=====================================');
console.log(JSON.stringify(seoData, null, 2));
console.log('\n=====================================');
console.log('To add this data:');
console.log('1. Go to http://localhost:1337/admin');
console.log('2. Navigate to Content Manager → Page SEO Data');
console.log('3. Create new entry and add each page from the above data');
console.log('4. Save and Publish');