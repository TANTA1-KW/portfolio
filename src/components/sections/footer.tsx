import React from 'react';

const FooterSection = () => {
  return (
    <section id="footer">
      <div className="bg-[#0b0e11] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-xl border border-[#2b3139] bg-[#1e2329] p-8 md:flex md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fcd535]">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
              Available for internships, freelance work, and collaboration.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#eaecef]">
              Reach out if you want a polished web interface, portfolio, or frontend prototype.
            </p>
          </div>
          <a
            href="mailto:tantai@example.com"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-[#fcd535] px-6 text-sm font-semibold text-[#181a20] transition hover:bg-[#f0b90b] md:mt-0"
          >
            Email Me
          </a>
        </div>
      </div>

      <footer className="bg-[#fafafa] px-6 py-16 text-[#181a20] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <h3 className="text-xl font-semibold">Tantai Kaewphap</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#707a8a]">
              Fullstack developer focused on clear interfaces and practical web systems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Navigation</h4>
            <div className="mt-4 grid gap-3 text-sm text-[#707a8a]">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#work">Projects</a>
              <a href="#education">Education</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="mt-4 grid gap-3 text-sm text-[#707a8a]">
              <a href="mailto:tantai@example.com">Email</a>
              <a href="#work">Portfolio</a>
              <a href="#footer">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
