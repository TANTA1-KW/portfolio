import React from 'react';

const About = () => {
  const strengths = [
    {
      title: 'Clean interface craft',
      copy: 'Layouts with strong hierarchy, consistent spacing, and responsive behavior that feels intentional.',
    },
    {
      title: 'Frontend systems',
      copy: 'Reusable React components, typed data, and practical styling patterns that are easy to maintain.',
    },
    {
      title: 'Product mindset',
      copy: 'I care about the flow, the details, and whether the page helps people understand what to do next.',
    },
  ];

  return (
    <section id="about" className="bg-[#0b0e11] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fcd535]">About</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white lg:text-5xl">
              I build web experiences that feel sharp, useful, and dependable.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#2b3139] bg-[#1e2329] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#eaecef]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
