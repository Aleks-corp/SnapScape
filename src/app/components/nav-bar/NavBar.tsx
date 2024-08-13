import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="relative z-10 w-full py-10 px-11">
      <div className="w-full items-center justify-between text-sm lg:flex">
        <Link
          href="/"
          className="inline-flex justify-center items-center rounded-rd-20 p-2 pl-4 bg-btn-w
            shadow-0-0-15-0"
        >
          <Image
            src="./logo.svg"
            alt="Vercel Logo"
            width={46}
            height={46}
            priority
          />
          <p
            className="px-6 py-5 text-dark-color-title text-center text-base font-bold leading-4
              tracking-title-0.4"
          >
            SnapScape
          </p>
        </Link>
        <nav>
          <Link
            href="/"
            className="inline-flex justify-center items-center rounded-rd-20 p-2 pl-4 bg-btn-w
              shadow-0-0-15-0"
          >
            <p
              className="px-6 py-5 text-dark-color-title text-center text-base font-bold leading-4
                tracking-title-0.4"
            >
              Home
            </p>
          </Link>
        </nav>
      </div>
    </div>
  )
}
