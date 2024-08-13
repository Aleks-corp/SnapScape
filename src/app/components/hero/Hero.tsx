import Image from "next/image"
import Link from "next/link"
import svg from "../../image/svg/arrow-right.svg"

export default function Hero() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-7xl font-bold leading-tight tracking-h1 text-dark-color-title mt-44">
        Your adventure <br /> in Iceland begins here
      </h1>
      <div className="w-[38rem] h-1 bg-dark-color-title"></div>
      <p className="w-[38rem] text-2xl font-normal leading-tight tracking-h1 text-dark-color-text">
        Experience the unique culture and natural wonders that make Iceland a
        true adventure destination.
      </p>
      <div className="flex gap-3 mt-8">
        <button
          className="inline-flex justify-center items-center rounded-xl px-6 py-5 bg-main-light-color"
          type="button"
        >
          <p className="text-dark-color-title text-base font-semibold mr-2">
            Book now
          </p>
          <Image src={svg} alt="arrow right" width={20} height={20} priority />
        </button>
        <button
          className="inline-flex justify-center items-center rounded-xl px-6 py-5 bg-transparent
            border-2 border-dark-color-text"
          type="button"
        >
          <p className="text-dark-color-text text-base font-semibold mr-2">
            Contact us
          </p>
        </button>
      </div>
    </div>
  )
}
