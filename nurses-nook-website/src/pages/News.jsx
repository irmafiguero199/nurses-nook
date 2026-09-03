import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const articles = [
  { id: 1, title: 'Pelican Bay Sailing School Awards $45,000 in 2026 Sailing Scholarships', date: 'July 15, 2026', category: 'Scholarships', excerpt: 'Fifteen student sailors and local youth from Bonita Springs received educational grants ranging from $1,000 to $5,000 for safety certifications and youth sailing camps.' },
  { id: 2, title: 'New Youth Sailing Academy Launches at Bonita Bay', date: 'June 28, 2026', category: 'Programs', excerpt: 'Expanding our waterfront instruction, Pelican Bay Sailing School Inc opened a new youth sailing clinic location in Lee County to serve aspiring young mariners.' },
  { id: 3, title: 'Annual Waterfront Safety Regatta Reaches Record Attendance', date: 'May 12, 2026', category: 'Community', excerpt: 'Over 300 community members and boating enthusiasts attended our spring regatta at Bonita Springs Marina, receiving free water safety training and vessel safety checks.' },
  { id: 4, title: 'Captain Marcus Vance Joins Board of Directors', date: 'April 3, 2026', category: 'Organization', excerpt: 'USCG Licensed Master Captain Marcus Vance brings extensive expertise in ocean navigation and maritime safety to our governance team, strengthening our program oversight.' },
  { id: 5, title: 'Pelican Bay Sailing School Receives $25,000 Community Foundation Grant', date: 'March 10, 2026', category: 'Funding', excerpt: 'The Southwest Florida Community Foundation awarded Pelican Bay Sailing School Inc a major grant to expand our youth sailing fleet and navigation safety equipment.' },
]

function News() {
  return (
    <>
      <Helmet>
        <title>News | Pelican Bay Sailing School Inc - Bonita Springs, FL</title>
        <meta name="description" content="Latest news and updates from Pelican Bay Sailing School Inc, a Florida non-profit organization (EIN 92-3488213) serving sailors in Bonita Springs and Southwest Florida." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/news" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">The latest happenings, announcements, and stories from Pelican Bay Sailing School Inc.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Recent News" subtitle="Stay informed about our sailing programs, maritime partnerships, and community impact." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-5xl">⛵</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      <Tag size={12} /> {article.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{article.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have a story idea or press inquiry?</p>
            <a href="mailto:admin@pelicanbaysailingschoolinc.sbs" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Contact Our Communications Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default News
