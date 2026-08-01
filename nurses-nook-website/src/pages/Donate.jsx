import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Heart, CheckCircle, Shield, Receipt, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const donationAmounts = [25, 50, 100, 250, 500, 1000]

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
  }

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

  return (
    <>
      <Helmet>
        <title>Donate | Nurses Nook - Support Wisconsin Nurses (EIN 92-2233469)</title>
        <meta name="description" content="Make a tax-deductible donation to Nurses Nook, a 501(c)(3) nonprofit (EIN 92-2233469). Support nurses in Oconto Falls, Wisconsin." />
        <link rel="canonical" href="https://nursesnook.org/donate" />
      </Helmet>

      <section className="bg-gradient-to-br from-warm-500 to-warm-600 text-white py-20">
        <div className="container-custom text-center">
          <Heart className="mx-auto mb-4" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Your tax-deductible donation directly supports nurses and healthcare professionals in Wisconsin.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeader title="Why Donate?" subtitle="Your contribution makes a real difference in the lives of healthcare workers." centered={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Users className="text-primary-700" size={24} /></div>
                  <div><h3 className="font-semibold text-slate-900">Direct Impact</h3><p className="text-slate-600 text-sm">85% of every dollar goes directly to programs supporting nurses.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Receipt className="text-primary-700" size={24} /></div>
                  <div><h3 className="font-semibold text-slate-900">Tax Deductible</h3><p className="text-slate-600 text-sm">Nurses Nook is a 501(c)(3) nonprofit. EIN: 92-2233469. All donations are tax-deductible.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Shield className="text-primary-700" size={24} /></div>
                  <div><h3 className="font-semibold text-slate-900">Transparent</h3><p className="text-slate-600 text-sm">We publish annual reports and financial statements. Your trust matters.</p></div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Other Ways to Give</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Mail a check to: Nurses Nook, 123 Main Street, Suite 3, Oconto Falls, WI 54154</li>
                  <li>Corporate matching through your employer</li>
                  <li>Legacy giving and planned donations</li>
                  <li>In-kind donations of medical supplies or office equipment</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Make a Donation</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600">Your generosity supports nurses across Wisconsin. A tax receipt will be emailed to you.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">Select Amount</label>
                      <div className="grid grid-cols-3 gap-3">
                        {donationAmounts.map((amount) => (
                          <button key={amount} type="button" onClick={() => { setSelectedAmount(amount); setCustomAmount('') }} className={`py-3 rounded-lg font-semibold transition-colors ${selectedAmount === amount && !customAmount ? 'bg-primary-600 text-white' : 'bg-white text-slate-700 border border-slate-300 hover:border-primary-500'}`}>${amount}</button>
                        ))}
                      </div>
                      <div className="mt-3"><input type="number" placeholder="Custom amount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none" /></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-slate-700 mb-1">First Name</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none" /></div>
                      <div><label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none" /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Email</label><input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none" /></div>
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600"><strong>Donation Summary:</strong><br />Amount: ${finalAmount}<br />Organization: Nurses Nook<br />EIN: 92-2233469<br />This is a tax-deductible charitable contribution.</p>
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-warm-500 hover:bg-warm-600 text-white font-bold rounded-lg transition-colors"><Heart size={20} /> Donate ${finalAmount}</button>
                    <p className="text-xs text-slate-500 text-center">Secure payment processing. You will receive an email confirmation and tax receipt.</p>
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

export default Donate