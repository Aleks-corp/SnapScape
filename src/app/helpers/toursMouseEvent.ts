import { AdvancedVideo, AdvancedImage } from "@cloudinary/react"
import { MutableRefObject, SyntheticEvent } from "react"
interface EventProps {
  e: SyntheticEvent
  imageRefs: MutableRefObject<HTMLImageElement | null>[]
  videoRefs: MutableRefObject<HTMLVideoElement | null>[]
}

export const handleMouseOver = ({ e, imageRefs, videoRefs }: EventProps) => {
  const [imgRef1, imgRef2, imgRef3, imgRef4, imgRef5, imgRef6, imgRef7] =
    imageRefs
  const [
    playerRef1,
    playerRef2,
    playerRef3,
    playerRef4,
    playerRef5,
    playerRef6,
    playerRef7,
  ] = videoRefs
  const target = e.target as HTMLElement

  if (imgRef1.current && playerRef1.current && target.closest(".block-1")) {
    imgRef1.current.style.display = "none"
    playerRef1.current.style.display = "block"
    playerRef1.current.play()
  } else if (
    imgRef2.current &&
    playerRef2.current &&
    target.closest(".block-2")
  ) {
    imgRef2.current.style.display = "none"
    playerRef2.current.style.display = "block"
    playerRef2.current.play()
  } else if (
    imgRef3.current &&
    playerRef3.current &&
    target.closest(".block-3")
  ) {
    imgRef3.current.style.display = "none"
    playerRef3.current.style.display = "block"
    playerRef3.current.play()
  } else if (
    imgRef4.current &&
    playerRef4.current &&
    target.closest(".block-4")
  ) {
    imgRef4.current.style.display = "none"
    playerRef4.current.style.display = "block"
    playerRef4.current.play()
  } else if (
    imgRef5.current &&
    playerRef5.current &&
    target.closest(".block-5")
  ) {
    imgRef5.current.style.display = "none"
    playerRef5.current.style.display = "block"
    playerRef5.current.play()
  } else if (
    imgRef6.current &&
    playerRef6.current &&
    target.closest(".block-6")
  ) {
    imgRef6.current.style.display = "none"
    playerRef6.current.style.display = "block"
    playerRef6.current.play()
  } else if (
    imgRef7.current &&
    playerRef7.current &&
    target.closest(".block-7")
  ) {
    imgRef7.current.style.display = "none"
    playerRef7.current.style.display = "block"
    playerRef7.current.play()
  }
}

export const handleMouseOut = ({ e, imageRefs, videoRefs }: EventProps) => {
  const [imgRef1, imgRef2, imgRef3, imgRef4, imgRef5, imgRef6, imgRef7] =
    imageRefs
  const [
    playerRef1,
    playerRef2,
    playerRef3,
    playerRef4,
    playerRef5,
    playerRef6,
    playerRef7,
  ] = videoRefs
  const target = e.target as HTMLElement

  if (imgRef1.current && playerRef1.current && target.closest(".block-1")) {
    playerRef1.current.style.display = "none"
    playerRef1.current.pause()
    playerRef1.current.currentTime = 0
    imgRef1.current.style.display = "block"
  } else if (
    imgRef2.current &&
    playerRef2.current &&
    target.closest(".block-2")
  ) {
    playerRef2.current.style.display = "none"
    playerRef2.current.pause()
    playerRef2.current.currentTime = 0
    imgRef2.current.style.display = "block"
  } else if (
    imgRef3.current &&
    playerRef3.current &&
    target.closest(".block-3")
  ) {
    playerRef3.current.style.display = "none"
    playerRef3.current.pause()
    playerRef3.current.currentTime = 0
    imgRef3.current.style.display = "block"
  } else if (
    imgRef4.current &&
    playerRef4.current &&
    target.closest(".block-4")
  ) {
    playerRef4.current.style.display = "none"
    playerRef4.current.pause()
    playerRef4.current.currentTime = 0
    imgRef4.current.style.display = "block"
  } else if (
    imgRef5.current &&
    playerRef5.current &&
    target.closest(".block-5")
  ) {
    playerRef5.current.style.display = "none"
    playerRef5.current.pause()
    playerRef5.current.currentTime = 0
    imgRef5.current.style.display = "block"
  } else if (
    imgRef6.current &&
    playerRef6.current &&
    target.closest(".block-6")
  ) {
    playerRef6.current.style.display = "none"
    playerRef6.current.pause()
    playerRef6.current.currentTime = 0
    imgRef6.current.style.display = "block"
  } else if (
    imgRef7.current &&
    playerRef7.current &&
    target.closest(".block-7")
  ) {
    playerRef7.current.style.display = "none"
    playerRef7.current.pause()
    playerRef7.current.currentTime = 0
    imgRef7.current.style.display = "block"
  }
}
