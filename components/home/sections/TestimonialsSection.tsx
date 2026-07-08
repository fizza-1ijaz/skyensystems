import { TESTIMONIALS } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            Testimonials & client outcomes
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-[#141414]">
            What partners say about working with us.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.quote} delay={index * 0.06} className="min-h-0">
              <article className="flex h-full flex-col border border-[#E5E5E3] bg-white p-6 md:p-8">
                <p className="flex-grow font-heading text-lg font-medium leading-snug text-[#141414] md:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 border-t border-[#E5E5E3] pt-6">
                  <p className="text-sm font-semibold text-[#141414]">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8A8A8A]">
                    {item.company}
                  </p>
                  <p className="mt-4 inline-block bg-[#31C3C3]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#1A6B6B]">
                    {item.outcome}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
