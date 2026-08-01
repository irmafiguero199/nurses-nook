import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20">
      <div className="container-custom text-center">
        <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">The page you are looking for does not exist or has been moved. If you believe this is an error, please contact us.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"><Home size={18} /> Go Home</Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg hover:bg-slate-50 transition-colors"><ArrowLeft size={18} /> Contact Support</Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">Nurses Nook | Oconto Falls, WI 54154-0026 | EIN 92-2233469</p>
      </div>
    </section>
  )
}

export default NotFound