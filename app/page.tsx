import Link from 'next/link';
import Header from '@/components/Header';
import { getEntries, CONTENT_TYPES } from '@/lib/contentstack';

async function getFeaturedDestinations() {
  try {
    const destinations = await getEntries(CONTENT_TYPES.DESTINATION, {
      limit: 3,
      include_count: true,
    });
    return destinations;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }
}

export default async function Home() {
  const featuredDestinations = await getFeaturedDestinations();

  return (
    <div className="min-h-screen animated-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-8">
            <h1 className="text-6xl font-bold gradient-text mb-6 animate-pulse">
              Explore the World
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover amazing destinations, hidden gems, and travel guides from adventurers around the globe.
            Plan your next journey with insider tips and authentic experiences.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 glow shadow-lg"
          >
            Browse Destinations
          </Link>
        </section>

        {/* Featured Destinations Section */}
        {featuredDestinations.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Destinations</h2>
              <p className="text-gray-400 text-lg">Must-visit places from our travel experts</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredDestinations.map((dest: any) => (
                <article key={dest.uid} className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 glow group">
                  {dest.featured_image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={dest.featured_image.url}
                        alt={dest.featured_image.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-emerald-400 font-semibold">{dest.country}</span>
                      <span className="text-gray-400">{dest.estimated_days || '3-5'} days</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      <Link href={`/blog/${dest.slug}`}>
                        {dest.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {dest.description}
                    </p>
                    <Link
                      href={`/blog/${dest.slug}`}
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Why Travel With Us Section */}
        <section className="glass rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Travel With Us?</h2>
            <p className="text-gray-400 text-lg">Experience the world differently</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Expert Tips</h3>
              <p className="text-gray-400 leading-relaxed">Authentic travel guides curated by experienced travelers and local experts.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Local Insights</h3>
              <p className="text-gray-400 leading-relaxed">Discover hidden gems and authentic experiences from destination locals.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Budget Friendly</h3>
              <p className="text-gray-400 leading-relaxed">Plan better with cost breakdowns, budget guides, and money-saving tips.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}