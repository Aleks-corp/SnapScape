import Image from "next/image"
import Link from "next/link"
import NavBar from "./components/nav-bar/NavBar"
import Hero from "./components/hero/Hero"
import heroBG from "./image/background.webp"
import Tours from "./components/tours/Tours"

export default function Home() {
  return (
    <>
      <header className="flex relative flex-col items-center z-10">
        <div className="w-full absolute z-0">
          <Image
            className="object-cover object-left-top w-full min-w-[90rem] max-w-[120rem]"
            src={heroBG}
            alt="background picture"
            width={1440}
            height={2520}
          />
        </div>
        <NavBar />
      </header>
      <main className="flex relative z-10 flex-col items-center px-11">
        <Hero />
        <Tours />
      </main>
      <footer className="flex min-h-screen flex-col items-center"></footer>
    </>
  )
}
