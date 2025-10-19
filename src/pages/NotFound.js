import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-8">The page you are looking for was not found.</p>
        <a href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
          Go back home
        </a>
      </div>
    </main>
  );
}


