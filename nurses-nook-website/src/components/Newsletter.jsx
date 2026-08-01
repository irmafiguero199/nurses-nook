import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="bg-primary-700 py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="mx-auto text-white mb-4" size={40} />
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-primary-100 mb-8">
            Subscribe to our newsletter for updates on programs, events, and ways to support 
            nurses in the Oconto Falls community.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle size={24} />
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-warm-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-warm-500 hover:bg-warm-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Send size={18} />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-primary-200 text-sm mt-4">
            Nurses Nook | admin@nursesnook.org | Oconto Falls, WI 54154
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter