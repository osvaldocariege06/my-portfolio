// ICONS
import { BsArrowRight } from 'react-icons/all'
import {
  biolosOnline1,
  biolosOnline2,
  biolosOnline3,
  biolosOnline4,
} from '../../assets'

export function Card() {
  // interface CardProps {
  //   id: number
  //   image: string
  //   title: string
  //   link: string
  // }

  const data = [
    {
      id: 1,
      image: biolosOnline1,
      title: 'The Vintage 1',
      link: '#',
    },
    {
      id: 2,
      image: biolosOnline2,
      title: 'The Vintage 2',
      link: '#',
    },
    {
      id: 3,
      image: biolosOnline3,
      title: 'The Vintage 3',
      link: '#',
    },
    {
      id: 4,
      image: biolosOnline4,
      title: 'The Vintage 4',
      link: '#',
    },
  ]

  return (
    <>
      {data.map((card) => (
        <div
          className="mx-auto w-full max-w-[500px] border border-transparent rounded z-10 relative flex flex-col items-start hover:border-primaryColor pb-8 transition-all"
          key={card.id}
        >
          <div className="bg-cardColor w-full  max-w-[500px] p-8 lg:h-[390px] rounded mb-4 flex justify-center items-center">
            <img
              src={card.image}
              alt="Image"
              className="w-full max-w-[450px] lg:h-[284px] shadow-md rounded shadow-black"
            />
          </div>
          <h4 className="text-white text-[1.8rem] font-semibold px-4">
            {card.title}
          </h4>
          <a
            href={card.link}
            className="text-primaryColor mt-4 font-semibold flex items-center justify-center gap-2 uppercase px-4"
          >
            Know More
            <span className="text-[1rem] font-semibold">
              <BsArrowRight />
            </span>
          </a>
        </div>
      ))}
    </>
  )
}
