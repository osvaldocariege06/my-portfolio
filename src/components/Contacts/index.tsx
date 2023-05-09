export function Contacts() {
  return (
    <section className="relative mt-[8rem]">
      <div className="absolute left-0 top-[-30rem] w-full h-[70vh] bg-secondaryColor"></div>
      <div className="bg-cardColor flex flex-wrap justify-center  items-center w-full max-w-[1024px] mx-auto  lg:flex-row lg:justify-between relative z-10 pb-[6rem] gap-6 lg:gap-2 py-[4rem] px-10">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-white font-bold text-[3rem] w-full max-w-[540px]">
            Let´s work together on your next project
          </h1>
          <p className="text-zinc-300 w-full max-w-[540px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            laboriosam reiciendis eum, vero corrupti eligendi laborum! Delectus
            impedit, nulla exercitationem ea modi temporibus.
          </p>
        </div>
        <button className="w-full lg:w-[160px] mt-8 h-[60px] flex items-center justify-center rounded bg-primaryColor  text-white transition-all">
          Contact
        </button>
      </div>
    </section>
  )
}
