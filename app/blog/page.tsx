import Link from 'next/link';
import Header from '@/components/Header';
import { Destination } from '@/lib/types';
import { getEntries, CONTENT_TYPES } from '@/lib/contentstack';

async function getDestinations() {
  try {
    const destinations = await getEntries(CONTENT_TYPES.DESTINATION, {
      limit: 20,
      include_count: true,
    });
    return destinations;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  return (
    <div className="min-h-screen animated-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">All Destinations</h1>
          <p className="text-xl text-gray-300">Explore amazing places from around the world</p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination: Destination) => (
            <article key={destination.uid} className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 glow group">
              {destination.featured_image && (
                <div className="relative overflow-hidden">
                  <img
                    src={destination.featured_image.url}
                    alt={destination.featured_image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-emerald-400 font-semibold">{destination.country}</span>
                  <span className="text-gray-400">{destination.estimated_days || '3-5'} days</span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  <Link href={`/blog/${destination.slug}`} className="hover:text-emerald-300">
                    {destination.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-3">📍 {destination.location}</p>
                <p className="text-gray-400 mb-4 line-clamp-2">{destination.description}</p>
                <div className="mb-4 text-xs text-gray-500">
                  <p>🏖️ <strong>Best Time:</strong> {destination.best_time_to_visit}</p>
                </div>
                <Link
                  href={`/blog/${destination.slug}`}
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {destinations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-400 text-xl">No destinations found yet.</p>
            <p className="text-gray-500 mt-2">Check back soon for more amazing places!</p>
          </div>
        )}
      </main>
    </div>
  );
}