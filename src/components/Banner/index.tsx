// ASSTES
import { avatar } from '../../assets/index'

export function Banner() {
  return (
    <section className=" h-full flex justify-center items-center px-[2rem] lg:mt-[8rem]">
      <div className="flex flex-col justify-center gap-[2rem] items-center w-full max-w-[1024px] mx-auto lg:justify-between lg:flex-row mt-[10rem] lg:mt-0  ">
        <div className="w-full max-w-[412px]  flex justify-start items-end">
          <img src={avatar} alt="Avatar" className="w-full max-w-[320px]" />
        </div>
        <div className="w-full max-w-[612px] flex flex-col justify-center items-center lg:justify-start lg:items-start gap-0">
          <h4 className="text-primaryColor font-semibold text-[1.5rem] text-center lg:text-left">
            Hello! I´am Edvaldo
          </h4>
          <h2 className="text-white text-[3rem] font-bold text-center lg:text-left">
            Software Developer
          </h2>
          <p className="text-zinc-400 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nihil
            reiciendis impedit incidunt asperiores, commodi obcaecati veritatis
            architecto itaque. Vero dolorem nihil similique repudiandae
            voluptatum cum eligendi quaerat officia earum!
          </p>
          <button className="w-[150px] mt-8 h-[50px] flex items-center justify-center rounded bg-primaryColor text-white bg-gradient-to-r from-primaryColor to-red-500 hover:from-pink-500 hover:to-red-900 transition-all">
            CV
          </button>
        </div>
      </div>
    </section>
  )
}
