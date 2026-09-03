import { Helmet } from 'react-helmet-async'
import { Mail, Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const leadership = [
  { 
    name: 'Captain Marcus Vance', 
    role: 'Board President & Lead Instructor', 
    bio: 'Marcus brings over 25 years of maritime navigation and USCG-certified instruction experience. He co-founded Pelican Bay Sailing School Inc in 2022 to make maritime education accessible to southwest Florida communities.', 
    email: 'marcus@pelicanbaysailingschoolinc.sbs' 
  },
  { 
    name: 'Sarah Mitchell', 
    role: 'Executive Director', 
    bio: 'Sarah holds a Master’s in Nonprofit Management and is a USCG Certified Instructor. She oversees daily operations, community outreach, and maritime safety certification programs.', 
    email: 'sarah@pelicanbaysailingschoolinc.sbs' 
  },
  { 
    name: 'David Reynolds, CPA', 
    role: 'Treasurer', 
    bio: 'David manages the organizational finances and ensures compliance with 501(c)(3) public charity standards, bringing 18 years of corporate and nonprofit accounting experience.', 
    email: 'david@pelicanbaysailingschoolinc.sbs' 
  },
  { 
    name: 'Captain Elena Gomez', 
    role: 'Secretary & Safety Officer', 
    bio: 'Elena leads our water safety protocols and youth sailing scholarship initiative. She has been an active maritime educator in Lee County since 2018.', 
    email: 'elena@pelicanbaysailingschoolinc.sbs' 
  },
]

const boardMembers = [
  { 
    name: 'Robert Henderson', 
    role: 'Board Member', 
    bio: 'Retired USCG Commander with over 30 years of coastal security and seamanship training leadership in Florida.' 
  },
  { 
    name: 'Dr. Emily Watson', 
    role: 'Board Member', 
    bio: 'Marine biologist and environmental educator advocating for coastal ecosystem conservation along Bonita Beach.' 
  },
  { 
    name: 'Thomas Wright', 
    role: 'Board Member', 
    bio: 'Bonita Springs business owner and community advocate dedicated to expanding local youth recreational opportunities.' 
  },
]

const staff = [
  { 
    name: 'Jessica Brown', 
    role: 'Program Coordinator', 
    bio: 'Jessica coordinates class schedules, waterfront logistics, and student registrations for beginner and intermediate courses.' 
  },
  { 
    name: 'Michael Chang', 
    role: 'Fleet Manager & Certified Instructor', 
    bio: 'Michael maintains our sailing fleet to strict USCG safety standards and leads weekend practical navigation sessions.' 
  },
  { 
    name: 'Maria Garcia', 
    role: 'Community Outreach Specialist', 
    bio: 'Maria directs our youth scholarship programs and partners with local schools to promote maritime education.' 
  },
]

function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | Pelican Bay Sailing School Inc - Leadership & Board in Bonita Springs, FL</title>
        <meta name="description" content="Meet the leadership team, board of directors, and certified instructors of Pelican Bay Sailing School Inc, a Florida non-profit organization (EIN 92-3488213) in Bonita Springs, FL." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/team" />
      </Helmet>

      <section className="bg-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Dedicated maritime professionals and community leaders guiding Pelican Bay Sailing School Inc.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Leadership Team" subtitle="Our executive leadership brings decades of combined maritime instruction, safety expertise, and nonprofit management experience." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((person, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
                <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center text-2xl font-bold text-primary-800 mb-4">{person.name.charAt(0)}</div>
                <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{person.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
                  <Mail size={16} /> {person.email}
                </a>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <Award className="text-primary-600 mb-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{person.role}</p>
                <p className="text-slate-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>Board meetings are held quarterly at 4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134.</p>
            <p>Meeting minutes are available upon request by emailing admin@pelicanbaysailingschoolinc.sbs.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Staff & Instructors" subtitle="The certified instructors and dedicated staff delivering safe, high-quality seamanship training." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staff.map((person, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-xl font-bold text-primary-800 mx-auto mb-3">{person.name.charAt(0)}</div>
                <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{person.role}</p>
                <p className="text-slate-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12 border-y border-primary-100">
        <div className="container-custom text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Get Involved</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">We are always seeking passionate sailors, USCG-certified instructors, and community volunteers to support our youth programs and waterfront operations.</p>
          <a href="mailto:admin@pelicanbaysailingschoolinc.sbs" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">Contact Us About Volunteering</a>
        </div>
      </section>
    </>
  )
}

export default Team
