import { NextRequest, NextResponse } from 'next/server';
import { getEntries } from '@/lib/contentstack';
import { CONTENT_TYPES } from '@/lib/contentstack';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = parseInt(searchParams.get('skip') || '0');
    const category = searchParams.get('category');

    const query: any = {
      limit,
      skip,
      include_count: true,
    };

    if (category) {
      query.query = {
        category: {
          $in: [category],
        },
      };
    }

    const posts = await getEntries(CONTENT_TYPES.BLOG_POST, query);

    return NextResponse.json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}