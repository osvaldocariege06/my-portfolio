export function Header() {
  return (
    <header className="w-full h-[80px] py-8  absolute top-0 left-0">
      <div className="flex flex-col justify-center gap-4 items-center w-full max-w-[1024px] mx-auto lg:justify-between lg:flex-row px-[2rem] ">
        <a href="#" className="text-primaryColor font-semibold text-[1.8rem]">
          OC
        </a>
        <nav className="">
          <ul className="flex gap-4 items-center justify-center">
            <li>
              <a href="#" className="text-primaryColor uppercase">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
