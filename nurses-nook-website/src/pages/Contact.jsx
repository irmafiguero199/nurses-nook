import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 8000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contact | Pelican Bay Sailing School Inc - Bonita Springs, Florida</title>
        <meta name="description" content="Contact Pelican Bay Sailing School Inc at 4971 BONITA BAY BLVD, BONITA SPRINGS, FL 34134. Email: admin@pelicanbaysailingschoolinc.sbs. EIN: 92-3488213." />
        <link rel="canonical" href="https://pelicanbaysailingschoolinc.sbs/contact" />
      </Helmet>

      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">We are here to answer your questions about sailing programs, partnerships, donations, and more.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Get in Touch" subtitle="Reach out to Pelican Bay Sailing School Inc through any of the channels below." centered={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><MapPin className="text-primary-700" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Physical Address</h3>
                    <p className="text-slate-600">PELICAN BAY SAILING SCHOOL INC</p>
                    <p className="text-slate-600">4971 BONITA BAY BLVD</p>
                    <p className="text-slate-600">BONITA SPRINGS, FL 34134</p>
                    <p className="text-slate-600">United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Phone className="text-primary-700" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">Main Office: Contact Us</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Mail className="text-primary-700" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">General Inquiries: admin@pelicanbaysailingschoolinc.sbs</p>
                    <p className="text-slate-600">Programs: programs@pelicanbaysailingschoolinc.sbs</p>
                    <p className="text-slate-600">Donations: donate@pelicanbaysailingschoolinc.sbs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Clock className="text-primary-700" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Office Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Nonprofit Information</h3>
                <p className="text-sm text-slate-600">Federal EIN: 92-3488213</p>
                <p className="text-sm text-slate-600">State: Florida Nonprofit Corporation</p>
                <p className="text-sm text-slate-600">501(c)(3) Tax-Exempt Organization</p>
              </div>
            </div>
            <div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. We will respond within 48 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label><input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Subject</label><select required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none"><option value="">Select a subject</option><option value="programs">Sailing Programs & Courses</option><option value="donate">Donations & Sponsorship</option><option value="volunteer">Volunteering</option><option value="partnership">Partnership Opportunities</option><option value="media">Media Inquiry</option><option value="other">Other</option></select></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Message</label><textarea rows={5} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none"></textarea></div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"><Send size={18} /> Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
