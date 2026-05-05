import { NextRequest, NextResponse } from 'next/server';
import { getEntries } from '@/lib/contentstack';
import { CONTENT_TYPES } from '@/lib/contentstack';

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;

    const query = {
      query: {
        slug: {
          $eq: slug,
        },
      },
    };

    const posts = await getEntries(CONTENT_TYPES.BLOG_POST, query);

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: posts[0],
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}