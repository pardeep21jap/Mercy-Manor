import React from 'react';
import { Helmet } from 'react-helmet';

const Schema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Mercy Manor Health Care",
    "logo": "https://www.mercymanor.ca/assets/Logo-C-MIoS61.png",
    "image": "https://mercymanor.ca/assets/about1-D23-EdJ0.webp",
    "@id": "https://mercymanor.ca/#home",
    "url": "https://mercymanor.ca/",
    "description": "Mercy Manor Health Care provides compassionate senior home care services including companion care, dementia care, meal preparation, homemaking, nursing care, escorting client service support across British Columbia.",
    "telephone": "+6046131245",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chilliwack",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61589532728856",
      "https://www.instagram.com/mercymanorhomecarebc/",
      "https://mercymanor.ca/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Senior Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Companionship Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dementia Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meal Preparation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Light Housekeeping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Care Assistance"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default Schema;