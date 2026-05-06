import Link from 'next/link';
import Header from '@/components/Header';
import { formatBlogPost } from '@/lib/utils';
import { BlogPost } from '@/lib/types';
import { getEntries, CONTENT_TYPES } from '@/lib/contentstack';

async function getBlogPosts() {
  try {
    const posts = await getEntries(CONTENT_TYPES.BLOG_POST, {
      limit: 10,
      include_count: true,
    });
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen animated-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">Blog</h1>
          <p className="text-xl text-gray-300">Latest articles and insights from our team</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: BlogPost) => {
            const formattedPost = formatBlogPost(post);
            return (
              <article key={post.uid} className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 glow group">
                {post.featured_image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={post.featured_image.url}
                      alt={post.featured_image.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <time dateTime={post.published_at}>{formattedPost.formattedDate}</time>
                    <span className="mx-2 text-blue-400">•</span>
                    <span>{formattedPost.readingTime} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-300">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400 mb-4">{formattedPost.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-400 text-xl">No blog posts found yet.</p>
            <p className="text-gray-500 mt-2">Check back soon for new content!</p>
          </div>
        )}
      </main>
    </div>
  );
}