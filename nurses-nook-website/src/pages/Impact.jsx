import { Helmet } from 'react-helmet-async'
import { TrendingUp, Heart, Users, BookOpen, Award, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const impactStats = [
  { icon: Users, value: '500+', label: 'Nurses Served', description: 'Direct support provided to registered nurses, LPNs, and CNAs across Wisconsin.' },
  { icon: BookOpen, value: '$125K', label: 'Scholarships Awarded', description: 'Educational grants distributed since 2022 for certifications and degrees.' },
  { icon: Heart, value: '2,400+', label: 'Wellness Hours', description: 'Mental health support, counseling referrals, and peer support sessions delivered.' },
  { icon: Award, value: '50+', label: 'Training Programs', description: 'CEU-accredited workshops and professional development events hosted.' },
]

const testimonials = [
  { name: 'Jennifer K.', role: 'RN, Oconto Falls Health Center', text: 'The Nurse Wellness Circle literally saved my career. After burning out during the pandemic, I found a community that understood what I was going through. Nurses Nook provided free counseling referrals that helped me get back on my feet.' },
  { name: 'Michael T.', role: 'LPN, Bellin Health Oconto', text: 'Thanks to the Nurses Nook Scholarship, I was able to complete my RN bridge program without taking on debt. The mentorship I received was just as valuable as the financial support.' },
  { name: 'Sarah L.', role: 'Nursing Student, NWTC', text: 'As a single mom in nursing school, the NCLEX prep resources and study groups at Nurses Nook made all the difference. I passed on my first attempt and now work at a local clinic.' },
]

const partners = [
  'Bellin Health Oconto Hospital',
  'Oconto Falls Health Center',
  'Aurora BayCare Medical Center',
  'Northeast Wisconsin Technical College',
  'University of Wisconsin-Green Bay',
  'Oconto County Health Department',
  'Wisconsin Nurses Association',
  'American Nurses Association - Wisconsin',
]

function Impact() {
  return (
    <>
      <Helmet>
        <title>Impact | Nurses Nook - Our Results in Oconto Falls, WI</title>
        <meta name="description" content="See the measurable impact of Nurses Nook. 500+ nurses served, $125K in scholarships, 2,400+ wellness hours delivered in Oconto Falls, Wisconsin. EIN 92-2233469." />
        <link rel="canonical" href="https://nursesnook.org/impact" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Measurable results that demonstrate our commitment to Wisconsin's nursing community.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Impact by the Numbers" subtitle="Since our founding in 2021, Nurses Nook has made a tangible difference in the lives of healthcare professionals." />
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
          <SectionHeader title="Stories of Impact" subtitle="Real nurses from Oconto Falls and surrounding communities share how Nurses Nook changed their lives." />
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
          <SectionHeader title="Community Partners" subtitle="Our work is made possible through strong partnerships with healthcare institutions and educational organizations across Northeast Wisconsin." />
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
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">In 2025, Nurses Nook expanded its reach to serve 500+ nurses, awarded $45,000 in new scholarships, and launched our digital wellness platform. Download our full annual report for detailed financials, program outcomes, and strategic planning for 2026-2028.</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors">Download 2025 Annual Report (PDF)</button>
          <p className="text-primary-200 text-sm mt-4">Published January 2026 | Nurses Nook | EIN 92-2233469 | Oconto Falls, WI</p>
        </div>
      </section>
    </>
  )
}

export default Impact