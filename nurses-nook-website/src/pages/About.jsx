import { Helmet } from 'react-helmet-async'
import { MapPin, Calendar, Award, Users, Heart, Target } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const milestones = [
  { year: '2021', title: 'Organization Founded', description: 'Pelican Bay Sailing School Inc was established in Bonita Springs, Florida by dedicated maritime enthusiasts and community leaders.' },
  { year: '2022', title: '501(c)(3) Status Granted', description: 'Received official federal tax-exempt status from the IRS. EIN: 92-3488213.' },
  { year: '2022', title: 'First Youth Program Launched', description: 'Introduced youth sailing and water safety workshops for local students in Lee County.' },
  { year: '2023', title: 'Maritime Safety Expansion', description: 'Expanded safety certification courses and community boating programs, reaching over 200 participants.' },
  { year: '2024', title: 'Regional Outreach', description: 'Extended programs across Southwest Florida, providing maritime education to 500+ participants.' },
  { year: '2025', title: 'Digital Resource Platform', description: 'Launched online educational platform for sailing theory and coastal navigation.' },
]

const values = [
  { icon: Heart, title: 'Passion', description: 'We inspire a lifelong love for sailing, marine safety, and ocean stewardship.' },
  { icon: Target, title: 'Excellence', description: 'We maintain high instructional standards, ensuring safe, top-quality sailing and maritime education.' },
  { icon: Users, title: 'Community', description: 'We foster an inclusive environment that connects sailors, youth, and water enthusiasts of all backgrounds.' },
  { icon: Award, title: 'Integrity', description: 'We operate with full transparency, safety prioritization, and accountability in all activities.' },
]

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Pelican Bay Sailing School Inc - Bonita Springs, Florida Nonprofit</title>
        <meta name="description" content="Learn about Pelican Bay Sailing School Inc, a 501(c)(3) nonprofit organization (EIN 92-3488213) based in Bonita Springs, Florida, dedicated to sailing education and maritime safety." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/about" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pelican Bay Sailing School</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A registered 501(c)(3) nonprofit organization serving Florida's maritime community since 2021.
          </p>
        </div>
      </section>

      {/* Organization Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Organization Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Physical Address</p>
                    <p className="text-slate-600">4971 BONITA BAY BLVD</p>
                    <p className="text-slate-600">BONITA SPRINGS, FL 34134</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Year Founded</p>
                    <p className="text-slate-600">2021</p>
                    <p className="text-slate-600">Florida Nonprofit Corporation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Federal EIN (Tax ID)</p>
                    <p className="text-slate-600 font-mono">92-3488213</p>
                    <p className="text-slate-600">501(c)(3) Tax-Exempt Status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Leadership</p>
                    <p className="text-slate-600">Board of Directors</p>
                    <p className="text-slate-600">Executive Team & Certified Instructors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pelican Bay Sailing School Inc was founded on the vision of making sailing education, 
                maritime safety, and environmental stewardship accessible to the local community. 
                Established in Bonita Springs, Florida, a passionate team of maritime enthusiasts and educators 
                joined forces to build an inclusive organization committed to fostering confidence, teamwork, and coastal safety.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Located at 4971 Bonita Bay Blvd in Bonita Springs, FL 34134, Pelican Bay Sailing School serves 
                as a central hub for nautical education across Lee County and neighboring coastal regions. Our location 
                enables us to partner effectively with local marinas, community groups, and educational organizations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pelican Bay Sailing School Inc holds official 501(c)(3) tax-exempt status under the Internal 
                Revenue Code (EIN: 92-3488213), reinforcing our commitment to transparent, accountable nonprofit operations. 
                This status allows us to receive tax-deductible contributions and grants that support our mission 
                and expand educational access.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our programs continue to grow, encompassing youth sailing camps, adult seamanship classes, 
                maritime safety seminars, and environmental awareness initiatives designed to empower sailors of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every course and program at Pelican Bay Sailing School."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in the growth and development of Pelican Bay Sailing School."
          />
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="bg-primary-50 py-12 border-y border-primary-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Official Nonprofit Status</h3>
            <p className="text-slate-600 mb-4">
              Pelican Bay Sailing School Inc is a registered nonprofit corporation in the State of Florida and holds 
              federal tax-exempt status under Section 501(c)(3) of the Internal Revenue Code. 
              All contributions are tax-deductible to the fullest extent allowed by law.
            </p>
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-slate-500">Federal EIN:</span>
              <span className="font-mono font-bold text-slate-900">92-3488213</span>
              <span className="text-slate-300">|</span>
              <span className="text-sm text-slate-500">Location:</span>
              <span className="font-semibold text-slate-900">BONITA SPRINGS, FL 34134</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
