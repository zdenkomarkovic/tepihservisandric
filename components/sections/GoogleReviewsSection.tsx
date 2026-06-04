"use client";

import Script from "next/script";

export function GoogleReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
          Google recenzije
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Proverite šta naši klijenti kažu na Google-u
        </p>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div
          className="elfsight-app-29c86407-e93d-4c24-897b-eb02432e7cd6"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
