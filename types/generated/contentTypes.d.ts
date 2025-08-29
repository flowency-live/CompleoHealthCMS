import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminAuditLog extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_audit_logs';
  info: {
    displayName: 'Audit Log';
    pluralName: 'audit-logs';
    singularName: 'audit-log';
  };
  options: {
    draftAndPublish: false;
    timestamps: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::audit-log'> &
      Schema.Attribute.Private;
    payload: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Relation<'oneToOne', 'admin::user'>;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutPageAboutPage extends Struct.SingleTypeSchema {
  collectionName: 'about_pages';
  info: {
    description: 'Content for the About page';
    displayName: 'About Page';
    pluralName: 'about-pages';
    singularName: 'about-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companyFeatures: Schema.Attribute.Component<'content.feature-item', true> &
      Schema.Attribute.Required;
    companyParagraphs: Schema.Attribute.Component<
      'content.paragraph-with-highlight',
      true
    > &
      Schema.Attribute.Required;
    companyTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Compleo Health'>;
    companyValues: Schema.Attribute.Component<'content.value-item', true> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaButtonHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/contact'>;
    ctaButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Partner With Us'>;
    ctaDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Discover how Compleo Health can transform your diagnostic imaging capabilities and improve patient outcomes.'>;
    ctaTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready to Partner With Us?'>;
    heroHighlightWord: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Diagnostic Imaging'>;
    heroPrimaryButton_href: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/work-with-us'>;
    heroPrimaryButton_subtext: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Team'>;
    heroPrimaryButton_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'JOIN'>;
    heroPrimaryButton_trackingLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'JOIN Our Team - About Hero'>;
    heroSecondaryButton_href: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/contact'>;
    heroSecondaryButton_subtext: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Us'>;
    heroSecondaryButton_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CONTACT'>;
    heroSecondaryButton_trackingLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CONTACT Us - About Hero'>;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Since 2021, we've been revolutionising healthcare through innovative imaging solutions, passionate service delivery, and unwavering commitment to patient care.">;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Leaders in'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-page.about-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valuesDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'These core values guide every decision we make and every service we deliver.'>;
    valuesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Values'>;
  };
}

export interface ApiCaseStudiesPageCaseStudiesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'case_studies_pages';
  info: {
    description: 'Case studies page content';
    displayName: 'Case Studies Page';
    pluralName: 'case-studies-pages';
    singularName: 'case-studies-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Hero: Schema.Attribute.Component<'sections.hero-section', false>;
    impactStatsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Impact'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-studies-page.case-studies-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    successStoriesSubtitle: Schema.Attribute.Text;
    successStoriesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Success Stories'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiClinicalInsourcingClinicalInsourcing
  extends Struct.SingleTypeSchema {
  collectionName: 'clinical_insourcing_pages';
  info: {
    description: 'CMS content for the Clinical Insourcing service page';
    displayName: 'Clinical Insourcing Page';
    pluralName: 'clinical-insourcing-pages';
    singularName: 'clinical-insourcing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.service-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Flexible staffing solutions with qualified radiographers to boost efficiency and reduce wait times.'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Clinical Insourcing'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::clinical-insourcing.clinical-insourcing'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    serviceDetailsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required;
    serviceDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Expert Clinical Staffing Solutions'>;
    serviceImage: Schema.Attribute.String & Schema.Attribute.Required;
    serviceImageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommunityDiagnosticCentresCommunityDiagnosticCentres
  extends Struct.SingleTypeSchema {
  collectionName: 'community_diagnostic_centres_pages';
  info: {
    description: 'CMS content for the Community Diagnostic Centres service page';
    displayName: 'Community Diagnostic Centres Page';
    pluralName: 'community-diagnostic-centres-pages';
    singularName: 'community-diagnostic-centres';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.service-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Comprehensive and efficient diagnostic facilities for improved patient access and effective clinical pathways.'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Community Diagnostic Centres'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community-diagnostic-centres.community-diagnostic-centres'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    serviceDetailsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required;
    serviceDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Accessible Community Healthcare'>;
    serviceImage: Schema.Attribute.String & Schema.Attribute.Required;
    serviceImageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEquipmentDetailsEquipmentDetails
  extends Struct.SingleTypeSchema {
  collectionName: 'equipment_details_pages';
  info: {
    description: 'CMS content for the Equipment Details service page';
    displayName: 'Equipment Details Page';
    pluralName: 'equipment-details-pages';
    singularName: 'equipment-details';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    equipmentPortfolioDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'State-of-the-art MRI and CT scanners featuring AI-capabilities, helium-free technology, and industry-leading image quality.'>;
    equipmentPortfolioTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Advanced Equipment Portfolio'>;
    features: Schema.Attribute.Component<'elements.service-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Scalable solutions bringing state-of-the-art equipment and advanced imaging directly to your location.'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mobile and Reloc Equipment Portfolio'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::equipment-details.equipment-details'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    serviceDetailsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our mobile imaging units possess the highest level of diagnostic capabilities, providing flexible and convenient access to comprehensive solutions.'>;
    serviceDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Advanced and Accessible Imaging Capacity'>;
    serviceImage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/images/services/mobile-imaging-hero.jpg'>;
    serviceImageAlt: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Compleo relocatable MRI unit with brand teal and white exterior'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEquipmentRentalEquipmentRental
  extends Struct.SingleTypeSchema {
  collectionName: 'equipment_rental_pages';
  info: {
    description: 'CMS content for the Equipment Rental service page';
    displayName: 'Equipment Rental Page';
    pluralName: 'equipment-rental-pages';
    singularName: 'equipment-rental';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.service-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Short, medium and long-term MRI/CT rental with rapid deployment and full support included.'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Equipment Rental'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::equipment-rental.equipment-rental'
    > &
      Schema.Attribute.Private;
    MobileSolutionsText_Description: Schema.Attribute.Text;
    MobileSolutionsText_Title: Schema.Attribute.String;
    mobileUnitsDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    mobileUnitsFeatures: Schema.Attribute.Component<
      'elements.service-feature',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    mobileUnitsImage: Schema.Attribute.String & Schema.Attribute.Required;
    mobileUnitsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mobile & Relocatable Units'>;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    serviceDetailsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required;
    serviceDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Complete Equipment Rental Solutions'>;
    serviceImage: Schema.Attribute.String & Schema.Attribute.Required;
    serviceImageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoHeroBackgroundVideo: Schema.Attribute.String &
      Schema.Attribute.Required;
    videoHeroDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    videoHeroFallbackImage: Schema.Attribute.String & Schema.Attribute.Required;
    videoHeroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Advanced Imaging Solutions'>;
  };
}

export interface ApiGlobalSettingsGlobalSettings
  extends Struct.SingleTypeSchema {
  collectionName: 'global_settings';
  info: {
    displayName: 'Global Settings';
    pluralName: 'global-settingses';
    singularName: 'global-settings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContactPanel: Schema.Attribute.Component<'global.contact-panel', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Footer: Schema.Attribute.Component<'sections.footer', false>;
    ImpactStatistics: Schema.Attribute.Component<
      'global.impact-statistic-group',
      false
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-settings.global-settings'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TrustSignals: Schema.Attribute.Component<'global.trust-signals', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    displayName: 'Home';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Approach: Schema.Attribute.Component<'sections.home-approaches', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CurvedCTA: Schema.Attribute.Component<'sections.home-curved-cta', false>;
    HealthcareSolutions: Schema.Attribute.Component<
      'sections.home-solutions',
      false
    >;
    Hero: Schema.Attribute.Component<'sections.hero', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'> &
      Schema.Attribute.Private;
    LocationMap: Schema.Attribute.Component<
      'sections.home-location-map',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    Testimonials: Schema.Attribute.Component<
      'sections.home-testimonials',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ValueProposition: Schema.Attribute.Component<
      'sections.home-value-proposition',
      false
    >;
  };
}

export interface ApiManagedEquipmentManagedEquipment
  extends Struct.SingleTypeSchema {
  collectionName: 'managed_equipment_pages';
  info: {
    description: 'CMS content for the Managed Equipment service page';
    displayName: 'Managed Equipment Page';
    pluralName: 'managed-equipment-pages';
    singularName: 'managed-equipment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.service-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Turnkey solutions with state-of-the-art equipment, maintenance, and 24/7 support for seamless service delivery.'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Managed Equipment Services'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::managed-equipment.managed-equipment'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    serviceDetailsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required;
    serviceDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Complete Managed Equipment Solutions'>;
    serviceImage: Schema.Attribute.String & Schema.Attribute.Required;
    serviceImageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsAndViewsPageNewsAndViewsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'news_and_views_pages';
  info: {
    description: 'News and Views page content management';
    displayName: 'News and Views Page';
    pluralName: 'news-and-views-pages';
    singularName: 'news-and-views-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    beeCardDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Straight from the hive: insights, updates and Compleo energy.'>;
    beeCardTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The Compleo Buzz'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'cta.pill-cta', false>;
    events: Schema.Attribute.Component<'events.event', true>;
    eventsBadgeText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Live Events'>;
    eventsDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Join us at industry events and conferences where we're showcasing the future of diagnostic imaging.">;
    eventsTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Events'>;
    heroDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"The pulse, the buzz, and what's next in care \u2014 all in one scroll.">;
    heroHighlightWord: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Views'>;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Buzzing ideas straight from the hive. Your monthly dose of healthcare hype + Compleo vibes.'>;
    heroTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'News and'>;
    linkedinPosts: Schema.Attribute.Component<'social.linkedin-post', true>;
    linkedinUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.linkedin.com/company/compleohealth'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-and-views-page.news-and-views-page'
    > &
      Schema.Attribute.Private;
    newsBadgeText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Latest Updates'>;
    newsDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Where innovation meets inspiration \u2014 Compleo's take on what's shaping tomorrow's care, minus the jargon.">;
    newsItems: Schema.Attribute.Component<'news.news-item', true>;
    newsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"What's Happening">;
    publishedAt: Schema.Attribute.DateTime;
    socialBadgeText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Social Updates'>;
    socialDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Stay connected with our latest updates, insights, and company news directly from our LinkedIn feed.'>;
    socialTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Follow Us on'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurTeamPageOurTeamPage extends Struct.SingleTypeSchema {
  collectionName: 'our_team_pages';
  info: {
    description: 'Our Team page content';
    displayName: 'Our Team Page';
    pluralName: 'our-team-pages';
    singularName: 'our-team-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cultureDescription: Schema.Attribute.Text;
    cultureImage: Schema.Attribute.Media<'images'>;
    cultureImageAlt: Schema.Attribute.String;
    cultureTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Culture & Values'>;
    cultureValues: Schema.Attribute.Component<'content.culture-value', true>;
    Hero: Schema.Attribute.Component<'sections.hero-section', false>;
    leadershipDescription: Schema.Attribute.Text;
    leadershipTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Leadership Team'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-team-page.our-team-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiScreeningProgrammesScreeningProgrammes
  extends Struct.SingleTypeSchema {
  collectionName: 'screening_programmes_pages';
  info: {
    description: 'CMS content for the Screening Programmes service page';
    displayName: 'Screening Programmes Page';
    pluralName: 'screening-programmes-pages';
    singularName: 'screening-programmes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.service-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Quality-based screening pathways utilizing advanced technology, expert reporting and effective integration with existing services.'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Screening Programmes'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::screening-programmes.screening-programmes'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    serviceDetailsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required;
    serviceDetailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Early Detection for Better Outcomes'>;
    serviceImage: Schema.Attribute.String & Schema.Attribute.Required;
    serviceImageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServiceService extends Struct.CollectionTypeSchema {
  collectionName: 'services';
  info: {
    description: 'Collection of services offered by Compleo Health';
    displayName: 'Service';
    pluralName: 'services';
    singularName: 'service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    detailContent: Schema.Attribute.Component<'sections.service-detail', false>;
    features: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::service.service'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServicesPageServicesPage extends Struct.SingleTypeSchema {
  collectionName: 'services_pages';
  info: {
    description: 'Content for the main services listing page';
    displayName: 'Services Page';
    pluralName: 'services-pages';
    singularName: 'services-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ApproachFeatures: Schema.Attribute.Component<
      'content.approach-bullets',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CurvedPill_CTA: Schema.Attribute.Component<
      'sections.curved-pill-cta',
      false
    >;
    heroContent: Schema.Attribute.Component<'sections.hero', false> &
      Schema.Attribute.Required;
    impactStatsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Impact'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::services-page.services-page'
    > &
      Schema.Attribute.Private;
    PillText: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    sectionDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'From managed equipment services to mobile imaging units, we provide comprehensive solutions tailored to your specific needs.'>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Services'>;
    services: Schema.Attribute.Component<'cards.value-cards', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSustainabilityPageSustainabilityPage
  extends Struct.SingleTypeSchema {
  collectionName: 'sustainability_pages';
  info: {
    description: 'CMS content for the Sustainability/Social Impact page';
    displayName: 'Sustainability Page';
    pluralName: 'sustainability-pages';
    singularName: 'sustainability-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaSection: Schema.Attribute.Component<'sections.curved-pill-cta', false> &
      Schema.Attribute.Required;
    heroSubtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Investing in the next generation of technology and the next generation in communities'>;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sustainability'>;
    impactCards: Schema.Attribute.Component<'cards.impact-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    impactCardsDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Measurable results from our commitment to creating lasting positive change in communities'>;
    impactCardsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Impact'>;
    interestAreas: Schema.Attribute.Component<'cards.interest-area', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    interestAreasDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Core focus areas driving our commitment to sustainable healthcare and community impact'>;
    interestAreasTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Areas of Interest'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sustainability-page.sustainability-page'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'buttons.button', false> &
      Schema.Attribute.Required;
    socialImpactInitiatives: Schema.Attribute.Component<
      'initiatives.social-impact-initiative',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    socialImpactInitiativesDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Investing in lasting social value through health education, community partnerships, and expanding healthcare access'>;
    socialImpactInitiativesTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Social Impact Initiatives'>;
    sustainabilityInitiatives: Schema.Attribute.Component<
      'initiatives.sustainability-initiative',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    sustainabilityInitiativesDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Leading the healthcare industry with next generation solutions.'>;
    sustainabilityInitiativesTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sustainability Initiatives'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWorkWithUsPageWorkWithUsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'work_with_us_pages';
  info: {
    description: 'Work with us / careers page content';
    displayName: 'Work With Us Page';
    pluralName: 'work-with-us-pages';
    singularName: 'work-with-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefitsItems: Schema.Attribute.Component<'content.benefit-item', true>;
    benefitsSubtitle: Schema.Attribute.Text;
    benefitsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Benefits & Perks'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaDescription: Schema.Attribute.Text;
    ctaHeading: Schema.Attribute.String;
    ctaPrimaryButton: Schema.Attribute.Component<'elements.button', false>;
    ctaSecondaryButton: Schema.Attribute.Component<'elements.button', false>;
    Hero: Schema.Attribute.Component<'sections.hero-section', false>;
    linkedinButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'LinkedIn Careers Page'>;
    linkedinUrl: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::work-with-us-page.work-with-us-page'
    > &
      Schema.Attribute.Private;
    opportunitiesSubtitle: Schema.Attribute.Text;
    opportunitiesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Current Opportunities'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyJoinPoints: Schema.Attribute.Component<'content.why-join-point', true>;
    whyJoinTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why work with us?'>;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::audit-log': AdminAuditLog;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-page.about-page': ApiAboutPageAboutPage;
      'api::case-studies-page.case-studies-page': ApiCaseStudiesPageCaseStudiesPage;
      'api::clinical-insourcing.clinical-insourcing': ApiClinicalInsourcingClinicalInsourcing;
      'api::community-diagnostic-centres.community-diagnostic-centres': ApiCommunityDiagnosticCentresCommunityDiagnosticCentres;
      'api::equipment-details.equipment-details': ApiEquipmentDetailsEquipmentDetails;
      'api::equipment-rental.equipment-rental': ApiEquipmentRentalEquipmentRental;
      'api::global-settings.global-settings': ApiGlobalSettingsGlobalSettings;
      'api::home.home': ApiHomeHome;
      'api::managed-equipment.managed-equipment': ApiManagedEquipmentManagedEquipment;
      'api::news-and-views-page.news-and-views-page': ApiNewsAndViewsPageNewsAndViewsPage;
      'api::our-team-page.our-team-page': ApiOurTeamPageOurTeamPage;
      'api::screening-programmes.screening-programmes': ApiScreeningProgrammesScreeningProgrammes;
      'api::service.service': ApiServiceService;
      'api::services-page.services-page': ApiServicesPageServicesPage;
      'api::sustainability-page.sustainability-page': ApiSustainabilityPageSustainabilityPage;
      'api::work-with-us-page.work-with-us-page': ApiWorkWithUsPageWorkWithUsPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
