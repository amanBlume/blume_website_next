import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Private Practice Growth & Marketing Tips",
  description:
    "Practical guides for therapists, counselors, and psych NPs on growing their private practice — directory listings, patient referrals, and online marketing.",
  alternates: { canonical: "https://blumehealthco.com/blog" },
  openGraph: {
    title: "Blog — Private Practice Growth & Marketing Tips | Blume Health",
    description:
      "Practical guides for therapists, counselors, and psych NPs on growing their private practice.",
    url: "https://blumehealthco.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Practice Growth Resources
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Practical guides for therapists, counselors, and psych NPs who want more clients and less admin.
          </p>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
            >
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

              <h2 className="text-2xl font-bold text-navy-900 mb-3 hover:text-coral-500 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">{post.description}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-coral-500 font-semibold hover:text-coral-600 transition-colors"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Ready to grow your practice?</h2>
          <p className="text-gray-500 mb-6">
            Let us handle your directory listings so you can focus on clients.
          </p>
          <Link
            href="/schduleDemo"
            className="inline-block px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all font-semibold shadow-lg"
          >
            Book a Free Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
