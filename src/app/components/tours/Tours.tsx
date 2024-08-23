"use client"
import Image from "next/image"
import Link from "next/link"
import svg from "../../image/svg/arrow-white.svg"
import { useRef } from "react"
import ImageTour1 from "../../image/tours/Tour1.webp"
import ImageTour2 from "../../image/tours/Tour2.webp"
import ImageTour3 from "../../image/tours/Tour3.webp"
import ImageTour4 from "../../image/tours/Tour4.webp"
import ImageTour5 from "../../image/tours/Tour5.webp"
import ImageTour6 from "../../image/tours/Tour6.webp"
import ImageTour7 from "../../image/tours/Tour7.webp"
import { handleMouseOver, handleMouseOut } from "@/app/helpers/toursMouseEvent"
import "./Tours.css"

import Flicking, { ViewportSlot } from "@egjs/react-flicking"
import "@egjs/react-flicking/dist/flicking.css"
import { AutoPlay, Pagination } from "@egjs/flicking-plugins"

export default function Tours() {
  const imgRef1 = useRef<HTMLImageElement | null>(null)
  const playerRef1 = useRef<HTMLVideoElement | null>(null)

  const imgRef2 = useRef<HTMLImageElement | null>(null)
  const playerRef2 = useRef<HTMLVideoElement | null>(null)

  const imgRef3 = useRef<HTMLImageElement | null>(null)
  const playerRef3 = useRef<HTMLVideoElement | null>(null)

  const imgRef4 = useRef<HTMLImageElement | null>(null)
  const playerRef4 = useRef<HTMLVideoElement | null>(null)

  const imgRef5 = useRef<HTMLImageElement | null>(null)
  const playerRef5 = useRef<HTMLVideoElement | null>(null)

  const imgRef6 = useRef<HTMLImageElement | null>(null)
  const playerRef6 = useRef<HTMLVideoElement | null>(null)

  const imgRef7 = useRef<HTMLImageElement | null>(null)
  const playerRef7 = useRef<HTMLVideoElement | null>(null)

  const imageRefs = [
    imgRef1,
    imgRef2,
    imgRef3,
    imgRef4,
    imgRef5,
    imgRef6,
    imgRef7,
  ]
  const videoRefs = [
    playerRef1,
    playerRef2,
    playerRef3,
    playerRef4,
    playerRef5,
    playerRef6,
    playerRef7,
  ]

  const imageFlickingRef = useRef<Flicking | null>(null)
  const textFlickingRef = useRef<Flicking | null>(null)

  const syncSliders = () => {
    if (imageFlickingRef.current && textFlickingRef.current) {
      const currentIndex = imageFlickingRef.current.currentPanel?.index
      const totalSlides = imageFlickingRef.current.panels.length
      if (currentIndex !== undefined) {
        const nextIndex = (currentIndex + 1) % totalSlides
        textFlickingRef.current.moveTo(nextIndex)
      }
    }
  }

  const pluginsImage = new AutoPlay({
    duration: 5000,
    direction: "NEXT",
    stopOnHover: true,
  })

  const pluginsText = new Pagination({ type: "bullet" })

  const stopOnHover = () => {
    pluginsImage.stop()
  }
  const startOnBlur = () => {
    pluginsImage.play()
  }
  return (
    <div
      className="flex flex-col items-center bg-main-light-color rounded-rd-64 px-11 pt-14 pb-20
        mt-[60rem]"
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
      <div className="flex h-[414px] gap-3.5">
        <div className="relative rounded-rd-28 overflow-hidden block-1">
          <p
            className="absolute top-6 left-8 w-[500px] text-white text-2xl font-semibold
              tracking-tour-text leading-tight drop-shadow-tour-text"
          >
            Westman Islands it&apos;s a best place to capture puffins and rare
            seabirds!
          </p>
          <Image
            ref={imgRef1}
            className="w-[624px] h-[414px] rounded-rd-28 object-cover object-center"
            src={ImageTour1}
            width={624}
            height={414}
            alt="puffin"
            style={{
              display: "block",
            }}
          />
          <video
            ref={playerRef1}
            className="w-[624px] h-[414px] rounded-rd-28 object-cover object-center"
            width="624"
            loop
            style={{ display: "none" }}
          >
            <source
              src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579619/SnapScape/11-uhd_3840_2160_24fps_lln6ne.mp4"
              type="video/mp4"
            />
          </video>
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
        <div className="flex flex-col basis-auto gap-3.5">
          <div className="relative rounded-rd-28 block-2">
            <p
              className="absolute top-6 left-8 w-[500px] text-white text-2xl font-semibold
                tracking-tour-text leading-tight drop-shadow-tour-text"
            >
              Volcanic craters, rhyolite mountains, jet black sand deserts.
            </p>
            <Image
              className="w-[624px] h-[200px] rounded-rd-28 object-cover object-center"
              ref={imgRef2}
              src={ImageTour2}
              width={624}
              height={200}
              alt="puffin"
              style={{
                display: "block",
              }}
            />
            <video
              ref={playerRef2}
              className="w-[624px] h-[200px] rounded-rd-28 object-cover object-center"
              width="624"
              loop
              style={{ display: "none" }}
            >
              <source
                src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579626/SnapScape/22-uhd_3840_2160_24fps_cljwrs.mp4"
                type="video/mp4"
              />
            </video>
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
          <div className="relative rounded-rd-28 overflow-hidden block-3">
            <p
              className="absolute top-6 left-8 w-[500px] text-white text-2xl font-semibold
                tracking-tour-text leading-tight drop-shadow-tour-text"
            >
              Glacier Lagoon -it&apos;s like being in a candy store for
              photographers.
            </p>
            <Image
              className="w-[624px] h-[200px] rounded-rd-28 object-cover object-center"
              ref={imgRef3}
              src={ImageTour3}
              width={624}
              height={200}
              alt="puffin"
              style={{
                display: "block",
              }}
            />
            <video
              ref={playerRef3}
              className="w-[624px] h-[200px] rounded-rd-28 object-cover object-bottom"
              width="624"
              loop
              style={{ display: "none" }}
            >
              <source
                src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579611/SnapScape/33-uhd_2560_1440_25fps_d3ds3b.mp4"
                type="video/mp4"
              />
            </video>
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
      <div className="flex mt-3.5 gap-3.5">
        <Flicking
          plugins={[pluginsImage]}
          ref={imageFlickingRef}
          onMoveStart={syncSliders}
          align="prev"
          circular={true}
          gap={10}
          className="w-[790px] h-[524px] rounded-rd-28 overflow-hidden"
        >
          <div className="block-4">
            <Image
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-bottom"
              ref={imgRef4}
              src={ImageTour4}
              width={790}
              height={524}
              alt="puffin"
              style={{
                display: "block",
              }}
            />
            <video
              ref={playerRef4}
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-bottom"
              width="790"
              loop
              style={{ display: "none" }}
            >
              <source
                src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579615/SnapScape/44-hd_1920_1080_30fps_peedho.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="block-5">
            <Image
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-center"
              ref={imgRef5}
              src={ImageTour5}
              width={790}
              height={524}
              alt="puffin"
              style={{
                display: "block",
              }}
            />
            <video
              ref={playerRef5}
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-bottom"
              width="790"
              loop
              style={{ display: "none" }}
            >
              <source
                src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579615/SnapScape/44-hd_1920_1080_30fps_peedho.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="block-6">
            <Image
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-bottom"
              ref={imgRef6}
              src={ImageTour6}
              width={790}
              height={524}
              alt="puffin"
              style={{
                display: "block",
              }}
            />
            <video
              ref={playerRef6}
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-bottom"
              width="790"
              loop
              style={{ display: "none" }}
            >
              <source
                src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579615/SnapScape/44-hd_1920_1080_30fps_peedho.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="block-7">
            <Image
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-center"
              ref={imgRef7}
              src={ImageTour7}
              width={790}
              height={524}
              alt="puffin"
              style={{
                display: "block",
              }}
            />
            <video
              ref={playerRef7}
              className="w-[790px] h-[524px] rounded-rd-28 object-cover object-bottom"
              width="790"
              loop
              style={{ display: "none" }}
            >
              <source
                src="https://res.cloudinary.com/deeooeyeg/video/upload/v1723579615/SnapScape/44-hd_1920_1080_30fps_peedho.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Flicking>

        <div className="relative w-[450px] h-[524px] bg-[#E4E4DC] rounded-rd-28 overflow-hidden">
          <div
            onFocus={stopOnHover}
            onBlur={startOnBlur}
            onMouseOver={stopOnHover}
            onMouseOut={startOnBlur}
            className="relative w-[450px] h-[524px] bg-[#E4E4DC] rounded-rd-28 overflow-hidden"
          >
            <Flicking
              plugins={[pluginsText]}
              ref={textFlickingRef}
              onMovestart={syncSliders}
              align="center"
              circular={true}
              gap={10}
              className="w-[400px] h-[500px]"
            >
              <div className="w-[400px] h-[500px] py-6 px-6">
                <p
                  className="inline-flex px-4 py-1 mb-6 border-[1px] rounded-rd-28 border-dark-color-text
                    text-dark-color-title text-sm font-normal tracking-tour-desc leading-snug"
                >
                  Multi days
                </p>
                <p
                  className="w-80 mb-4 text-dark-color-title text-[32px] font-normal tracking-tour-desc
                    leading-tight"
                >
                  Golden Circle & Magical Nights
                </p>
                <p className="w-80 text-dark-color-text text-base font-normal tracking-tour-desc leading-tight">
                  A day tour full of activities that will delight all of your
                  senses. Visit the famous trio that make up the Golden Circle:
                  Þingvellir National Park, Geysir and Gullfoss waterfall.
                  Finish this adventure filled day with a hunt for the Northern
                  Lights.
                </p>
              </div>
              <div className="w-[400px] h-[500px] py-6 px-6">
                <p
                  className="inline-flex px-4 py-1 mb-6 border-[1px] rounded-rd-28 border-dark-color-text
                    text-dark-color-title text-sm font-normal tracking-tour-desc leading-snug"
                >
                  Single day
                </p>
                <p
                  className="w-80 mb-4 text-dark-color-title text-[32px] font-normal tracking-tour-desc
                    leading-tight"
                >
                  Reynisfjara Beach & Basalt columns
                </p>
                <p className="w-80 text-dark-color-text text-base font-normal tracking-tour-desc leading-tight">
                  Join us on an unforgettable photography adventure to
                  Reynisfjara Beach, Iceland’s iconic black sand wonder! Capture
                  stunning shots of towering basalt columns, crashing waves, and
                  mysterious sea stacks.
                  <span className="font-semibold">
                    {" "}
                    Book now and get a 10% discount{" "}
                  </span>
                  – your perfect photo awaits!
                </p>
              </div>
              <div className="w-[400px] h-[500px] py-6 px-6">
                <p
                  className="inline-flex px-4 py-1 mb-6 border-[1px] rounded-rd-28 border-dark-color-text
                    text-dark-color-title text-sm font-normal tracking-tour-desc leading-snug"
                >
                  Single day
                </p>
                <p
                  className="w-80 mb-4 text-dark-color-title text-[32px] font-normal tracking-tour-desc
                    leading-tight"
                >
                  Seljalandsfoss & Waterfall Wonders
                </p>
                <p className="w-80 text-dark-color-text text-base font-normal tracking-tour-desc leading-tight">
                  Experience the magic of Seljalandsfoss, one of Iceland’s most
                  breathtaking waterfalls! Snap stunning photos from behind the
                  cascade and explore the surrounding natural beauty.
                  <span className="font-semibold">
                    {" "}
                    Book today and enjoy a 10% discount{" "}
                  </span>
                  – adventure and amazing shots guaranteed!
                </p>
              </div>
              <div className="w-[400px] h-[500px] py-6 px-6">
                <p
                  className="inline-flex px-4 py-1 mb-6 border-[1px] rounded-rd-28 border-dark-color-text
                    text-dark-color-title text-sm font-normal tracking-tour-desc leading-snug"
                >
                  Multi days
                </p>
                <p
                  className="w-80 mb-4 text-dark-color-title text-[32px] font-normal tracking-tour-desc
                    leading-tight"
                >
                  Kirkjufell & Mystic Landscapes
                </p>
                <p className="w-80 text-dark-color-text text-base font-normal tracking-tour-desc leading-tight">
                  Discover the enchanting beauty of Kirkjufell Mountain, one of
                  Iceland’s most iconic landmarks. Capture breathtaking photos
                  of its unique shape alongside the stunning Kirkjufellsfoss
                  waterfall.
                  <span className="font-semibold">
                    {" "}
                    Book now and enjoy a special 15% discount{" "}
                  </span>
                  on this magical photography tour – don’t miss out on this
                  limited-time offer!
                </p>
              </div>
              <ViewportSlot>
                <div className="flicking-pagination" />
              </ViewportSlot>
            </Flicking>
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
    </div>
  )
}
