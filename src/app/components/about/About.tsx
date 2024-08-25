import Image from "next/image"
import Link from "next/link"
import svg from "../../image/svg/arrow-right.svg"
import ImageTour4 from "../../image/tours/Tour4.webp"

export default function About() {
  return (
    <div className="flex gap-6 w-full mt-36 max-w-[90rem] px-11">
      <div className="flex-1 ml-[52px]">
        <p
          className="w-[600px] mb-20 text-main-light-color text-[40px] font-medium tracking-title-0.4
            leading-tight"
        >
          We&apos;ve traveled all over Iceland countless times
        </p>
        <p className="mb-10 text-main-light-color text-xl font-light leading-relaxed">
          Hi there! We&apos;re SnapScape, a team of Icelandic professional
          landscape photographers. Since 2013, we&apos;ve been guiding small
          group and private photography tours across Iceland, and since 2019, in
          the Faroe Islands and Lofoten, Norway.
        </p>
        <p className="text-main-light-color text-xl font-light leading-relaxed">
          As an authorized travel agency since 2017, we are dedicated to
          delivering exceptional photography experiences, helping you capture
          breathtaking landscapes like never before. Our knowledgeable guides
          are passionate about sharing their expertise and love for photography,
          ensuring you return home with not just photos, but unforgettable
          memories. Join us to explore and photograph the world&apos;s most
          stunning scenery!
        </p>
      </div>
      <div className="flex-1">
        <video
          className="w-full h-[580px] rounded-rd-28 object-cover object-bottom"
          width="750"
          loop
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/deeooeyeg/video/upload/v1724594524/SnapScape/about-881022161_tiny_oy4rrr.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
}
