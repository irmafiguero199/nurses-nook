import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, BookOpen, Users, Calendar, Award, MapPin, Shield } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'

const features = [
  {
    icon: Heart,
    title: 'Maritime Safety Training',
    description: 'Comprehensive water safety, emergency protocols, and seamanship courses designed for sailors facing various coastal weather conditions.',
  },
  {
    icon: BookOpen,
    title: 'Sailing Education',
    description: 'Free and subsidized training courses, captain certification prep, and professional development workshops for maritime enthusiasts.',
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Peer support groups, youth mentorship programs, and regatta events that connect sailors across Florida coastal communities.',
  },
  {
    icon: Calendar,
    title: 'Resource Hub',
    description: 'Access to boating equipment referrals, environmental protection resources, and flexible scheduling toolkits for active sailors.',
  },
]

const programs = [
  {
    title: 'Youth Sailing Academy',
    description: 'Weekly hands-on instruction and safety training for young sailors and aspiring boat captains.',
    image: '⛵',
  },
  {
    title: 'Maritime Scholarship Fund',
    description: 'Financial assistance for advanced sailing certifications, instructor training, and youth nautical camps.',
    image: '🎓',
  },
  {
    title: 'Community Water Safety Fairs',
    description: 'Free life-jacket inspections and maritime safety workshops organized quarterly in Bonita Springs and neighboring coastal areas.',
    image: '🛟',
  },
]

function Home() {
  return (
    <>
      <Helmet>
        <title>Pelican Bay Sailing School Inc | Supporting Sailing Education in Florida</title>
        <meta name="description" content="Pelican Bay Sailing School Inc is a 501(c)(3) nonprofit organization (EIN 92-3488213) based in Bonita Springs, Florida, providing resources, education, and safety training for sailors." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Statement Banner */}
      <section className="bg-sky-50 py-12 border-y border-sky-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Shield className="text-primary-600 shrink-0" size={40} />
              <div>
                <p className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Registered Nonprofit Organization</p>
                <p className="text-slate-700">EIN: 92-3488213 | BONITA SPRINGS, FL 34134</p>
              </div>
            </div>
            <Link to="/registration-information" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800">
              View Registration Details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="How We Support Sailors"
            subtitle="Pelican Bay Sailing School Inc provides comprehensive maritime training tailored to the unique goals of enthusiasts in Florida."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-50 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="text-primary-700" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                <MapPin size={14} />
                Bonita Springs, Florida
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Dedicated to Florida's Maritime Community
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pelican Bay Sailing School Inc has grown into a recognized non-profit 501(c)(3) organization serving sailors throughout Lee and Collier counties. Our facility at 4971 BONITA BAY BLVD in Bonita Springs serves as a central hub for hands-on sailing lessons, environmental education, and community gathering.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that promoting seamanship and water safety directly fosters a safer and more environmentally conscious coastal community. Through local partnerships and dedicated volunteers, we create accessible sailing programs for enthusiasts of all backgrounds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
                <Link to="/impact" className="btn-secondary">
                  See Our Impact
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-4xl mb-2">⛵</div>
                  <div className="text-2xl font-bold text-primary-800">5+</div>
                  <div className="text-sm text-slate-600">Partner Marinas</div>
                </div>
                <div className="text-center p-4 bg-sky-50 rounded-xl">
                  <div className="text-4xl mb-2">🧑‍✈️</div>
                  <div className="text-2xl font-bold text-sky-800">500+</div>
                  <div className="text-sm text-slate-600">Sailors Trained</div>
                </div>
                <div className="text-center p-4 bg-warm-50 rounded-xl">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-2xl font-bold text-warm-800">50+</div>
                  <div className="text-sm text-slate-600">Training Sessions</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-2xl font-bold text-emerald-800">$125K</div>
                  <div className="text-sm text-slate-600">Scholarships Awarded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Key Programs"
            subtitle="Discover how Pelican Bay Sailing School Inc is making a difference through targeted initiatives designed for nautical enthusiasts."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                  {program.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{program.description}</p>
                  <Link to="/programs" className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center">
          <Award className="mx-auto text-warm-400 mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Measurable Difference</h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Since our founding, Pelican Bay Sailing School Inc has directly impacted over 500 sailors and community members in Bonita Springs and surrounding Florida coastal areas. Our scholarship program has awarded $125,000 in education grants, while our water safety initiatives have delivered hundreds of hours of hands-on training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/impact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
              View Our Impact Report
            </Link>
            <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-4 bg-warm-500 text-white font-semibold rounded-lg hover:bg-warm-600 transition-colors">
              <Heart size={20} />
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
