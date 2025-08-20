import { CustomLink } from "./CustomLink";

function HeroSection() {
  return (
    <section
      id="home"
      className="grid ml-[15px] items-center h-[calc(100vh-57px)] max-h-[678px] scroll-mt-28"
    >
      <div>
        <p className="text-lg mb-4">Hello, My name is Nyein Phyo Aung.</p>
        <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
          I build things for the Web.
        </h1>
        <p className="mt-4 text-zinc-300">
          I&apos;m JavaScript-based web developer, currently based in Yangon.
        </p>
        <div className="flex gap-2 mt-10 items-center">
          <CustomLink href="#project">My Projects</CustomLink>
          <a
            href="/resume.pdf"
            download="Nyein Phyo Aung (Resume)"
            className="px-6 py-2 rounded-lg inline-block text-sm cursor-pointer bg-zinc-100 text-zinc-900"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
