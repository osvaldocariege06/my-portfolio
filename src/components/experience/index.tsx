// Icons

export function Experience() {
  return (
    <section className="relative w-full  lg:mt-0 px-[2rem] lg:px-0">
      <div className="flex flex-wrap justify-center  items-center w-full max-w-[1024px] mx-auto  lg:flex-row lg:justify-between relative z-10 pb-[6rem] gap-6 lg:gap-2">
        <div className="flex flex-col justify-center items-center gap-0 w-full max-w-[321px]">
          <h1 className="text-primaryColor text-[10rem] font-bold leading-[10rem] ">
            4
          </h1>
          <span className="text-white font-semibold text-[1.8rem]">
            Years Experience
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center  gap-[2rem] w-full max-w-[682px]">
          <div className="bg-cardColor w-full max-w-[147px] sm:max-w-[320px] p-[3rem] py-4 rounded flex flex-col items-center justify-center gap-1 h-[130px] ">
            <h4 className="text-primaryColor font-bold text-[1.8rem]">10+</h4>
            <p className="text-zinc-300">Clients</p>
          </div>
          <div className="bg-cardColor w-full max-w-[147px] sm:max-w-[320px] p-[3rem] py-4 rounded flex flex-col items-center justify-center gap-1 h-[130px]">
            <h4 className="text-primaryColor font-bold text-[1.8rem]">15+</h4>
            <p className="text-zinc-300 text-center">Completed Projects</p>
          </div>
          <div className="bg-cardColor w-full max-w-[147px] sm:max-w-[320px] p-[3rem] py-4 rounded flex flex-col items-center justify-center gap-1 h-[130px]">
            <h4 className="text-primaryColor font-bold text-[1.8rem]">10+</h4>
            <p className="text-zinc-300 text-center">Clients</p>
          </div>
          <div className="bg-cardColor w-full max-w-[147px] sm:max-w-[320px] p-[3rem] py-4 rounded flex flex-col items-center justify-center gap-1 h-[130px]">
            <h4 className="text-primaryColor font-bold text-[1.8rem]">15+</h4>
            <p className="text-zinc-300 text-center">Completed Projects</p>
          </div>
        </div>
      </div>
      <div className="  absolute left-0 top-0 bottom-0 w-full h-full   lg:w-[50%] bg-secondaryColor"></div>
    </section>
  )
}
