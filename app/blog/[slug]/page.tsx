import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { formatBlogPost, generateMetaTags } from '@/lib/utils';
import { BlogPost } from '@/lib/types';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const metaTags = generateMetaTags(post);

  return {
    title: metaTags.title,
    description: metaTags.description,
    keywords: metaTags.keywords,
    openGraph: {
      title: metaTags.title,
      description: metaTags.description,
      images: metaTags.ogImage ? [{ url: metaTags.ogImage }] : [],
      url: metaTags.url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTags.title,
      description: metaTags.description,
      images: metaTags.ogImage ? [metaTags.ogImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formattedPost = formatBlogPost(post);

  return (
    <div className="min-h-screen animated-bg">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to blog link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-12 text-center">
          {post.category && (
            <div className="mb-6">
              <span className="inline-block glass text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                {post.category.title}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center text-gray-400 mb-8 space-x-4">
            <time dateTime={post.published_at} className="text-lg">
              {formattedPost.formattedDate}
            </time>
            <span className="text-blue-400">•</span>
            <span className="text-lg">{formattedPost.readingTime} min read</span>
          </div>

          {post.featured_image && (
            <div className="relative mb-12 rounded-2xl overflow-hidden glow">
              <img
                src={post.featured_image.url}
                alt={post.featured_image.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}
        </header>

        {/* Article content */}
        <div
          className="prose prose-lg max-w-none glass rounded-2xl p-8 md:p-12"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Article footer */}
        <footer className="mt-16 glass rounded-2xl p-8">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {post.author && (
            <div className="flex items-center p-6 glass rounded-xl">
              {post.author.avatar && (
                <img
                  src={post.author.avatar.url}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full mr-6 border-2 border-blue-400/50"
                />
              )}
              <div>
                <p className="font-semibold text-white text-lg">{post.author.name}</p>
                {post.author.bio && (
                  <p className="text-gray-400 mt-1">{post.author.bio}</p>
                )}
              </div>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}