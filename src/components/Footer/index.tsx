// ICONS
import {
  BsFacebook,
  BsGithub,
  BsWhatsapp,
  BsLinkedin,
  BsHeartFill,
} from 'react-icons/all'

export function Footer() {
  return (
    <footer className="mt-[8rem] flex flex-col gap-8">
      <div className="bg-secondaryColor w-full flex flex-col  items-center px-[2rem] lg:px-0">
        <div className="flex flex-col   justify-start lg:justify-between gap-[1rem]  items-center w-full max-w-[1024px] mx-auto  lg:flex-row   relative z-10 py-[2rem] ">
          <a
            href="#"
            className="text-primaryColor font-semibold text-[1.8rem] "
          >
            OC
          </a>
          <div className="flex gap-8 items-center justify-end lg:justify-center ">
            <span className="  text-primaryColor rounded-full h-[40px] w-[40px] flex justify-center items-center text-[1.6rem]">
              <BsFacebook />
            </span>
            <span className="  text-primaryColor rounded-full h-[40px] w-[40px] flex justify-center items-center text-[1.6rem]">
              <BsGithub />
            </span>
            <span className="  text-primaryColor rounded-full h-[40px] w-[40px] flex justify-center items-center text-[1.6rem]">
              <BsLinkedin />
            </span>
            <span className="  text-primaryColor rounded-full h-[40px] w-[40px] flex justify-center items-center text-[1.6rem]">
              <BsWhatsapp />
            </span>
          </div>
          <p className="flex items-center justify-center gap-2 text-white mt-[2rem] lg:mt-0 ">
            <span className="text-primaryColor">
              <BsHeartFill />
            </span>
            Created by Osvald Cariege
          </p>
        </div>
      </div>
    </footer>
  )
}
