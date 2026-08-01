import { Helmet } from 'react-helmet-async'

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Nurses Nook</title>
        <meta name="description" content="Terms of Service for Nurses Nook website. EIN 92-2233469. Oconto Falls, Wisconsin nonprofit." />
      </Helmet>

      <section className="bg-slate-50 py-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600 mb-8">Last updated: August 1, 2026</p>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed">Welcome to Nurses Nook ("Organization," "we," "us," or "our"). These Terms of Service govern your use of our website located at nursesnook.org and our programs and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part, you may not access the website.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Organization Information</h2>
              <p className="text-slate-600 leading-relaxed">Nurses Nook is a registered 501(c)(3) nonprofit organization incorporated in the State of Wisconsin. Our principal place of business is 123 Main Street, Suite 3, Oconto Falls, WI 54154-0026. Our Federal Employer Identification Number (EIN) is 92-2233469.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Use of Website</h2>
              <p className="text-slate-600 leading-relaxed">You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair our services, or interfere with any other party's use of the website.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Donations</h2>
              <p className="text-slate-600 leading-relaxed">All donations made through our website are voluntary and non-refundable except in cases of processing error. Donations are tax-deductible to the fullest extent allowed by law. You will receive an email confirmation and tax receipt for contributions of $250 or more.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">All content on this website, including text, graphics, logos, and images, is the property of Nurses Nook and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">The information on this website is provided for general informational purposes only and does not constitute medical, legal, or professional advice. We make no warranties about the accuracy or completeness of website content.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the State of Wisconsin, without regard to conflict of law principles.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed">Questions about these Terms should be sent to:<br />Nurses Nook<br />123 Main Street, Suite 3<br />Oconto Falls, WI 54154-0026<br />Email: admin@nursesnook.org<br />Phone: (920) 846-1234</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService