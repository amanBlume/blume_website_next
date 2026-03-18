import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://blumehealthco.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://blumehealthco.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Blume Health" },
    publisher: {
      "@type": "Organization",
      name: "Blume Health",
      url: "https://blumehealthco.com",
    },
    mainEntityOfPage: `https://blumehealthco.com/blog/${post.slug}`,
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-coral-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-coral-500 bg-coral-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
            <span className="text-sm text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">{post.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article
          className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-a:text-coral-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-coral-500 prose-blockquote:bg-coral-50 prose-blockquote:py-1 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-coral-50 rounded-2xl p-10 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">
            Want us to handle your listings?
          </h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Blume Health gets you listed on 40+ directories and keeps your profiles updated — so you can focus on clients, not admin.
          </p>
          <Link
            href="/schduleDemo"
            className="inline-block px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all font-semibold shadow-lg"
          >
            Book a Free Demo →
          </Link>
        </div>

        {/* Back */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-gray-500 hover:text-coral-500 transition-colors text-sm">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
