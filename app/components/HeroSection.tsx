import { CustomLink } from "./CustomLink";

function HeroSection() {
  return (
    <section id="home" className="grid ml-[15px] items-center h-[calc(100vh-57px)] max-h-[678px] scroll-mt-28">
        <div>
            <p className="text-lg mb-4">Hello, My name is Nyein Phyo Aung.</p>
            <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">I build things for the Web.</h1>
            <p className="mt-4 text-zinc-300">I&apos;m JavaScript-based web developer, currently based in Yangon.</p>
            <CustomLink href="#project" className="mt-10">My Projects</CustomLink>
        </div>
    </section>
  )
}

export default HeroSection