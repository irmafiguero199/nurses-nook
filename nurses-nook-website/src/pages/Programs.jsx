import { Helmet } from 'react-helmet-async'
import { Anchor, BookOpen, Users, Calendar, Compass, LifeBuoy, Shield, GraduationCap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const programCategories = [
  {
    icon: Compass,
    title: 'Youth Sailing & Waterfront Safety',
    description: 'Empowering young sailors with boat handling skills, water confidence, and safety fundamentals.',
    programs: [
      { name: 'Junior Sailors Camp', detail: 'Seasonal day camps teaching foundational sailing techniques, seamanship, and wind awareness for youth ages 8–17.' },
      { name: 'Boating Safety & Life Jacket Clinics', detail: 'Hands-on workshops covering life jacket fitting, cold-water safety, emergency response, and basic swim survival.' },
      { name: 'Youth Regatta Prep', detail: 'Intermediate sailing lessons covering race rules, tactful navigation, and team sailing dynamics.' },
      { name: 'High School Nautical Club', detail: 'Partnering with Southwest Florida schools to provide structured sailing instruction and STEM marine education.' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Adult Sailing & Professional Development',
    description: 'Structured, accessible instruction for adults mastering navigation and maritime safety.',
    programs: [
      { name: 'Pelican Bay Scholarship Fund', detail: 'Need-based scholarships ranging from $500 to $5,000 for accredited sailing instruction and safety certifications.' },
      { name: 'Adult Coastal Navigation', detail: 'Comprehensive coursework on nautical charts, GPS navigation, tide calculations, and safe harbor planning.' },
      { name: 'Instructor Certification Prep', detail: 'Preparing experienced mariners to become certified sailing instructors and water safety leaders.' },
      { name: 'Captain’s Prep Workshops', detail: 'Mentorship and study groups for sailors pursuing US Coast Guard licensing and advanced credentials.' },
    ],
  },
  {
    icon: Users,
    title: 'Community & Peer Support',
    description: 'Fostering a welcoming community of mariners, mentors, and waterfront volunteers.',
    programs: [
      { name: 'Mariner Mentorship Program', detail: 'Pairing veteran captains and experienced sailors with beginners for hands-on guidance on local waters.' },
      { name: 'Women on the Water Circle', detail: 'Monthly supportive sailing sessions designed to empower female sailors and build confidence at the helm.' },
      { name: 'Adaptive Boating Network', detail: 'Specialized equipment and assisted sailing sessions ensuring water accessibility for sailors with physical challenges.' },
      { name: 'Retired Mariners Volunteer Corps', detail: 'Opportunities for experienced boaters to teach, mentor, and assist with fleet maintenance.' },
    ],
  },
  {
    icon: LifeBuoy,
    title: 'Maritime Resources & Safety Fleet',
    description: 'Essential equipment and digital databases supporting safe, responsible seamanship.',
    programs: [
      { name: 'Safety Gear Lending Library', detail: 'Free access to VHF radios, adult & youth PFDs, and navigation charts for students and low-income boaters.' },
      { name: 'Vessel Maintenance Workshops', detail: 'Hands-on training on rigging inspection, hull care, outboard basic maintenance, and marine eco-safety.' },
      { name: 'Florida Waterways Reference Library', detail: 'Access to nautical charts, local tide charts, hurricane preparedness guides, and Florida boating laws.' },
      { name: 'Marine Weather & Tech Seminars', detail: 'Workshops covering weather radar interpretation, GPS chartplotters, and modern marine electronics.' },
    ],
  },
]

const upcomingEvents = [
  { date: 'August 15, 2026', title: 'Summer Youth Regatta & Family Day', location: 'Bonita Springs Waterfront Center', description: 'A community regatta showcasing youth camp progress, featuring water safety demos and family sail rides.' },
  { date: 'September 10, 2026', title: 'Fall Navigation & Weather Workshop', location: 'Bonita Bay Community Room', description: 'Master local tidal currents, NOAA weather updates, and safe navigation through Lee and Collier coastal waterways.' },
  { date: 'October 5, 2026', title: 'New Sailors & Mentors Mixer', location: 'Pelican Bay Sailing School Dock', description: 'Connect with experienced local boat captains, find sailing partners, and learn about volunteer opportunities.' },
  { date: 'November 12, 2026', title: 'Annual Maritime Scholarship Dinner', location: 'Bonita Springs Event Hall', description: 'Celebrating youth scholarship recipients and honoring outstanding sailing mentors across Southwest Florida.' },
]

function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs | Pelican Bay Sailing School Inc - Bonita Springs, FL</title>
        <meta name="description" content="Explore Pelican Bay Sailing School Inc programs: youth sailing camps, adult navigation, scholarships, and water safety workshops in Bonita Springs, Florida. EIN 92-3488213." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/programs" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive maritime education, safety instruction, and youth sailing opportunities across Southwest Florida.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Program Categories"
            subtitle="Pelican Bay Sailing School Inc offers four core program areas designed to empower mariners of all ages and experience levels."
          />

          <div className="space-y-16">
            {programCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <category.icon className="text-primary-700" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.programs.map((program, pIndex) => (
                    <div key={pIndex} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{program.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{program.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us at our upcoming sailing workshops, youth camps, and waterfront gatherings."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                  <Calendar className="text-primary-700 mb-1" size={20} />
                  <span className="text-xs font-bold text-primary-700">{event.date.split(' ')[0]}</span>
                </div>
                <div>
                  <p className="text-sm text-primary-600 font-medium mb-1">{event.date}</p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{event.location}</p>
                  <p className="text-slate-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-800 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Who Can Participate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary-200 mb-2">Eligible Participants</h3>
                <ul className="space-y-2 text-primary-100">
                  <li className="flex items-center gap-2">✓ Youth Sailors (Ages 8–17)</li>
                  <li className="flex items-center gap-2">✓ Beginner Adult Mariners</li>
                  <li className="flex items-center gap-2">✓ Experienced Sailors & Captains</li>
                  <li className="flex items-center gap-2">✓ Local Students & Schools</li>
                  <li className="flex items-center gap-2">✓ Community Volunteers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary-200 mb-2">Service Area</h3>
                <ul className="space-y-2 text-primary-100">
                  <li className="flex items-center gap-2">✓ Bonita Springs</li>
                  <li className="flex items-center gap-2">✓ Lee County</li>
                  <li className="flex items-center gap-2">✓ Collier County</li>
                  <li className="flex items-center gap-2">✓ Naples & Estero Areas</li>
                  <li className="flex items-center gap-2">✓ All Florida Residents Welcome</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-primary-200 mt-6 text-sm">
              Scholarship grants and tuition assistance are available for eligible youth and families. No one is turned away due to financial constraints.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
