import { Helmet } from 'react-helmet-async'
import { Heart, BookOpen, Users, Calendar, Stethoscope, Baby, Brain, GraduationCap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const programCategories = [
  {
    icon: Brain,
    title: 'Mental Health & Wellness',
    description: 'Comprehensive support for the emotional and psychological wellbeing of nurses.',
    programs: [
      { name: 'Nurse Wellness Circle', detail: 'Monthly peer support groups facilitated by licensed counselors, addressing compassion fatigue, PTSD, and workplace stress.' },
      { name: 'Crisis Counseling Referrals', detail: '24/7 access to confidential mental health professionals specializing in healthcare worker trauma.' },
      { name: 'Mindfulness & Resilience Training', detail: '8-week courses teaching stress management techniques, meditation, and emotional regulation strategies.' },
      { name: 'Burnout Prevention Workshops', detail: 'Quarterly seminars on recognizing burnout symptoms, setting boundaries, and maintaining work-life balance.' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education & Professional Development',
    description: 'Affordable pathways for career advancement and continuing education.',
    programs: [
      { name: 'Nurses Nook Scholarship Fund', detail: 'Merit and need-based scholarships ranging from $500 to $5,000 for certifications, degrees, and specialized training.' },
      { name: 'NCLEX Preparation Support', detail: 'Free study materials, practice exams, and tutoring for nursing students preparing for licensure.' },
      { name: 'Continuing Education Workshops', detail: 'Monthly CEU-accredited workshops on topics including wound care, palliative care, and emergency response.' },
      { name: 'Leadership Development Series', detail: 'Training for nurses transitioning into management, charge nurse, or administrative roles.' },
    ],
  },
  {
    icon: Users,
    title: 'Community & Peer Support',
    description: 'Building strong professional networks and mentorship opportunities.',
    programs: [
      { name: 'Mentorship Matching Program', detail: 'Pairing experienced nurses (5+ years) with new graduates and nursing students for guidance and career advice.' },
      { name: 'Specialty Interest Groups', detail: 'Monthly meetings for nurses in pediatrics, ICU, emergency medicine, and other specialties to share knowledge.' },
      { name: 'New Graduate Support Circle', detail: 'A 12-month program helping recent graduates navigate their first year of professional nursing.' },
      { name: 'Retired Nurses Network', detail: 'Social and volunteer opportunities for retired nurses wishing to stay connected to the profession.' },
    ],
  },
  {
    icon: Stethoscope,
    title: 'Clinical Resources & Tools',
    description: 'Practical resources to enhance day-to-day nursing practice.',
    programs: [
      { name: 'Equipment Lending Library', detail: 'Free access to stethoscopes, blood pressure cuffs, and other essential tools for nurses in financial need.' },
      { name: 'Uniform & Supply Assistance', detail: 'Partnerships with medical supply companies to provide discounted scrubs, shoes, and nursing accessories.' },
      { name: 'Clinical Reference Database', detail: 'Subsidized access to medical journals, drug reference guides, and evidence-based practice databases.' },
      { name: 'Technology Training', detail: 'Workshops on electronic health records (EHR), telehealth platforms, and emerging healthcare technologies.' },
    ],
  },
]

const upcomingEvents = [
  { date: 'August 15, 2026', title: 'Summer Wellness Retreat', location: 'Oconto Falls Community Center', description: 'A day-long retreat focused on stress relief, yoga, and peer bonding for 50 nurses.' },
  { date: 'September 10, 2026', title: 'Fall CEU Workshop: Wound Care Advanced', location: 'Bellin Health Oconto', description: 'Earn 4 CEU credits while learning advanced wound care techniques from certified specialists.' },
  { date: 'October 5, 2026', title: 'New Graduate Mixer', location: 'Nurses Nook Office, Suite 3', description: 'Networking event for 2026 nursing graduates to meet mentors and explore job opportunities.' },
  { date: 'November 12, 2026', title: 'Annual Scholarship Awards Dinner', location: 'Oconto Falls Legion Hall', description: 'Celebrating scholarship recipients and honoring outstanding nurse mentors in the community.' },
]

function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs | Nurses Nook - Healthcare Support Programs in Wisconsin</title>
        <meta name="description" content="Explore Nurses Nook programs: mental health support, continuing education scholarships, mentorship, and clinical resources for nurses in Oconto Falls, Wisconsin. EIN 92-2233469." />
        <link rel="canonical" href="https://nursesnook.org/programs" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive support services designed specifically for nurses and healthcare professionals in Wisconsin.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Program Categories"
            subtitle="Nurses Nook offers four core program areas, each addressing critical needs in the nursing profession."
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
      <section className="section-padding bg-nurse-50">
        <div className="container-custom">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us at these upcoming programs and community gatherings."
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
                  <li className="flex items-center gap-2">✓ Registered Nurses (RN)</li>
                  <li className="flex items-center gap-2">✓ Licensed Practical Nurses (LPN)</li>
                  <li className="flex items-center gap-2">✓ Nursing Assistants (CNA)</li>
                  <li className="flex items-center gap-2">✓ Nursing Students</li>
                  <li className="flex items-center gap-2">✓ Retired Nurses</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary-200 mb-2">Service Area</h3>
                <ul className="space-y-2 text-primary-100">
                  <li className="flex items-center gap-2">✓ Oconto County</li>
                  <li className="flex items-center gap-2">✓ Marinette County</li>
                  <li className="flex items-center gap-2">✓ Brown County</li>
                  <li className="flex items-center gap-2">✓ Shawano County</li>
                  <li className="flex items-center gap-2">✓ All Wisconsin residents welcome</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-primary-200 mt-6 text-sm">
              Most programs are free or offered on a sliding scale. No one is turned away due to inability to pay.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs