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

export interface ContentCertification extends Struct.ComponentSchema {
  collectionName: 'components_content_certifications';
  info: {
    description: 'Individual certification or trust badge';
    displayName: 'Certification';
  };
  attributes: {};
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

export interface ContentImpactStatistic extends Struct.ComponentSchema {
  collectionName: 'components_content_impact_statistics';
  info: {
    displayName: 'ImpactStatistic';
  };
  attributes: {
    label: Schema.Attribute.String;
    statId: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContentImpactStatisticGroup extends Struct.ComponentSchema {
  collectionName: 'components_content_impact_statistic_groups';
  info: {
    displayName: 'ImpactStatisticGroup';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'content.impact-statistic', true>;
    title: Schema.Attribute.String;
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
    ImpactStatistics: Schema.Attribute.Component<
      'content.impact-statistic-group',
      false
    >;
    primaryButton: Schema.Attribute.Component<'buttons.button', false>;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false>;
    subheading: Schema.Attribute.Text;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.button': ButtonsButton;
      'cards.approach-cards': CardsApproachCards;
      'cards.value-cards': CardsValueCards;
      'content.certification': ContentCertification;
      'content.features': ContentFeatures;
      'content.features-bullets': ContentFeaturesBullets;
      'content.impact-statistic': ContentImpactStatistic;
      'content.impact-statistic-group': ContentImpactStatisticGroup;
      'global.seo': GlobalSeo;
      'sections.hero': SectionsHero;
      'sections.home-approaches': SectionsHomeApproaches;
      'sections.home-curved-cta': SectionsHomeCurvedCta;
      'sections.home-location-map': SectionsHomeLocationMap;
      'sections.home-solutions': SectionsHomeSolutions;
      'sections.home-testimonials': SectionsHomeTestimonials;
      'sections.home-value-proposition': SectionsHomeValueProposition;
    }
  }
}
