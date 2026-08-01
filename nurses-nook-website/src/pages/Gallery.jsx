import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const galleryItems = [
  { id: 1, title: 'Spring 2026 Wellness Retreat', date: 'March 15, 2026', location: 'Oconto Falls Community Center', category: 'events', emoji: '🧘‍♀️' },
  { id: 2, title: 'Scholarship Award Ceremony', date: 'November 12, 2025', location: 'Oconto Falls Legion Hall', category: 'awards', emoji: '🎓' },
  { id: 3, title: 'Community Health Fair Booth', date: 'July 8, 2025', location: 'Oconto County Fairgrounds', category: 'community', emoji: '🏥' },
  { id: 4, title: 'New Graduate Mixer', date: 'October 5, 2025', location: 'Nurses Nook Office', category: 'events', emoji: '🎉' },
  { id: 5, title: 'Mental Health First Aid Training', date: 'February 20, 2026', location: 'Bellin Health Oconto', category: 'training', emoji: '📚' },
  { id: 6, title: 'Holiday Giving Drive', date: 'December 12, 2025', location: 'Oconto Falls Food Pantry', category: 'community', emoji: '🎁' },
  { id: 7, title: 'Leadership Workshop Series', date: 'January 18, 2026', location: 'NWTC Oconto Campus', category: 'training', emoji: '👩‍💼' },
  { id: 8, title: 'Nurse Appreciation Week', date: 'May 6, 2026', location: 'Various Locations', category: 'events', emoji: '💐' },
]

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'events', label: 'Events' },
  { key: 'training', label: 'Training' },
  { key: 'community', label: 'Community' },
  { key: 'awards', label: 'Awards' },
]

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = activeCategory === 'all' ? galleryItems : galleryItems.filter(i => i.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Gallery | Nurses Nook - Events & Programs in Wisconsin</title>
        <meta name="description" content="Photo gallery of Nurses Nook events, training programs, and community activities in Oconto Falls, Wisconsin. EIN 92-2233469." />
        <link rel="canonical" href="https://nursesnook.org/gallery" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Moments from our programs, events, and community activities across Wisconsin.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Program Gallery" subtitle="Visual highlights from Nurses Nook activities and community engagement." />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.key ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{cat.label}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div key={item.id} onClick={() => setSelectedItem(item)} className="group cursor-pointer bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-nurse-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">{item.emoji}</div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1"><Calendar size={12} /> {item.date}</div>
                  <div className="flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} /> {item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="text-8xl mb-4">{selectedItem.emoji}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedItem.title}</h3>
            <p className="text-slate-600 mb-1">{selectedItem.date}</p>
            <p className="text-slate-600 mb-6">{selectedItem.location}</p>
            <button onClick={() => setSelectedItem(null)} className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium">Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery