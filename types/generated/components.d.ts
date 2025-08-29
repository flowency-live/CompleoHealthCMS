import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    analyticsId: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CardsApproachCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_approach_cards';
  info: {
    displayName: 'ApproachCards';
  };
  attributes: {
    ApproachFeatures: Schema.Attribute.Component<'content.features', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CardsImpactCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_impact_cards';
  info: {
    displayName: 'Impact Card';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface CardsInterestArea extends Struct.ComponentSchema {
  collectionName: 'components_cards_interest_areas';
  info: {
    displayName: 'Interest Area Card';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsValueCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_value_cards';
  info: {
    displayName: 'ValueCards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Features: Schema.Attribute.Component<'content.features-bullets', true>;
    imageUrl: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentApproachBullets extends Struct.ComponentSchema {
  collectionName: 'components_content_approach_bullets';
  info: {
    displayName: 'ApproachBullets';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContentBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_content_benefit_items';
  info: {
    description: 'Individual benefit with title and description (icons are static)';
    displayName: 'Benefit Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentCertification extends Struct.ComponentSchema {
  collectionName: 'components_content_certifications';
  info: {
    description: 'Individual certification or trust badge';
    displayName: 'Certification';
  };
  attributes: {};
}

export interface ContentCultureValue extends Struct.ComponentSchema {
  collectionName: 'components_content_culture_values';
  info: {
    description: 'Individual culture value with title and description';
    displayName: 'Culture Value';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_content_feature_items';
  info: {
    description: 'Feature item with icon, title and description';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFeatures extends Struct.ComponentSchema {
  collectionName: 'components_content_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentFeaturesBullets extends Struct.ComponentSchema {
  collectionName: 'components_content_features_bullets';
  info: {
    displayName: 'FeaturesBullets';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ContentParagraphWithHighlight extends Struct.ComponentSchema {
  collectionName: 'components_content_paragraph_with_highlights';
  info: {
    description: 'Paragraph with highlighted text in the middle';
    displayName: 'Paragraph with Highlight';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ContentValueItem extends Struct.ComponentSchema {
  collectionName: 'components_content_value_items';
  info: {
    description: 'Company value with icon, title and description';
    displayName: 'Value Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentWhyJoinPoint extends Struct.ComponentSchema {
  collectionName: 'components_content_why_join_points';
  info: {
    description: 'Point explaining why to join the company (icons are static)';
    displayName: 'Why Join Point';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CtaPillCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_pill_ctas';
  info: {
    description: 'Pill-style CTA component';
    displayName: 'Pill CTA';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Follow Compleo Health on LinkedIn for the latest updates, industry insights, and company news.'>;
    primaryButton_action: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.linkedin.com/company/compleohealth'>;
    primaryButton_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Follow Us on LinkedIn'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Stay Connected'>;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: 'A button component with text, link and icon';
    displayName: 'Button';
  };
  attributes: {
    analytics: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    description: 'A single feature item for services';
    displayName: 'Feature Item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_with_icons';
  info: {
    description: 'A feature item with icon selection';
    displayName: 'Feature With Icon';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      [
        'settings',
        'shield',
        'clock',
        'handshake',
        'pound',
        'cpu',
        'users',
        'trending-up',
        'stethoscope',
        'message-square',
      ]
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_features';
  info: {
    description: 'Feature item with icon, title and description for service pages';
    displayName: 'Service Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventsEvent extends Struct.ComponentSchema {
  collectionName: 'components_events_events';
  info: {
    description: 'Industry event with details';
    displayName: 'Event';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.String;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalContactPanel extends Struct.ComponentSchema {
  collectionName: 'components_global_contact_panel';
  info: {
    description: 'Contact panel slide-out with all contact information';
    displayName: 'Contact Panel';
  };
  attributes: {
    addressLine1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Beehive Mill'>;
    addressLine2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Jersey Street'>;
    addressLine3: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Manchester M4 6JG'>;
    addressLine4: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'United Kingdom'>;
    businessHours: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Monday-Friday 8am-8pm'>;
    contactFormButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Complete a Contact Form'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"We'd love to hear from you. Connect with us using one of the methods below.">;
    email: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'info@compleohealth.com'>;
    header: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact Us'>;
    linkedinText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Connect with us on LinkedIn'>;
    officeTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Manchester Office'>;
    phone: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'+44 (0)161 884 1303'>;
  };
}

export interface GlobalImpactStatistic extends Struct.ComponentSchema {
  collectionName: 'components_global_impact_statistics';
  info: {
    description: 'Individual impact statistic with statId, value, and label - used within Impact Statistic Groups';
    displayName: 'Impact Statistic';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    statId: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalImpactStatisticGroup extends Struct.ComponentSchema {
  collectionName: 'components_global_impact_statistic_groups';
  info: {
    description: 'Group of impact statistics with a title - used in global settings for shared impact statistics across pages';
    displayName: 'Impact Statistic Group';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'global.impact-statistic', true> &
      Schema.Attribute.Required;
  };
}

export interface GlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_global_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface GlobalTrustSignals extends Struct.ComponentSchema {
  collectionName: 'components_global_trust_signals';
  info: {
    description: 'Trust signals section with title and subtitle text';
    displayName: 'Trust Signals';
  };
  attributes: {
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Trusted by healthcare professionals across the UK and Europe'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Certified Excellence'>;
  };
}

export interface InitiativesSocialImpactInitiative
  extends Struct.ComponentSchema {
  collectionName: 'components_initiatives_social_impact_initiatives';
  info: {
    displayName: 'Social Impact Initiative';
  };
  attributes: {
    impact: Schema.Attribute.Text & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InitiativesSustainabilityInitiative
  extends Struct.ComponentSchema {
  collectionName: 'components_initiatives_sustainability_initiatives';
  info: {
    displayName: 'Sustainability Initiative';
  };
  attributes: {
    impact: Schema.Attribute.Text & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NewsNewsItem extends Struct.ComponentSchema {
  collectionName: 'components_news_news_items';
  info: {
    description: 'External news article with metadata';
    displayName: 'News Item';
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'NHS Updates'>;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    excerpt: Schema.Attribute.Text;
    readTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'5 min read'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_content_blocks';
  info: {
    description: 'A flexible content block with heading, text and optional image';
    displayName: 'Content Block';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    layout: Schema.Attribute.Enumeration<
      ['text-left', 'text-right', 'full-width']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text-left'>;
  };
}

export interface SectionsCurvedPillCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_curved_pill_ctas';
  info: {
    displayName: 'CurvedPill_CTA';
  };
  attributes: {
    description: Schema.Attribute.String;
    primaryButton_Href: Schema.Attribute.String;
    primaryButton_text: Schema.Attribute.String;
    secondaryButton_Href: Schema.Attribute.String;
    secondaryButton_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footer';
  info: {
    description: 'Footer section configuration';
    displayName: 'Footer';
  };
  attributes: {
    companyDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Experts in diagnostic imaging, delivering innovative solutions with passion, precision, and integrity.'>;
    companyNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Company No: 13226032'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundVideoURL: Schema.Attribute.String;
    fallbackImageURL: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    highlighttext: Schema.Attribute.String;
    impactStatsTitle: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'buttons.button', false>;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: 'Hero section for pages';
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'compleo-deep-teal'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    button1: Schema.Attribute.Component<'elements.button', false>;
    button2: Schema.Attribute.Component<'elements.button', false>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    textColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomeApproaches extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_approaches';
  info: {
    displayName: 'Home_Approaches';
  };
  attributes: {
    ApproachPanel: Schema.Attribute.Component<'cards.approach-cards', true>;
  };
}

export interface SectionsHomeCurvedCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_curved_cta';
  info: {
    description: 'Curved CTA panel section configuration';
    displayName: 'Home_CurvedCTA';
  };
  attributes: {
    buttonHref: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/contact'>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Partner With Us'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Let's discuss how we can support your diagnostic imaging needs and transform services to improve patient outcomes together.">;
    imageSrc: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/images/contact/team-collaboration.jpg'>;
    mobileImageSrc: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/images/contact/team-collaboration-mobile.jpg'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ready to Partner with Compleo?'>;
  };
}

export interface SectionsHomeLocationMap extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_location_map';
  info: {
    description: 'Location map section configuration';
    displayName: 'Home_LocationMap';
  };
  attributes: {
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our advanced imaging services are available across the UK and expanding into Europe.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'European Coverage'>;
  };
}

export interface SectionsHomeSolutions extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_solutions';
  info: {
    displayName: 'Home_Solutions';
  };
  attributes: {
    description: Schema.Attribute.Text;
    solutions: Schema.Attribute.Component<'cards.value-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_testimonials';
  info: {
    description: 'Testimonials section configuration';
    displayName: 'Home_Testimonials';
  };
  attributes: {
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'See how Compleo Health is transforming diagnostic imaging across the NHS and private sector.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Trusted by Healthcare Leaders and Patients'>;
  };
}

export interface SectionsHomeValueProposition extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_value_propositions';
  info: {
    displayName: 'Home_ValueProposition';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    ValuePropositionCards: Schema.Attribute.Component<
      'cards.value-cards',
      true
    >;
  };
}

export interface SectionsServiceDetail extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_details';
  info: {
    description: 'Detailed content for a service page';
    displayName: 'Service Detail';
  };
  attributes: {
    contentBlocks: Schema.Attribute.Component<'sections.content-block', true>;
    detailDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    detailFeatures: Schema.Attribute.Component<
      'elements.feature-with-icon',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    detailImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    detailTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroContent: Schema.Attribute.Component<'sections.hero-section', false> &
      Schema.Attribute.Required;
  };
}

export interface SocialLinkedinPost extends Struct.ComponentSchema {
  collectionName: 'components_social_linkedin_posts';
  info: {
    description: 'LinkedIn embed URL';
    displayName: 'LinkedIn Post';
  };
  attributes: {
    embedUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.button': ButtonsButton;
      'cards.approach-cards': CardsApproachCards;
      'cards.impact-card': CardsImpactCard;
      'cards.interest-area': CardsInterestArea;
      'cards.value-cards': CardsValueCards;
      'content.approach-bullets': ContentApproachBullets;
      'content.benefit-item': ContentBenefitItem;
      'content.certification': ContentCertification;
      'content.culture-value': ContentCultureValue;
      'content.feature-item': ContentFeatureItem;
      'content.features': ContentFeatures;
      'content.features-bullets': ContentFeaturesBullets;
      'content.paragraph-with-highlight': ContentParagraphWithHighlight;
      'content.value-item': ContentValueItem;
      'content.why-join-point': ContentWhyJoinPoint;
      'cta.pill-cta': CtaPillCta;
      'elements.button': ElementsButton;
      'elements.feature-item': ElementsFeatureItem;
      'elements.feature-with-icon': ElementsFeatureWithIcon;
      'elements.service-feature': ElementsServiceFeature;
      'events.event': EventsEvent;
      'global.contact-panel': GlobalContactPanel;
      'global.impact-statistic': GlobalImpactStatistic;
      'global.impact-statistic-group': GlobalImpactStatisticGroup;
      'global.seo': GlobalSeo;
      'global.trust-signals': GlobalTrustSignals;
      'initiatives.social-impact-initiative': InitiativesSocialImpactInitiative;
      'initiatives.sustainability-initiative': InitiativesSustainabilityInitiative;
      'news.news-item': NewsNewsItem;
      'sections.content-block': SectionsContentBlock;
      'sections.curved-pill-cta': SectionsCurvedPillCta;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.hero-section': SectionsHeroSection;
      'sections.home-approaches': SectionsHomeApproaches;
      'sections.home-curved-cta': SectionsHomeCurvedCta;
      'sections.home-location-map': SectionsHomeLocationMap;
      'sections.home-solutions': SectionsHomeSolutions;
      'sections.home-testimonials': SectionsHomeTestimonials;
      'sections.home-value-proposition': SectionsHomeValueProposition;
      'sections.service-detail': SectionsServiceDetail;
      'social.linkedin-post': SocialLinkedinPost;
    }
  }
}
