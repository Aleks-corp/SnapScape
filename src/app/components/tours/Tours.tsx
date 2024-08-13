"use client"
import Image from "next/image"
import Link from "next/link"
import svg from "../../image/svg/arrow-white.svg"
import { AdvancedVideo } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"

import { fill } from "@cloudinary/url-gen/actions/resize"
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners"
import { useRef } from "react"

export default function Tours() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "deeooeyeg",
    },
  })

  const playerRef = useRef<AdvancedVideo>(null)
  const onMouseOver = () => {
    playerRef?.current?.videoRef?.current?.play()
  }
  const onMouseOut = () => {
    playerRef?.current?.videoRef?.current?.load()
  }

  const myVideo = cld.video("SnapScape/11-uhd_3840_2160_24fps_lln6ne")
  myVideo.resize(fill().width(624).height(415)).roundCorners(byRadius(24))
  const myPoster = cld.image("SnapScape/Vector-1_jel1l0")

  return (
    <div className="w-full bg-main-light-color rounded-rd-64 px-11 pt-14 pb-20 mt-[60rem]">
      <div className="w-full flex justify-between mb-12">
        <p className="text-4xl font-medium leading-10 tracking-title-0.4 text-dark-color-title">
          Explore our recent tours
        </p>
        <p className="w-[28rem] text-xl font-normal leading-6 tracking-title-0.4 text-dark-color-text">
          Check out our recent tours and see the amazing places we-ve visited.
        </p>
      </div>
      <div className="w-[39rem] h-[26rem] grid grid-cols-6 grid-rows-4">
        <div className="w-full bg-black col-start-1 col-end-7 row-start-1 row-end-5 rounded-3xl">
          <AdvancedVideo
            loop
            ref={playerRef}
            cldVid={myVideo}
            cldPoster={myPoster.format("jpg")}
            onFocus={onMouseOver}
            onBlur={onMouseOut}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            preload="auto"
          />
        </div>
        <div
          className="w-full relative flex justify-end items-end bg-transparent col-start-5 col-end-6
            row-start-4 row-end-5"
        >
          <div
            className="w-16 h-16 bg-transparent rounded-br-[3rem] border-b-[1rem] border-r-[1rem]
              border-main-light-color translate-x-4 translate-y-4"
          ></div>
        </div>
        <div
          className="w-full flex justify-end items-end bg-transparent col-start-6 col-end-7
            row-start-3 row-end-4 overflow-hidden"
        >
          <div
            className="w-16 h-16 bg-transparent rounded-br-[3rem] border-b-[1rem] border-r-[1rem]
              border-main-light-color translate-x-4 translate-y-4"
          ></div>
        </div>
        <div
          className="w-full flex justify-center items-center bg-main-light-color col-start-6
            col-end-7 row-start-4 row-end-5 rounded-tl-[3rem]"
        >
          <div
            className="flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-slate-950
              rounded-[5rem]"
          >
            <Image src={svg} width={30} height={30} alt="arrow" />
          </div>
        </div>
        {/* <div className="w-full bg-black"></div>
        <div className="w-full bg-black"></div>
        <div className="w-full bg-black"></div> */}
      </div>
    </div>
  )
}
