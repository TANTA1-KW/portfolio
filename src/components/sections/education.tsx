import React from 'react';

const Education = () => {
  const items = [
    {
      label: 'Foundation',
      title: 'Computer science and web fundamentals',
      copy: 'Core programming, frontend development, databases, and practical software design.',
    },
    {
      label: 'Practice',
      title: 'Project-based learning',
      copy: 'Building portfolio pieces, interface experiments, and deployable web applications.',
    },
    {
      label: 'Growth',
      title: 'Modern frontend stack',
      copy: 'React, Next.js, TypeScript, responsive design, accessibility, and UI polish.',
    },
  ];

  return (
    <section id="education" className="bg-[#0b0e11] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fcd535]">Education</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white lg:text-5xl">Learning path</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="rounded-xl border border-[#2b3139] bg-[#1e2329] p-6">
              <div className="mb-8 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#707a8a]">{item.label}</p>
                <p className="font-mono text-3xl font-bold text-[#fcd535]">0{index + 1}</p>
              </div>
              <h3 className="text-xl font-semibold leading-snug text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#eaecef]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
