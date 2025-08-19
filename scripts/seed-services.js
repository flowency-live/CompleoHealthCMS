/**
 * Seed script for services data
 * 
 * This script populates the Strapi CMS with initial services data
 * that matches the existing content exactly.
 * 
 * Usage:
 * 1. Start your Strapi server
 * 2. Run this script with Node.js:
 *    node scripts/seed-services.js
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN; // Set this in your environment variables

// Services data that exactly matches the existing content
const servicesData = [
  {
    title: 'Managed Equipment Services',
    description: 'Turnkey solutions, maintenance, and 24/7 support.',
    features: [
      { text: 'Complete equipment management' },
      { text: 'Preventive maintenance included' },
      { text: 'AI-enhanced diagnostics' },
      { text: '24/7 technical support' }
    ],
    imageAlt: 'CT scanner operation with technician monitoring from control room',
    slug: 'managed-equipment'
  },
  {
    title: 'Equipment Rental',
    description: 'Short, medium and long-term MRI/CT rental with rapid deployment.',
    features: [
      { text: 'Quick installation' },
      { text: 'Flexible terms' },
      { text: 'Full support included' },
      { text: 'Latest technology' }
    ],
    imageAlt: 'Modern Siemens MRI scanner in clinical setting with ambient lighting',
    slug: 'equipment-rental'
  },
  {
    title: 'Community Diagnostic Centres',
    description: 'Comprehensive and efficient diagnostic facilities for improved patient access.',
    features: [
      { text: 'Community accessibility' },
      { text: 'Streamlined pathways' },
      { text: 'Reduced wait times' },
      { text: 'NHS integration' }
    ],
    imageAlt: 'Compleo Community Diagnostic Centre in partnership with NHS Dartford and Gravesham',
    slug: 'community-diagnostic-centres'
  },
  {
    title: 'Screening Programmes',
    description: 'Streamlined screening integration for early detection programs.',
    features: [
      { text: 'Early detection focus' },
      { text: 'Quick turnaround' },
      { text: 'NHS integration' },
      { text: 'Expert reporting' }
    ],
    imageAlt: 'Compleo mobile CT unit for screening programs deployment',
    slug: 'screening-programmes'
  },
  {
    title: 'Clinical Insourcing',
    description: 'Flexible staffing solutions to boost efficiency and reduce wait times.',
    features: [
      { text: 'Qualified radiographers' },
      { text: 'Flexible scheduling' },
      { text: 'Seamless integration' },
      { text: 'Competitive rates' }
    ],
    imageAlt: 'Professional radiographer in CT scanning room',
    slug: 'clinical-insourcing'
  },
  {
    title: 'Mobile and Relocatable Imaging Units',
    description: 'Scalable solutions bringing advanced imaging directly to your location.',
    features: [
      { text: 'On-site services' },
      { text: 'State-of-art equipment' },
      { text: 'Flexible scheduling' },
      { text: 'Rapid deployment' }
    ],
    imageAlt: 'Compleo relocatable MRI unit with brand teal and white exterior',
    slug: 'equipment-details'
  }
];

// Hero section data
const heroData = {
  title: "Healthcare Solutions",
  subtitle: "Comprehensive imaging services designed for NHS Trusts, hospitals, and healthcare providers across the UK.",
  backgroundColor: "compleo-deep-teal",
  textColor: "white"
};

/**
 * Create a service in Strapi
 */
async function createService(service) {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (API_TOKEN) {
      headers['Authorization'] = `Bearer ${API_TOKEN}`;
    }
    
    // First, create the service entry
    const response = await axios.post(
      `${STRAPI_URL}/api/services`, 
      {
        data: {
          title: service.title,
          description: service.description,
          imageAlt: service.imageAlt,
          slug: service.slug,
          features: service.features
        }
      },
      { headers }
    );
    
    console.log(`Created service: ${service.title}`);
    return response.data;
  } catch (error) {
    console.error(`Error creating service ${service.title}:`, error.response?.data || error.message);
    throw error;
  }
}

/**
 * Main function to seed all data
 */
async function seedData() {
  console.log('Starting services data seeding...');
  
  try {
    // Create all services
    for (const service of servicesData) {
      await createService(service);
    }
    
    console.log('Services data seeding completed successfully!');
  } catch (error) {
    console.error('Data seeding failed:', error);
  }
}

// Run the seed function
seedData();
