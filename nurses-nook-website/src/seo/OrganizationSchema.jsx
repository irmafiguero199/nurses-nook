function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Nurses Nook",
    "description": "A 501(c)(3) nonprofit supporting nurses and healthcare professionals in Oconto Falls, Wisconsin.",
    "url": "https://nursesnook.org",
    "logo": "https://nursesnook.org/logo.svg",
    "email": "admin@nursesnook.org",
    "telephone": "+1-920-846-1234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street, Suite 3",
      "addressLocality": "Oconto Falls",
      "addressRegion": "WI",
      "postalCode": "54154-0026",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/nursesnook",
      "https://twitter.com/nursesnook",
      "https://instagram.com/nursesnook"
    ],
    "taxID": "92-2233469"
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export default OrganizationSchema