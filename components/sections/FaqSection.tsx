import Link from "next/link";
import { FAQ_DATA } from "@/lib/faqData";

const PREVIEW_COUNT = 6;

export function FaqSection() {
  const faqs = FAQ_DATA.slice(0, PREVIEW_COUNT);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
          Najčešća pitanja o pranju tepiha
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Odgovori na pitanja koja nam klijenti najčešće postavljaju
        </p>

        <div className="space-y-3">
          {faqs.map(({ question, answerText }) => (
            <details
              key={question}
              className="group bg-cream rounded-xl border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-navy text-sm md:text-base select-none hover:text-gold transition-colors">
                {question}
                <span className="shrink-0 text-gold text-lg leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                {answerText}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/najcesca-pitanja/"
            className="inline-block bg-navy text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold transition-colors"
          >
            Pogledaj sva pitanja »
          </Link>
        </div>
      </div>
    </section>
  );
}
