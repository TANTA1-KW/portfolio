import Image from 'next/image';
import Homepicture from '../../../public/HomePicture.svg';

const Home = () => {
  const stats = [
    { value: '12+', label: 'Interface builds' },
    { value: '05', label: 'Core skill areas' },
    { value: '2026', label: 'Portfolio refresh' },
  ];

  return (
    <section id="home" className="min-h-screen bg-[#0b0e11] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#2b3139] bg-[#1e2329] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#fcd535]">
            Portfolio / Fullstack Developer
          </p>
          <h1 className="text-3xl font-bold leading-[1.05] text-white mb-4 sm:text-6xl lg:text-5xl">
            Hello, I am <span className="text-[#fcd535]">Tantai Kaewphap</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#eaecef] sm:text-lg">
            I design and build practical web experiences with clean interfaces,
            reliable frontend systems, and thoughtful product details.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#fcd535] px-6 text-sm font-semibold text-[#181a20] transition hover:bg-[#f0b90b]"
            >
              View Projects
            </a>
            <a
              href="#footer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#1e2329] px-6 text-sm font-semibold text-white ring-1 ring-[#2b3139] transition hover:bg-[#2b3139]"
            >
              Contact Me
            </a>
          </div>

          {/* <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-[#2b3139] pl-4">
                <p className="font-mono text-3xl font-bold leading-none text-[#fcd535] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#707a8a]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div> */}
        </div>

        <div className="relative pb-8">
          <div className="rounded-xl border border-[#2b3139] bg-[#1e2329] p-6">
            <div className="rounded-lg bg-[#0b0e11] p-8">
              {/* <Image
                src={Homepicture}
                alt="Tantai Kaewphap portfolio illustration"
                width={520}
                height={520}
                className="mx-auto h-auto w-full max-w-md"
                preload
              /> */}
            </div>
            {/* <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Next.js', 'React', 'TypeScript'].map((skill) => (
                <div key={skill} className="rounded-lg bg-[#2b3139] px-4 py-3 text-center text-sm font-semibold text-[#eaecef]">
                  {skill}
                </div>
              ))}
            </div> */}
          </div>

          {/* <div className="absolute bottom-0 left-6 right-6 rounded-xl border border-[#2b3139] bg-[#1e2329] p-5 shadow-2xl shadow-black/30">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#707a8a]">Current focus</p>
            <p className="mt-2 text-xl font-semibold text-white">Building polished portfolio systems</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
