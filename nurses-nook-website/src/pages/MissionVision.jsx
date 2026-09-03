import { Helmet } from 'react-helmet-async'
import { Target, Eye, Heart, Lightbulb, Compass, Anchor, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission & Vision | Pelican Bay Sailing School Inc - Bonita Springs, FL</title>
        <meta
          name="description"
          content="Pelican Bay Sailing School Inc mission and vision: Empowering youth and adults through water safety, navigation, and maritime education in Bonita Springs, Florida. EIN 92-3488213."
        />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/mission-vision" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Our purpose, our direction, and our commitment to Southwest Florida's maritime community.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Target className="text-primary-700" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-xl">
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium italic">
                  "To foster a passion for seamanship, water safety, and environmental stewardship in
                  Bonita Springs and surrounding Southwest Florida communities by providing accessible
                  sailing instruction, youth maritime programs, scholarship opportunities, and hands-on
                  boating experiences for all skill levels."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <Compass className="mx-auto text-primary-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Navigate</h3>
                <p className="text-slate-600">
                  Equip sailors with essential navigation skills, weather awareness, and practical boat
                  handling to safely command vessels on coastal waters.
                </p>
              </div>
              <div className="text-center p-6">
                <Anchor className="mx-auto text-primary-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Anchor</h3>
                <p className="text-slate-600">
                  Build strong community ties through peer networking, youth sailing camps, and inclusive
                  waterfront programs that keep maritime traditions alive.
                </p>
              </div>
              <div className="text-center p-6">
                <Lightbulb className="mx-auto text-primary-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Educate</h3>
                <p className="text-slate-600">
                  Offer certified maritime courses, safety workshops, and scholarship grants at low or no
                  cost to ensure equitable access to sailing education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Eye className="text-primary-700" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <div className="bg-white border-l-4 border-primary-500 p-8 rounded-r-xl shadow-sm">
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium italic">
                  "A Southwest Florida where maritime education and water safety are accessible to everyone—inspiring
                  a diverse community of confident mariners, dedicated coastal stewards, and lifelong sailing
                  enthusiasts across generations."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Anchor className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Regional Reach</h3>
                <p className="text-slate-600 leading-relaxed">
                  By 2030, we aim to expand our youth camps and adult sailing programs across Lee and Collier
                  counties, ensuring that coastal communities throughout Southwest Florida have direct access to
                  quality nautical training and boat safety resources.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Heart className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Inclusive Waterfront</h3>
                <p className="text-slate-600 leading-relaxed">
                  We envision a sailing culture where financial background is never a barrier. Our scholarship
                  fund will grow to award $150,000 annually in educational grants, covering junior sailing camps,
                  instructor certifications, and adaptive boating programs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Lightbulb className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Environmental Stewardship</h3>
                <p className="text-slate-600 leading-relaxed">
                  We strive to integrate marine conservation and ecosystem protection into every sailing curriculum,
                  empowering mariners to actively safeguard Florida’s estuaries, bays, and marine life for future
                  generations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Shield className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Safety & Certification Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pelican Bay Sailing School Inc will serve as a premier regional benchmark for boating safety,
                  offering accredited coursework, certified instructors, and comprehensive ocean literacy for
                  all skill levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Strategic Objectives"
            subtitle="Concrete goals that guide our daily operations and long-term planning."
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Expand Youth & Adult Programs</h3>
                  <p className="text-slate-600">
                    Increase the number of students served annually from 500 to 1,500 by 2027 through expanded
                    summer sailing camps, weekend adult navigation workshops, and local school partnerships in
                    Lee and Collier counties.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Strengthen Scholarship Funding</h3>
                  <p className="text-slate-600">
                    Diversify funding through community sponsorships, marine industry grants, and local donations,
                    ensuring that 85% of donated funds directly support youth scholarships and fleet maintenance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Enhance Fleet & Safety Infrastructure</h3>
                  <p className="text-slate-600">
                    Maintain a high-standard training fleet equipped with modern safety equipment, eco-friendly engines,
                    and accessible options to accommodate mariners of varying abilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Promote Water Safety Awareness</h3>
                  <p className="text-slate-600">
                    Host free quarterly public water safety seminars, hurricane prep courses for boat owners, and
                    boating certification events in partnership with local Florida maritime authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Transparency</h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">
            As a non-profit organization (EIN: 92-3488213), Pelican Bay Sailing School Inc is committed to full
            transparency in our operations, program funding, and community impact. We publish annual performance metrics,
            maintain open board meetings, and welcome community involvement in all our waterfront initiatives.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
            <Shield size={20} />
            <span className="font-semibold">Registered Non-Profit | EIN 92-3488213 | Bonita Springs, FL</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision
