import { Helmet } from 'react-helmet-async'
import { TrendingUp, Heart, Users, BookOpen, Award, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const impactStats = [
  { icon: Users, value: '500+', label: 'Sailors Trained', description: 'Direct nautical instruction provided to youth, adults, and local community members.' },
  { icon: BookOpen, value: '$125K', label: 'Scholarships Awarded', description: 'Educational grants distributed since 2022 for certifications and youth sailing camps.' },
  { icon: Heart, value: '2,400+', label: 'Training Hours', description: 'Water safety, navigation, and maritime skills support delivered across Florida.' },
  { icon: Award, value: '50+', label: 'Training Programs', description: 'Recognized sailing courses and community safety workshops hosted.' },
]

const testimonials = [
  { name: 'Jennifer K.', role: 'Student, Bonita Springs Sailing Academy', text: 'The Youth Sailing Program was a game changer for my family. My daughter gained so much confidence on the water and learned essential safety skills. Pelican Bay Sailing School Inc provides an incredible community atmosphere.' },
  { name: 'Michael T.', role: 'Sailing Volunteer, Bonita Bay Marina', text: 'Thanks to the Pelican Bay Sailing School Scholarship, I was able to complete my advanced instructor certification without financial burden. Mentoring new sailors here has been immensely rewarding.' },
  { name: 'Sarah L.', role: 'Adult Beginner Sailor', text: 'As someone new to navigation, the introductory courses and hands-on boat training made all the difference. I passed my certification on the first attempt and now sail with confidence along the Florida coast.' },
]

const partners = [
  'Bonita Bay Community Marina',
  'Bonita Springs Waterfront Association',
  'Lee County Parks & Recreation',
  'Southwest Florida Maritime Academy',
  'Florida Gulf Coast Marine Studies',
  'Collier County Environmental Department',
  'Florida Sailing & Boating Association',
  'American Sailing Association - Florida Chapter',
]

function Impact() {
  return (
    <>
      <Helmet>
        <title>Impact | Pelican Bay Sailing School Inc - Our Results in Bonita Springs, FL</title>
        <meta name="description" content="See the measurable impact of Pelican Bay Sailing School Inc. 500+ sailors trained, $125K in scholarships, 2,400+ training hours delivered in Bonita Springs, Florida. EIN 92-3488213." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/impact" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Measurable results that demonstrate our commitment to Florida's sailing community.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Impact by the Numbers" subtitle="Pelican Bay Sailing School Inc has made a tangible difference in the lives of nautical enthusiasts." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-xl">
                <stat.icon className="mx-auto text-primary-600 mb-4" size={36} />
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                <p className="text-sm text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="Stories of Impact" subtitle="Real sailors from Bonita Springs and surrounding communities share how Pelican Bay Sailing School Inc changed their lives." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl text-primary-300 mb-4">&ldquo;</div>
                <p className="text-slate-700 leading-relaxed mb-6">{t.text}</p>
                <div><p className="font-semibold text-slate-900">{t.name}</p><p className="text-sm text-primary-600">{t.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Community Partners" subtitle="Our work is made possible through strong partnerships with maritime institutions and educational organizations across Southwest Florida." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <MapPin className="text-primary-500 shrink-0" size={18} />
                <span className="text-slate-700 font-medium text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <TrendingUp className="mx-auto text-warm-400 mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-6">2025 Annual Impact Report</h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">In 2025, Pelican Bay Sailing School Inc expanded its reach to serve 500+ sailors, awarded $45,000 in new scholarships, and launched our maritime training platform. Download our full annual report for detailed financials, program outcomes, and strategic planning for 2026-2028.</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors">Download 2025 Annual Report (PDF)</button>
          <p className="text-primary-200 text-sm mt-4">Published January 2026 | Pelican Bay Sailing School Inc | EIN 92-3488213 | Bonita Springs, FL</p>
        </div>
      </section>
    </>
  )
}

export default Impact
