function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Pelican Bay Sailing School Inc",
    "description": "A 501(c)(3) non-profit organization providing maritime education, youth sailing programs, and waterfront safety training in Bonita Springs, Florida.",
    "url": "https://pelicanbaysailingschoolinc.sbs",
    "logo": "https://pelicanbaysailingschoolinc.sbs/logo.svg",
    "email": "admin@pelicanbaysailingschoolinc.sbs",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4971 BONITA BAY BLVD",
      "addressLocality": "Bonita Springs",
      "addressRegion": "FL",
      "postalCode": "34134",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/pelicanbaysailingschoolinc",
      "https://twitter.com/pelicanbaysailing",
      "https://instagram.com/pelicanbaysailingschoolinc"
    ],
    "taxID": "92-3488213"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default OrganizationSchema
