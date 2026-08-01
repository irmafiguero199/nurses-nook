import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const articles = [
  { id: 1, title: 'Nurses Nook Awards $45,000 in 2026 Scholarships', date: 'July 15, 2026', category: 'Scholarships', excerpt: 'Fifteen nurses from Oconto Falls and surrounding communities received educational grants ranging from $1,000 to $5,000 for continuing education and certification programs.' },
  { id: 2, title: 'New Wellness Circle Launches in Marinette County', date: 'June 28, 2026', category: 'Programs', excerpt: 'Expanding our mental health support services, Nurses Nook opened a new monthly Wellness Circle location in Marinette to serve nurses in northern communities.' },
  { id: 3, title: 'Annual Community Health Fair Reaches Record Attendance', date: 'May 12, 2026', category: 'Community', excerpt: 'Over 300 community members attended our spring health fair at the Oconto Falls Community Center, receiving free blood pressure screenings and diabetes education.' },
  { id: 4, title: 'Dr. Emily Watson Joins Board of Directors', date: 'April 3, 2026', category: 'Organization', excerpt: 'Clinical psychologist Dr. Emily Watson brings expertise in healthcare worker trauma to our governance team, strengthening our mental health program oversight.' },
  { id: 5, title: 'Nurses Nook Receives $25,000 Community Foundation Grant', date: 'March 10, 2026', category: 'Funding', excerpt: 'The Oconto Area Community Foundation awarded Nurses Nook a major grant to expand our NCLEX preparation program for nursing students at NWTC.' },
]

function News() {
  return (
    <>
      <Helmet>
        <title>News | Nurses Nook - Updates from Oconto Falls, WI</title>
        <meta name="description" content="Latest news and updates from Nurses Nook, a Wisconsin nonprofit (EIN 92-2233469) supporting nurses in Oconto Falls and beyond." />
        <link rel="canonical" href="https://nursesnook.org/news" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">The latest happenings, announcements, and stories from Nurses Nook.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Recent News" subtitle="Stay informed about our programs, partnerships, and community impact." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-nurse-100 flex items-center justify-center"><span className="text-5xl">📰</span></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"><Tag size={12} /> {article.category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{article.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700">Read More <ArrowRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have a story idea or press inquiry?</p>
            <a href="mailto:admin@nursesnook.org" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">Contact Our Communications Team</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default News