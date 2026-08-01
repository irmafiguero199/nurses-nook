import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-vision' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Our Team', path: '/team' },
  { name: 'News', path: '/news' },
]

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
  { name: 'Registration Info', path: '/registration-information' },
  { name: 'Contact', path: '/contact' },
]

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Nurses Nook" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">Nurses Nook</h3>
                <p className="text-sm text-slate-400">Wisconsin Nonprofit</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A registered 501(c)(3) nonprofit organization dedicated to supporting nurses 
              and healthcare professionals in Oconto Falls and surrounding communities in Wisconsin.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/nursesnook" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/nursesnook" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com/nursesnook" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/nursesnook" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Information</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                to="/donate" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-500 hover:bg-warm-600 text-white font-semibold rounded-md transition-colors"
              >
                <Heart size={16} />
                Support Our Cause
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-slate-300">Nurses Nook</p>
                  <p className="text-slate-300">123 Main Street, Suite 3</p>
                  <p className="text-slate-300">Oconto Falls, WI 54154-0026</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-400 shrink-0" size={20} />
                <a href="tel:+19208461234" className="text-slate-300 hover:text-white transition-colors">
                  (920) 846-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-400 shrink-0" size={20} />
                <a href="mailto:admin@nursesnook.org" className="text-slate-300 hover:text-white transition-colors">
                  admin@nursesnook.org
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">Federal EIN (Tax ID)</p>
              <p className="text-lg font-mono font-semibold text-white">92-2233469</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Nurses Nook. All rights reserved. A 501(c)(3) nonprofit organization.
          </p>
          <p className="text-slate-500 text-sm">
            EIN: 92-2233469 | Oconto Falls, Wisconsin 54154-0026
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer