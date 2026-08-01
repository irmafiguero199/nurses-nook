import { Helmet } from 'react-helmet-async'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Nurses Nook</title>
        <meta name="description" content="Privacy Policy for Nurses Nook, a Wisconsin nonprofit organization (EIN 92-2233469)." />
      </Helmet>

      <section className="bg-slate-50 py-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: August 1, 2026</p>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">Nurses Nook ("we," "our," or "us") is a 501(c)(3) nonprofit organization based in Oconto Falls, Wisconsin (EIN: 92-2233469). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-3">We collect information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Name, email address, and phone number when you contact us or subscribe to our newsletter</li>
                <li>Professional information (license number, employer) when applying for programs or scholarships</li>
                <li>Donation and payment information processed through secure third-party processors</li>
                <li>Website usage data through cookies and analytics tools</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide and manage our programs and services</li>
                <li>Process donations and send tax receipts</li>
                <li>Communicate updates, events, and opportunities</li>
                <li>Improve our website and program offerings</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed">We do not sell, rent, or trade your personal information. We may share data with trusted service providers (such as email platforms and payment processors) who assist our operations under strict confidentiality agreements. We may also disclose information when required by law or to protect our legal rights.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at admin@nursesnook.org or at our office: 123 Main Street, Suite 3, Oconto Falls, WI 54154-0026.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">If you have questions about this Privacy Policy, please contact us at:<br />Email: admin@nursesnook.org<br />Phone: (920) 846-1234<br />Address: Nurses Nook, 123 Main Street, Suite 3, Oconto Falls, WI 54154-0026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy