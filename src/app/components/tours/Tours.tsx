"use client"
import Image from "next/image"
import Link from "next/link"
import svg from "../../image/svg/arrow-white.svg"
import { AdvancedVideo, AdvancedImage } from "@cloudinary/react"
import { useRef } from "react"
import {
  Tour1Image,
  Tour1Video,
  Tour2Image,
  Tour2Video,
  Tour3Image,
  Tour3Video,
  Tour4Image,
  Tour4Video,
} from "@/app/constants/constants"
import { handleMouseOver, handleMouseOut } from "@/app/helpers/toursMouseEvent"

export default function Tours() {
  const imgRef1 = useRef<AdvancedImage | null>(null)
  const playerRef1 = useRef<AdvancedVideo | null>(null)

  const imgRef2 = useRef<AdvancedImage | null>(null)
  const playerRef2 = useRef<AdvancedVideo | null>(null)

  const imgRef3 = useRef<AdvancedImage | null>(null)
  const playerRef3 = useRef<AdvancedVideo | null>(null)

  const imgRef4 = useRef<AdvancedImage | null>(null)
  const playerRef4 = useRef<AdvancedVideo | null>(null)

  const imageRefs = [imgRef1, imgRef2, imgRef3, imgRef4]
  const videoRefs = [playerRef1, playerRef2, playerRef3, playerRef4]

  return (
    <div
      className="w-full bg-main-light-color rounded-rd-64 px-11 pt-14 pb-20 mt-[60rem]"
      onFocus={(e) => handleMouseOver({ e, imageRefs, videoRefs })}
      onBlur={(e) => handleMouseOut({ e, imageRefs, videoRefs })}
      onMouseOver={(e) => handleMouseOver({ e, imageRefs, videoRefs })}
      onMouseOut={(e) => handleMouseOut({ e, imageRefs, videoRefs })}
    >
      <div className="w-full flex justify-between mb-12">
        <p className="text-4xl font-medium leading-10 tracking-title-0.4 text-dark-color-title">
          Explore our recent tours
        </p>
        <p className="w-[28rem] text-xl font-normal leading-6 tracking-title-0.4 text-dark-color-text">
          Check out our recent tours and see the amazing places we-ve visited.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3.5">
        <div
          className="relative row-start-1 row-end-3 col-start-1 col-end-2 rounded-rd-28
            overflow-hidden block-1"
        >
          <AdvancedImage
            cldImg={Tour1Image}
            cloud_name="deeooeyeg"
            ref={imgRef1}
            alt="Puffin"
            style={{ display: "block" }}
          />
          <AdvancedVideo
            loop
            ref={playerRef1}
            cldVid={Tour1Video}
            preload="auto"
            style={{ display: "none" }}
          />
          <div
            className="w-[86px] h-[86px] absolute flex bottom-0 right-0 justify-end items-end
              bg-main-light-color rounded-tl-rd-50"
          >
            <div className="absolute bottom-0 -left-[28px] w-[28px] h-[28px] bg-corner-tour"></div>
            <div className="absolute -top-[28px] right-0 w-[28px] h-[28px] bg-corner-tour"></div>
            <div
              className="flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-slate-950
                rounded-[4.5rem]"
            >
              <Image src={svg} width={30} height={30} alt="arrow" />
            </div>
          </div>
        </div>
        <div
          className="relative row-start-1 row-end-2 col-start-2 col-end-3 rounded-rd-28
            overflow-hidden block-2"
        >
          <AdvancedImage
            cldImg={Tour2Image}
            cloud_name="deeooeyeg"
            ref={imgRef2}
            alt="Mount"
            style={{ display: "block" }}
          />
          <AdvancedVideo
            loop
            ref={playerRef2}
            cldVid={Tour2Video}
            preload="auto"
            style={{ display: "none" }}
          />
          <div
            className="w-[86px] h-[86px] absolute flex bottom-0 right-0 justify-end items-end
              bg-main-light-color rounded-tl-rd-50"
          >
            <div className="absolute bottom-0 -left-[28px] w-[28px] h-[28px] bg-corner-tour"></div>
            <div className="absolute -top-[28px] right-0 w-[28px] h-[28px] bg-corner-tour"></div>
            <div
              className="flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-slate-950
                rounded-[4.5rem]"
            >
              <Image src={svg} width={30} height={30} alt="arrow" />
            </div>
          </div>
        </div>
        <div
          className="relative row-start-2 row-end-3 col-start-2 col-end-3 rounded-rd-28
            overflow-hidden block-3"
        >
          <AdvancedImage
            cldImg={Tour3Image}
            cloud_name="deeooeyeg"
            ref={imgRef3}
            alt="Mount"
            style={{ display: "block" }}
          />
          <AdvancedVideo
            loop
            ref={playerRef3}
            cldVid={Tour3Video}
            preload="auto"
            style={{ display: "none" }}
          />
          <div
            className="w-[86px] h-[86px] absolute flex bottom-0 right-0 justify-end items-end
              bg-main-light-color rounded-tl-rd-50"
          >
            <div className="absolute bottom-0 -left-[28px] w-[28px] h-[28px] bg-corner-tour"></div>
            <div className="absolute -top-[28px] right-0 w-[28px] h-[28px] bg-corner-tour"></div>
            <div
              className="flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-slate-950
                rounded-[4.5rem]"
            >
              <Image src={svg} width={30} height={30} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3.5 gap-3.5">
        <div className="w-[790px] h-[524px] rounded-rd-28 overflow-hidden block-4">
          <AdvancedImage
            cldImg={Tour4Image}
            cloud_name="deeooeyeg"
            ref={imgRef4}
            alt="sky"
            style={{
              display: "block",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
          <AdvancedVideo
            loop
            ref={playerRef4}
            cldVid={Tour4Video}
            style={{ display: "none" }}
          />
        </div>
        <div className="relative w-[450px] h-[524px] bg-[#E4E4DC] rounded-rd-28 overflow-hidden">
          <div
            className="w-[86px] h-[86px] absolute flex bottom-0 right-0 justify-end items-end
              bg-main-light-color rounded-tl-rd-50"
          >
            <div className="absolute bottom-0 -left-[28px] w-[28px] h-[28px] bg-corner-tour"></div>
            <div className="absolute -top-[28px] right-0 w-[28px] h-[28px] bg-corner-tour"></div>
            <div
              className="flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-slate-950
                rounded-[4.5rem]"
            >
              <Image src={svg} width={30} height={30} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
