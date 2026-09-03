import { Helmet } from 'react-helmet-async'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Pelican Bay Sailing School Inc</title>
        <meta name="description" content="Privacy Policy for Pelican Bay Sailing School Inc, a Florida non-profit organization (EIN 92-3488213)." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/privacy-policy" />
      </Helmet>

      <section className="bg-slate-50 py-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: August 1, 2026</p>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Pelican Bay Sailing School Inc ("we," "our," or "us") is a non-profit organization based in Bonita Springs, Florida (EIN: 92-3488213). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-3">We collect information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Name, email address, and phone number when you contact us or subscribe to our newsletter</li>
                <li>Sailing and maritime experience details when applying for training programs or scholarships</li>
                <li>Donation and payment information processed through secure third-party processors</li>
                <li>Website usage data through cookies and analytics tools</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide and manage our sailing programs, courses, and waterfront activities</li>
                <li>Process donations and send tax receipts</li>
                <li>Communicate updates, event schedules, and training opportunities</li>
                <li>Improve our website and program offerings</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, rent, or trade your personal information. We may share data with trusted service providers (such as email platforms and payment processors) who assist our operations under strict confidentiality agreements. We may also disclose information when required by law or to protect our legal rights.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at admin@pelicanbaysailingschoolinc.sbs or at our office: 4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:<br />
                Email: admin@pelicanbaysailingschoolinc.sbs<br />
                Address: Pelican Bay Sailing School Inc, 4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
