import React, { useEffect, useState } from 'react';
import { SEO } from "../components/SEO.js";
import { fetchBlogPosts } from '../lib/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import blogBgImage from '../assets/Auto Repair Blog - Workshop Restoration.jpg';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const items = await fetchBlogPosts(20, 0);
        setPosts(items);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="container mx-auto px-4 py-16">Loading...</div>;

  return (
    <>
      <SEO
        title="Blog | Accident management tips and updates"
        description="Read the latest articles on accident management, vehicle recovery, replacement vehicles, and repair best practices."
        canonical="/blogs"
        keywords="accident blog, accident management tips, vehicle recovery articles"
      />
    <main>
      {/* Blog Banner */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <img
          src={blogBgImage}
          alt="Auto Repair Workshop"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights about accident management and vehicle services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => {
            const { title, slug, excerpt, featuredImage, publishedDate } = p.fields;
            const rawUrl = featuredImage?.fields?.file?.url;
            const src = rawUrl ? (rawUrl.startsWith('http') ? rawUrl : `https:${rawUrl}`) + `?w=800&fm=webp&q=70&fit=thumb` : null;
            return (
              <a key={p.sys.id} href={`/blogs/${slug}`} className="rounded-xl border overflow-hidden hover:shadow-lg transition bg-white group flex flex-col">
                {src && <img src={src} alt={title} className="w-full h-48 object-cover" />}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-1">{publishedDate?.slice(0,10)}</div>
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  {typeof excerpt === 'object' ? (
                    <div className="text-gray-600 line-clamp-3 mb-4 flex-grow min-h-[4.5rem]">
                      {documentToReactComponents(excerpt)}
                    </div>
                  ) : (
                    <p className="text-gray-600 line-clamp-3 mb-4 flex-grow min-h-[4.5rem]">{excerpt}</p>
                  )}
                  <div className="text-green-600 font-medium group-hover:text-green-700 transition-colors text-right mt-auto">
                    Read More →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        </div>
      </section>
    </main>
    </>
  );
}


