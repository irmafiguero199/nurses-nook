import { Helmet } from 'react-helmet-async'
import { Shield, FileText, MapPin, Calendar, Award, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration Information | Nurses Nook - Official Nonprofit Records</title>
        <meta name="description" content="Official registration information for Nurses Nook: EIN 92-2233469, Wisconsin nonprofit corporation, 501(c)(3) tax-exempt status. Oconto Falls, WI 54154-0026." />
        <link rel="canonical" href="https://nursesnook.org/registration-information" />
      </Helmet>

      <section className="bg-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <Shield className="mx-auto mb-4" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration Information</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Official records and legal documentation for Nurses Nook nonprofit organization.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeader title="Legal & Regulatory Information" subtitle="Transparency is a core value at Nurses Nook. Below is our complete official registration information." />

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary-600" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Federal Tax Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-sm text-slate-500 mb-1">Federal Employer Identification Number (EIN)</p><p className="text-2xl font-mono font-bold text-slate-900">92-2233469</p></div>
                <div><p className="text-sm text-slate-500 mb-1">IRS Tax-Exempt Status</p><p className="text-lg font-semibold text-slate-900">501(c)(3) Public Charity</p></div>
                <div><p className="text-sm text-slate-500 mb-1">IRS Determination Date</p><p className="text-lg font-semibold text-slate-900">March 15, 2022</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Tax Deductible Donations</p><p className="text-lg font-semibold text-green-700">Yes - All Contributions</p></div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600"><strong>IRS Verification:</strong> Nurses Nook is listed in the IRS Exempt Organizations database. You can verify our status by searching EIN 92-2233469 on the official IRS website.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-primary-600" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">State Registration</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-sm text-slate-500 mb-1">State of Incorporation</p><p className="text-lg font-semibold text-slate-900">Wisconsin</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Wisconsin Entity ID</p><p className="text-2xl font-mono font-bold text-slate-900">N030943</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Date of Incorporation</p><p className="text-lg font-semibold text-slate-900">January 10, 2021</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Good Standing Status</p><p className="text-lg font-semibold text-green-700">Active & Compliant</p></div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-500 mb-1">Registered Office Address</p>
                <p className="text-slate-900">123 Main Street, Suite 3</p>
                <p className="text-slate-900">Oconto Falls, WI 54154-0026</p>
                <p className="text-slate-900">Oconto County, Wisconsin, USA</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-primary-600" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Governance & Leadership</h2>
              </div>
              <div className="space-y-4">
                <div><p className="text-sm text-slate-500 mb-1">Governing Body</p><p className="text-slate-900">Board of Directors (7 voting members)</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Board President</p><p className="text-slate-900">Dr. James Patterson</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Executive Director</p><p className="text-slate-900">Sarah Mitchell, RN, MSN</p></div>
                <div><p className="text-sm text-slate-500 mb-1">Fiscal Year</p><p className="text-slate-900">January 1 - December 31</p></div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-primary-600" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Annual Reporting & Transparency</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div><p className="font-semibold text-slate-900">2025 Annual Report</p><p className="text-sm text-slate-600">Financial statements, program outcomes, and strategic plan</p></div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium"><ExternalLink size={16} /> View PDF</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div><p className="font-semibold text-slate-900">Form 990 (2024)</p><p className="text-sm text-slate-600">IRS Return of Organization Exempt From Income Tax</p></div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium"><ExternalLink size={16} /> View PDF</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div><p className="font-semibold text-slate-900">Wisconsin Charity Registration</p><p className="text-sm text-slate-600">State of Wisconsin charitable organization filing</p></div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-medium"><ExternalLink size={16} /> View PDF</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary-800 text-white rounded-xl text-center">
            <h3 className="text-xl font-bold mb-3">Questions About Our Registration?</h3>
            <p className="text-primary-100 mb-4">We welcome inquiries about our legal status, governance, and financial transparency.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>Email: admin@nursesnook.org</span>
              <span>|</span>
              <span>Phone: (920) 846-1234</span>
              <span>|</span>
              <span>Address: 123 Main Street, Suite 3, Oconto Falls, WI 54154-0026</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegistrationInformation