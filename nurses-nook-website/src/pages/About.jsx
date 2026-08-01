import { Helmet } from 'react-helmet-async'
import { MapPin, Calendar, Award, Users, Heart, Target } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const milestones = [
  { year: '2021', title: 'Organization Founded', description: 'Nurses Nook was established in Oconto Falls, Wisconsin by a group of dedicated healthcare professionals.' },
  { year: '2022', title: '501(c)(3) Status Granted', description: 'Received official federal tax-exempt status from the IRS. EIN: 92-2233469.' },
  { year: '2022', title: 'First Scholarship Awarded', description: 'Launched the Nurses Nook Scholarship Fund, awarding $15,000 in educational grants.' },
  { year: '2023', title: 'Wellness Program Launch', description: 'Introduced the Nurse Wellness Circle, providing mental health support to over 200 nurses.' },
  { year: '2024', title: 'Community Expansion', description: 'Extended services to cover Oconto, Marinette, and Brown counties, serving 500+ healthcare workers.' },
  { year: '2025', title: 'Digital Resource Platform', description: 'Launched online continuing education platform accessible to nurses across Wisconsin.' },
]

const values = [
  { icon: Heart, title: 'Compassion', description: 'We lead with empathy, recognizing the emotional and physical demands placed on healthcare professionals.' },
  { icon: Target, title: 'Excellence', description: 'We maintain the highest standards in our programs, ensuring nurses receive quality resources and education.' },
  { icon: Users, title: 'Community', description: 'We believe in the power of connection and peer support to strengthen the nursing profession.' },
  { icon: Award, title: 'Integrity', description: 'We operate with transparency, accountability, and ethical responsibility in all our activities.' },
]

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Nurses Nook - Oconto Falls, Wisconsin Nonprofit</title>
        <meta name="description" content="Learn about Nurses Nook, a 501(c)(3) nonprofit organization (EIN 92-2233469) based in Oconto Falls, Wisconsin, dedicated to supporting nurses and healthcare professionals." />
        <link rel="canonical" href="https://nursesnook.org/about" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Nurses Nook</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A registered 501(c)(3) nonprofit organization serving Wisconsin's nursing community since 2021.
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
                    <p className="text-slate-600">123 Main Street, Suite 3</p>
                    <p className="text-slate-600">Oconto Falls, WI 54154-0026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Year Founded</p>
                    <p className="text-slate-600">2021</p>
                    <p className="text-slate-600">Wisconsin Nonprofit Corporation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Federal EIN (Tax ID)</p>
                    <p className="text-slate-600 font-mono">92-2233469</p>
                    <p className="text-slate-600">501(c)(3) Tax-Exempt Status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-primary-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Leadership</p>
                    <p className="text-slate-600">Board of Directors (7 members)</p>
                    <p className="text-slate-600">Executive Director: Sarah Mitchell, RN</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Nurses Nook was born from a simple observation: the nurses who care for our communities 
                often lack adequate support for their own wellbeing. In 2021, a group of registered nurses 
                working at Oconto Falls Health Center came together to address this gap. What started as 
                informal peer support meetings quickly evolved into a structured nonprofit organization 
                dedicated to the holistic support of healthcare professionals.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Located at 123 Main Street, Suite 3 in the heart of Oconto Falls, Wisconsin, Nurses Nook 
                serves as a central resource hub for nurses across Oconto County and neighboring regions. 
                Our strategic location allows us to partner effectively with local healthcare facilities 
                including Bellin Health Oconto Hospital, Oconto Falls Health Center, and Aurora BayCare 
                Medical Center.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                In 2022, Nurses Nook received its official 501(c)(3) tax-exempt status from the Internal 
                Revenue Service (EIN: 92-2233469), solidifying our commitment to transparent, accountable 
                nonprofit operations. This federal recognition enables us to accept tax-deductible donations 
                and apply for grants that expand our capacity to serve Wisconsin's nursing community.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our programs have grown to encompass mental health support, continuing education scholarships, 
                professional development workshops, and community health initiatives. We work closely with 
                the Wisconsin Department of Safety and Professional Services, the Wisconsin Nurses Association, 
                and local educational institutions to ensure our offerings meet the highest standards and 
                address real needs in the field.
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
            subtitle="The principles that guide every decision and program at Nurses Nook."
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
            subtitle="Key milestones in the growth and development of Nurses Nook."
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
      <section className="bg-nurse-50 py-12 border-y border-nurse-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Official Nonprofit Status</h3>
            <p className="text-slate-600 mb-4">
              Nurses Nook is a registered nonprofit corporation in the State of Wisconsin and holds 
              federal tax-exempt status under Section 501(c)(3) of the Internal Revenue Code. 
              All donations are tax-deductible to the fullest extent allowed by law.
            </p>
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-slate-500">Federal EIN:</span>
              <span className="font-mono font-bold text-slate-900">92-2233469</span>
              <span className="text-slate-300">|</span>
              <span className="text-sm text-slate-500">Wisconsin Entity ID:</span>
              <span className="font-mono font-bold text-slate-900">N030943</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About