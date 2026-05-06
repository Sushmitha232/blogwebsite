import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { Destination } from '@/lib/types';
import { getEntries, CONTENT_TYPES } from '@/lib/contentstack';

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

async function getDestination(slug: string): Promise<Destination | null> {
  try {
    const query = {
      query: {
        slug: {
          $eq: slug,
        },
      },
    };

    const destinations = await getEntries(CONTENT_TYPES.DESTINATION, query);
    return destinations && destinations.length > 0 ? destinations[0] : null;
  } catch (error) {
    console.error('Error fetching destination:', error);
    return null;
  }
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const destination = await getDestination(params.slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${destination.title} - Travel Guide`,
    description: destination.description,
    openGraph: {
      title: destination.title,
      description: destination.description,
      images: destination.featured_image ? [{ url: destination.featured_image.url }] : [],
      type: 'article',
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const destination = await getDestination(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen animated-bg">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to destinations link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Destinations
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="inline-block glass text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-400/30">
              {destination.country}
            </span>
            <span className="inline-block glass text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
              {destination.estimated_days || '3-5'} days
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {destination.title}
          </h1>

          <div className="flex items-center justify-center text-gray-400 mb-8 space-x-4">
            <span className="text-lg">📍 {destination.location}</span>
          </div>

          {destination.featured_image && (
            <div className="relative mb-12 rounded-2xl overflow-hidden glow">
              <img
                src={destination.featured_image.url}
                alt={destination.featured_image.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}
        </header>

        {/* Main content */}
        <div className="prose prose-invert max-w-none">
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-lg border border-white/10">
              <h3 className="text-emerald-300 font-semibold mb-2">🏖️ Best Time to Visit</h3>
              <p className="text-gray-300">{destination.best_time_to_visit}</p>
            </div>
            <div className="glass p-6 rounded-lg border border-white/10">
              <h3 className="text-emerald-300 font-semibold mb-2">💰 Budget</h3>
              <p className="text-gray-300">{destination.budget || 'Check details'}</p>
            </div>
            <div className="glass p-6 rounded-lg border border-white/10">
              <h3 className="text-emerald-300 font-semibold mb-2">⏱️ Duration</h3>
              <p className="text-gray-300">{destination.estimated_days || '3-5'} days recommended</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{destination.description}</p>
          </section>

          {destination.attractions && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">🎭 Top Attractions</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-gray-300 leading-relaxed">
                {destination.attractions}
              </div>
            </section>
          )}

          {destination.travel_tips && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">✈️ Travel Tips</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-gray-300 leading-relaxed">
                {destination.travel_tips}
              </div>
            </section>
          )}

          {destination.accommodation_tips && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">🏨 Accommodation</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-gray-300 leading-relaxed">
                {destination.accommodation_tips}
              </div>
            </section>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Author section */}
        <section className="text-center">
          <p className="text-gray-400">Last updated: {new Date(destination.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </section>
      </article>
    </div>
  );
}