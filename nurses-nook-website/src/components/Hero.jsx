import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-warm-400 rounded-full animate-pulse" />
            Registered 501(c)(3) Nonprofit | EIN: 92-2233469
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Supporting Nurses, <br />
            <span className="text-primary-300">Strengthening Communities</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl">
            Nurses Nook is a nonprofit organization based in Oconto Falls, Wisconsin, 
            dedicated to providing resources, education, and community support for nurses 
            and healthcare professionals across the region.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
              Explore Our Programs
              <ArrowRight size={20} />
            </Link>
            <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-4 bg-warm-500 text-white font-semibold rounded-lg hover:bg-warm-600 transition-colors">
              <Heart size={20} />
              Donate Today
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Users className="text-warm-400 mb-3" size={32} />
            <div className="text-3xl font-bold">500+</div>
            <div className="text-primary-200">Nurses Supported</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <BookOpen className="text-warm-400 mb-3" size={32} />
            <div className="text-3xl font-bold">50+</div>
            <div className="text-primary-200">Training Programs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Heart className="text-warm-400 mb-3" size={32} />
            <div className="text-3xl font-bold">12</div>
            <div className="text-primary-200">Community Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero