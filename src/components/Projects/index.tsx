import { Card } from '../Card'

export function Projects() {
  return (
    <section className="mt-[6rem]">
      <div className="flex flex-col justify-center gap-[4rem] items-center w-full max-w-[1024px] mx-auto  px-[2rem] lg:px-0 ">
        <header className="flex justify-center lg:justify-between items-center w-full">
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-white font-semibold text-[1.8rem]">
              Featured Projects
            </h2>
            <p className="text-zinc-300 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <a
            href="#"
            className="text-white uppercase bg-primaryColor w-[160px] h-[60px]  justify-center items-center rounded hidden lg:flex hover:bg-red-950 transition-all"
          >
            View All
          </a>
        </header>
        <div className="w-full grid gap-[44px] grid-cols-1 lg:grid-cols-2">
          <Card />
        </div>
        <a
          href="#"
          className="text-white uppercase bg-primaryColor w-full sm:w-[360px] h-[60px]  justify-center items-center rounded flex lg:hidden z-10 hover:bg-red-950 transition-all"
        >
          View All
        </a>
      </div>
    </section>
  )
}
