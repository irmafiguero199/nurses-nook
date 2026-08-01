import { Helmet } from 'react-helmet-async'
import { Mail, Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const leadership = [
  { name: 'Sarah Mitchell, RN, MSN', role: 'Executive Director', bio: 'Sarah has 15 years of critical care nursing experience and holds a Master of Science in Nursing Leadership. She founded Nurses Nook in 2021 after witnessing widespread burnout among her colleagues.', email: 'sarah@nursesnook.org' },
  { name: 'Dr. James Patterson', role: 'Board President', bio: 'Dr. Patterson is a family physician at Oconto Falls Health Center and a passionate advocate for nurse wellbeing. He has served on our board since 2022.', email: 'james@nursesnook.org' },
  { name: 'Lisa Chen, LPN, BBA', role: 'Treasurer', bio: 'Lisa brings 10 years of clinical experience and a business background to manage our nonprofit finances with transparency and accountability.', email: 'lisa@nursesnook.org' },
  { name: 'Amanda Rodriguez, RN', role: 'Secretary', bio: 'Amanda works in pediatric home health and leads our mentorship matching program. She joined the board in 2023.', email: 'amanda@nursesnook.org' },
]

const boardMembers = [
  { name: 'Robert Johnson', role: 'Board Member', bio: 'Retired hospital administrator with 30 years of healthcare management experience in Wisconsin.' },
  { name: 'Dr. Emily Watson', role: 'Board Member', bio: 'Clinical psychologist specializing in healthcare worker trauma and burnout prevention.' },
  { name: 'Thomas Wright', role: 'Board Member', bio: 'Community leader and small business owner in Oconto Falls, representing local stakeholder interests.' },
]

const staff = [
  { name: 'Jessica Brown', role: 'Program Coordinator', bio: 'Jessica manages our wellness circles and event planning. She is a certified health education specialist.' },
  { name: 'David Kim', role: 'Development Manager', bio: 'David oversees fundraising, grant writing, and donor relations for Nurses Nook.' },
  { name: 'Maria Garcia', role: 'Education Specialist', bio: 'Maria designs our continuing education curriculum and maintains CEU accreditation.' },
]

function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | Nurses Nook - Leadership & Board in Oconto Falls, WI</title>
        <meta name="description" content="Meet the leadership, board of directors, and staff of Nurses Nook, a Wisconsin nonprofit (EIN 92-2233469) supporting nurses in Oconto Falls." />
        <link rel="canonical" href="https://nursesnook.org/team" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Dedicated professionals and community leaders guiding Nurses Nook's mission.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Leadership Team" subtitle="Our executive leadership brings decades of combined healthcare and nonprofit management experience." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((person, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
                <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center text-2xl font-bold text-primary-800 mb-4">{person.name.charAt(0)}</div>
                <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{person.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"><Mail size={16} /> {person.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="Board of Directors" subtitle="Our volunteer board provides governance, strategic oversight, and fiduciary responsibility." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boardMembers.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <Award className="text-warm-500 mb-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{person.role}</p>
                <p className="text-slate-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>Board meetings are held quarterly at the Nurses Nook office, 123 Main Street, Suite 3, Oconto Falls, WI.</p>
            <p>Meeting minutes are available upon request by emailing admin@nursesnook.org.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Staff" subtitle="The dedicated staff making our programs run smoothly every day." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staff.map((person, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-nurse-200 rounded-full flex items-center justify-center text-xl font-bold text-nurse-800 mx-auto mb-3">{person.name.charAt(0)}</div>
                <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{person.role}</p>
                <p className="text-slate-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nurse-50 py-12 border-y border-nurse-100">
        <div className="container-custom text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Join Our Team</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">We are always looking for passionate nurses, healthcare professionals, and community members to volunteer their time and expertise.</p>
          <a href="mailto:admin@nursesnook.org" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">Contact Us About Volunteering</a>
        </div>
      </section>
    </>
  )
}

export default Team