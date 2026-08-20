import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, BookOpen, Users, Calendar, Award, MapPin, Shield } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'

const features = [
  {
    icon: Heart,
    title: 'Wellness Support',
    description: 'Mental health resources, counseling referrals, and wellness programs designed specifically for nurses facing workplace stress and burnout.',
  },
  {
    icon: BookOpen,
    title: 'Continuing Education',
    description: 'Free and subsidized training courses, certification prep, and professional development workshops for healthcare professionals.',
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Peer support groups, mentorship programs, and networking events that connect nurses across Wisconsin healthcare facilities.',
  },
  {
    icon: Calendar,
    title: 'Resource Hub',
    description: 'Access to childcare assistance referrals, financial planning resources, and flexible scheduling toolkits for working nurses.',
  },
]

const programs = [
  {
    title: 'Nurse Wellness Circle',
    description: 'Monthly support meetings and mental health first aid training for registered nurses and nursing assistants.',
    image: '🏥',
  },
  {
    title: 'Scholarship Fund',
    description: 'Financial assistance for continuing education, NCLEX preparation, and advanced nursing certifications.',
    image: '🎓',
  },
  {
    title: 'Community Health Fairs',
    description: 'Free health screenings and educational workshops organized quarterly in Oconto Falls and neighboring communities.',
    image: '🩺',
  },
]

function Home() {
  return (
    <>
      <Helmet>
        <title>Nurses Nook | Supporting Healthcare Professionals in Wisconsin</title>
        <meta name="description" content="Nurses Nook is a 501(c)(3) nonprofit organization (EIN 92-2233469) based in Oconto Falls, Wisconsin, providing resources, education, and support for nurses and healthcare professionals." />
        <link rel="canonical" href="https://nursesnook.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Statement Banner */}
      <section className="bg-nurse-50 py-12 border-y border-nurse-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Shield className="text-nurse-600 shrink-0" size={40} />
              <div>
                <p className="text-sm font-semibold text-nurse-700 uppercase tracking-wide">Registered Nonprofit Organization</p>
                <p className="text-slate-700">EIN: 92-2233469 | Oconto Falls, WI 54154-0026</p>
              </div>
            </div>
            <Link to="/registration-information" className="inline-flex items-center gap-2 text-nurse-700 font-semibold hover:text-nurse-800">
              View Registration Details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="How We Support Nurses"
            subtitle="Nurses Nook provides comprehensive support services tailored to the unique challenges faced by healthcare professionals in rural Wisconsin communities."
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
                Oconto Falls, Wisconsin
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Dedicated to Wisconsin's Nursing Community
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in 2021, Nurses Nook has grown from a small volunteer initiative into a 
                recognized nonprofit organization serving nurses throughout Oconto County and beyond. 
                Our headquarters at 123 Main Street, Suite 3 in Oconto Falls serves as a central 
                hub for resources, training, and community gathering.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that supporting nurses directly translates to better patient care and 
                stronger healthcare systems. Through partnerships with Oconto Falls Health Center, 
                Bellin Health Oconto Hospital, and local educational institutions, we create 
                sustainable support networks for healthcare professionals at every career stage.
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
                  <div className="text-4xl mb-2">🏥</div>
                  <div className="text-2xl font-bold text-primary-800">3</div>
                  <div className="text-sm text-slate-600">Partner Hospitals</div>
                </div>
                <div className="text-center p-4 bg-nurse-50 rounded-xl">
                  <div className="text-4xl mb-2">👩‍⚕️</div>
                  <div className="text-2xl font-bold text-nurse-800">500+</div>
                  <div className="text-sm text-slate-600">Nurses Served</div>
                </div>
                <div className="text-center p-4 bg-warm-50 rounded-xl">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-2xl font-bold text-warm-800">50+</div>
                  <div className="text-sm text-slate-600">Training Sessions</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-xl">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-2xl font-bold text-secondary-800">$125K</div>
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
            subtitle="Discover how Nurses Nook is making a difference through targeted initiatives designed for healthcare professionals."
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
            Since our founding, Nurses Nook has directly impacted over 500 nurses and healthcare 
            workers in Oconto Falls and surrounding Wisconsin communities. Our scholarship program 
            has awarded $125,000 in educational grants, while our wellness initiatives have provided 
            over 2,000 hours of mental health support and counseling referrals.
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
