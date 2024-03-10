import React from 'react'

const Accordion = ({ title, answer }) => {
  const [active, setActive] = React.useState(false)
  return (
    <div
      className="bg-white"
      onClick={() => setActive(prev => !prev)}
    >
      <div className={`text-lg font-medium flex px-6 py-4 cursor-pointer
      justify-between items-center border-2 ${active ? 'bg-black border-black' : ''} hover:border-black duration-300`}>
        <span className={`${active ? 'text-white' : ''}`}>{title}</span>
        <svg
          className={`fill-black shrink-0 ml-8 ${active && 'fill-white'}`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${active && "!rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${active && "!rotate-180"
              }`}
          />
        </svg>
      </div>
      <p className={`py-0 px-6 bg-[#e9e9e9] overflow-hidden max-h-0 ${active ? 'max-h-[400px] py-4' : ''} duration-300 ease-in `}>
        {answer}
      </p>
    </div>
  )
}

export default Accordion