import React from 'react';
import { Helmet } from 'react-helmet';

const Schema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CommunityHealth",
    "name": "Senior Care Services",
    "image": "https://mercymanor.ca/assets/about1-D23-EdJ0.webp",
    "@id": "https://mercymanor.ca/#home",
    "url": "https://mercymanor.ca/",
    "telephone": "+ 604 613 1245",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Chilliwack",
      "addressRegion": "BC",
      "postalCode": "",
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
    ]
  };

  return (
    <Helmet>
      <script
        type="application/ld+json"
      >
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
export default Schema;