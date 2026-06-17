import React from 'react';

const Work = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      stack: 'Next.js / TypeScript',
      type: 'Personal brand',
      status: 'Active',
    },
    {
      name: 'Dashboard Interface',
      stack: 'React / Tailwind',
      type: 'Product UI',
      status: 'Prototype',
    },
    {
      name: 'Web App System',
      stack: 'API / Frontend',
      type: 'Fullstack',
      status: 'Build',
    },
  ];

  return (
    <section id="work" className="bg-[#0b0e11] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fcd535]">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white lg:text-5xl">Featured work</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#eaecef]">
              Selected builds that show practical UI, frontend structure, and product thinking.
            </p>
          </div>
          <a href="#footer" className="text-sm font-semibold text-[#fcd535]">Start a project</a>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#2b3139] bg-[#1e2329]">
          <div className="grid grid-cols-4 gap-4 border-b border-[#2b3139] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#707a8a] max-md:hidden">
            <span>Project</span>
            <span>Stack</span>
            <span>Type</span>
            <span className="text-right">Status</span>
          </div>

          {projects.map((project) => (
            <article key={project.name} className="grid gap-3 border-b border-[#2b3139] px-6 py-5 last:border-b-0 md:grid-cols-4 md:items-center">
              <div>
                <p className="text-base font-semibold text-white">{project.name}</p>
                <p className="mt-1 text-xs text-[#707a8a] md:hidden">{project.stack}</p>
              </div>
              <p className="text-sm text-[#eaecef] max-md:hidden">{project.stack}</p>
              <p className="text-sm text-[#929aa5]">{project.type}</p>
              <p className="font-mono text-sm font-medium text-[#fcd535] md:text-right">{project.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
