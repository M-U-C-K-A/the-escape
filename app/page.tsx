
import SparklesCore from "@/components/ui/Sparkles";
import Spotlight from "@/components/ui/Spotlight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { team, story } from "@/utils/data";

export default function Home() {
  return (
    <body className="bg-slate-950">

      <div className="h-screen cursor-auto relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-col justify-center">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 w-full">
          The escape
        </h1>
        <h2 className="relative text-center font-regular text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 mt-8 max-w-2xl antialiased leading-loose">
          Experience the Pinnacle of Horror Gaming, Where Every Step Unveils the Unseen Horrors Lurking in the Corners of Your Fears.
        </h2>
        <div className="flex sm:flex-row justify-center flex-col space-y-2 sm:space-y-0 sm:space-x-4 mb-4 w-full z-50">
          <a className="bg-slate-900 font-semibold dark:hover:bg-slate-300 dark:bg-white dark:text-black no-underline flex space-x-2 group cursor-pointer relative transition duration-200 shadow-zinc-900 p-px text-white px-4 py-2 w-full sm:w-48 h-14 rounded-2xl text-base text-center items-center justify-center" href="/components">
            Download game</a>
          <a className="w-full font-semibold sm:w-48 hover:bg-slate-900 hover:border-slate-200 hover:text-slate-200 text-sm h-14 border border-white flex justify-center items-center rounded-2xl" href="/pricing">
            Download game <pre>VR</pre></a>
        </div>
        </div>
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md ">
        <iframe className="w-4/5 h-4/5 rounded-lg" src="https://www.youtube.com/embed/xBasQG_6p40?si=89xTcg-3Tte9OhUy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      {/* Team */}
      <div className="h-screen relative w-full flex flex-col items-center justify-start overflow-hidden rounded-md ">
        <h2 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Meet the team !
        </h2>
        <h3 className="relative font-regular text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose">
          The Minds Behind 'The Escape'
        </h3>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={team} />
        </div>
        <div className="grid-cols-3 grid gap-6 w-4/5">
          {team.map((member) => (
            <a key={member.id} href="#" className="p-8 rounded-lg bg-gray-900 hover:bg-slate-800 border-solid border-white">
              <span className="text-3xl font-bold tracking-tight">{member.name}</span>
              <p>{member.paragraph}</p>
              <button
                className="bg-transparent mt-5 px-4 rounded py-2 border border-slate-600 hover:bg-slate-800 hover:border-slate-700">
                en savoir plus
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="h-screen relative w-full flex flex-col items-center justify-start overflow-hidden rounded-md ">

        <StickyScroll content={story} />
      </div>
    </body>
  )
}
