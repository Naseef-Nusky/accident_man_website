import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './BlogPost';

export default function BlogPostRoute() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}


