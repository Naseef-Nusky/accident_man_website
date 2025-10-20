import React, { useEffect, useState } from 'react';
import { fetchBlogPostBySlug } from '../lib/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Button } from '../components/ui/button';
import blogBgImage from '../assets/Auto Repair Blog - Workshop Restoration.jpg';

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    (async () => {
      const item = await fetchBlogPostBySlug(slug);
      setPost(item);
    })();
  }, [slug]);

  if (!post) return <div className="container mx-auto px-4 py-16">Loading...</div>;

  const { title, featuredImage, content, publishedDate, author, excerpt } = post.fields;
  const img = (() => {
    const raw = featuredImage?.fields?.file?.url;
    if (!raw) return null;
    const base = raw.startsWith('http') ? raw : `https:${raw}`;
    return `${base}?w=800&h=400&fm=webp&q=70&fit=fill`;
  })();

  return (
    <main className="pt-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <div className="text-gray-500 text-sm mb-6">
          {author ? `${author} • ` : ''}{publishedDate?.slice(0,10)}
        </div>
        {img && <img src={img} alt={title} className="w-full h-[425px] object-cover rounded-xl mb-6" />}
        {content ? (
          <article className="prose max-w-none">
            {documentToReactComponents(content)}
          </article>
        ) : (
          <p className="text-gray-700">{typeof excerpt === 'string' ? excerpt : ''}</p>
        )}
      </div>

      {/* Call to Action Banner */}
      <section className="relative py-20 overflow-hidden mt-10 sm:mt-20">
        <img
          src={blogBgImage}
          alt="Auto Repair Workshop"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Need Help with Your Vehicle?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact us today for professional accident management and vehicle repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold shadow-lg">
              <a href="tel:08432891570">Call 0843 289 1570</a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold">
              <a href="/contact">Get Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


