// Icons
import { MdDesignServices, BsArrowRight } from 'react-icons/all'

export function Skills() {
  return (
    <section className="relative w-full mt-10 lg:mt-0">
      <div className="flex flex-wrap justify-center gap-[2rem] items-center w-full max-w-[1024px] mx-auto  lg:flex-row relative z-10 py-[6rem]">
        <div className="bg-cardColor w-full max-w-[320px] p-[3rem] h-[350px] rounded flex flex-col items-center justify-center gap-1 lg:justify-center lg:items-start ">
          <span className="text-primaryColor text-[6rem] mb-2">
            <MdDesignServices />
          </span>
          <h4 className="text-white text-[1.5rem] font-semibold">UI Design</h4>
          <p className="text-zinc-300">
            Lorem ipsum dolor sit amet con sectetur adipi.
          </p>
          <button className="text-primaryColor mt-4 font-semibold flex items-center justify-center gap-2 uppercase">
            Know More
            <span className="text-[1rem] font-semibold">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="bg-primaryColor w-full max-w-[320px] p-[3rem] h-[350px] rounded flex flex-col items-center justify-center gap-1 lg:justify-center lg:items-start ">
          <span className="text-white text-[6rem] mb-2">
            <MdDesignServices />
          </span>
          <h4 className="text-white text-[1.5rem] font-semibold">UI Design</h4>
          <p className="text-zinc-300">
            Lorem ipsum dolor sit amet con sectetur adipi.
          </p>
          <button className="text-white mt-4 font-semibold flex items-center justify-center gap-2 uppercase">
            Know More
            <span className="text-[1rem] font-semibold">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="bg-cardColor w-full max-w-[320px] p-[3rem] h-[350px] rounded flex flex-col items-center justify-center gap-1 lg:justify-center lg:items-start ">
          <span className="text-primaryColor text-[6rem] mb-2">
            <MdDesignServices />
          </span>
          <h4 className="text-white text-[1.5rem] font-semibold">UI Design</h4>
          <p className="text-zinc-300">
            Lorem ipsum dolor sit amet con sectetur adipi.
          </p>
          <button className="text-primaryColor mt-4 font-semibold flex items-center justify-center gap-2 uppercase">
            Know More
            <span className="text-[1rem] font-semibold">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-full h-full   lg:w-[50%] bg-secondaryColor"></div>
    </section>
  )
}
