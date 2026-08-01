import { Helmet } from 'react-helmet-async'
import { Target, Eye, Heart, Lightbulb, Globe, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission & Vision | Nurses Nook - Oconto Falls, WI</title>
        <meta name="description" content="Nurses Nook mission and vision: Supporting nurses and healthcare professionals through resources, education, and community programs in Oconto Falls, Wisconsin. EIN 92-2233469." />
        <link rel="canonical" href="https://nursesnook.org/mission-vision" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Our purpose, our direction, and our commitment to Wisconsin's healthcare professionals.
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
                  "To empower, support, and advocate for nurses and healthcare professionals in 
                  Oconto Falls and surrounding Wisconsin communities by providing accessible 
                  resources, continuing education, mental health support, and professional 
                  development opportunities that enhance patient care and strengthen the 
                  healthcare workforce."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <Heart className="mx-auto text-primary-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Empower</h3>
                <p className="text-slate-600">
                  Equip nurses with the tools, knowledge, and resources they need to excel 
                  in their profession and advance their careers.
                </p>
              </div>
              <div className="text-center p-6">
                <Shield className="mx-auto text-primary-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Support</h3>
                <p className="text-slate-600">
                  Provide mental health resources, peer networks, and wellness programs 
                  that address the unique challenges of nursing.
                </p>
              </div>
              <div className="text-center p-6">
                <Lightbulb className="mx-auto text-primary-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Educate</h3>
                <p className="text-slate-600">
                  Offer continuing education, certification support, and professional 
                  development workshops at low or no cost.
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-nurse-100 rounded-full mb-6">
                <Eye className="text-nurse-700" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <div className="bg-white border-l-4 border-nurse-500 p-8 rounded-r-xl shadow-sm">
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium italic">
                  "A Wisconsin where every nurse and healthcare professional has access to the 
                  support, education, and community they need to thrive—resulting in healthier 
                  communities, reduced burnout, and a sustainable healthcare workforce for 
                  generations to come."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Globe className="text-nurse-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Statewide Reach</h3>
                <p className="text-slate-600 leading-relaxed">
                  By 2030, we aim to extend our programs and services to all 72 counties in 
                  Wisconsin, ensuring that rural and underserved communities have equal access 
                  to nursing support resources. Our digital platform will serve as a centralized 
                  hub for continuing education and peer connection.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Heart className="text-nurse-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Zero Burnout</h3>
                <p className="text-slate-600 leading-relaxed">
                  We envision a healthcare system where nurse burnout is proactively addressed 
                  through comprehensive wellness programs, manageable workloads, and strong 
                  community support networks. Our goal is to reduce nurse turnover in partner 
                  facilities by 40% within five years.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Lightbulb className="text-nurse-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Lifelong Learning</h3>
                <p className="text-slate-600 leading-relaxed">
                  We strive to make continuing education accessible and affordable for every 
                  nurse in Wisconsin. Our scholarship fund will grow to award $500,000 annually 
                  in educational grants by 2028, covering certifications, advanced degrees, and 
                  specialized training.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Shield className="text-nurse-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Advocacy & Policy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nurses Nook will become a recognized voice in Wisconsin healthcare policy, 
                  advocating for safe staffing ratios, fair compensation, and workplace protections 
                  that honor the critical role nurses play in our communities.
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
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Expand Direct Services</h3>
                  <p className="text-slate-600">
                    Increase the number of nurses served annually from 500 to 2,000 by 2027 through 
                    expanded wellness programs, additional scholarship funding, and new community 
                    partnerships across Northeast Wisconsin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Strengthen Financial Sustainability</h3>
                  <p className="text-slate-600">
                    Diversify funding sources to include corporate partnerships, foundation grants, 
                    and individual donations, ensuring that 80% of every dollar directly supports 
                    program delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Build Digital Infrastructure</h3>
                  <p className="text-slate-600">
                    Develop a comprehensive online platform offering virtual continuing education, 
                    telehealth counseling referrals, and a statewide nurse networking community 
                    accessible 24/7.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Measure & Report Impact</h3>
                  <p className="text-slate-600">
                    Implement robust data collection and reporting systems to demonstrate program 
                    effectiveness, share outcomes with stakeholders, and continuously improve 
                    service delivery.
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
            As a registered 501(c)(3) nonprofit organization (EIN: 92-2233469), Nurses Nook is 
            committed to full transparency in our operations, finances, and governance. We publish 
            annual reports, maintain open board meetings, and welcome community oversight of our 
            activities. Our physical office at 123 Main Street, Suite 3, Oconto Falls, WI 54154-0026 
            is open to visitors during business hours.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
            <Shield size={20} />
            <span className="font-semibold">Registered Wisconsin Nonprofit | EIN 92-2233469</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision