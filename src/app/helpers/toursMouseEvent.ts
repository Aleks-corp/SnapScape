import { AdvancedVideo, AdvancedImage } from "@cloudinary/react"
import { MutableRefObject, SyntheticEvent } from "react"
interface EventProps {
  e: SyntheticEvent
  imageRefs: MutableRefObject<AdvancedImage | null>[]
  videoRefs: MutableRefObject<AdvancedVideo | null>[]
}

export const handleMouseOver = ({ e, imageRefs, videoRefs }: EventProps) => {
  const [imgRef1, imgRef2, imgRef3, imgRef4] = imageRefs
  const [playerRef1, playerRef2, playerRef3, playerRef4] = videoRefs
  const target = e.target as HTMLElement

  if (imgRef1.current && playerRef1.current && target.closest(".block-1")) {
    if (
      playerRef1.current.videoRef.current &&
      imgRef1.current.imageRef.current
    ) {
      imgRef1.current.imageRef.current.style.display = "none"
      playerRef1.current.videoRef.current.style.display = "block"
      playerRef1.current.videoRef.current.play()
    }
  } else if (
    imgRef2.current &&
    playerRef2.current &&
    target.closest(".block-2")
  ) {
    if (
      playerRef2.current.videoRef.current &&
      imgRef2.current.imageRef.current
    ) {
      imgRef2.current.imageRef.current.style.display = "none"
      playerRef2.current.videoRef.current.style.display = "block"
      playerRef2.current.videoRef.current.play()
    }
  } else if (
    imgRef3.current &&
    playerRef3.current &&
    target.closest(".block-3")
  ) {
    if (
      playerRef3.current.videoRef.current &&
      imgRef3.current.imageRef.current
    ) {
      imgRef3.current.imageRef.current.style.display = "none"
      playerRef3.current.videoRef.current.style.display = "block"
      playerRef3.current.videoRef.current.play()
    }
  } else if (
    imgRef4.current &&
    playerRef4.current &&
    target.closest(".block-4")
  ) {
    if (
      playerRef4.current.videoRef.current &&
      imgRef4.current.imageRef.current
    ) {
      imgRef4.current.imageRef.current.style.display = "none"
      playerRef4.current.videoRef.current.style.display = "block"
      playerRef4.current.videoRef.current.play()
    }
  }
}

export const handleMouseOut = ({ e, imageRefs, videoRefs }: EventProps) => {
  const [imgRef1, imgRef2, imgRef3, imgRef4] = imageRefs
  const [playerRef1, playerRef2, playerRef3, playerRef4] = videoRefs
  const target = e.target as HTMLElement

  if (imgRef1.current && playerRef1.current && target.closest(".block-1")) {
    if (
      playerRef1.current.videoRef.current &&
      imgRef1.current.imageRef.current
    ) {
      playerRef1.current.videoRef.current.style.display = "none"
      playerRef1.current.videoRef.current.pause()
      playerRef1.current.videoRef.current.currentTime = 0
      imgRef1.current.imageRef.current.style.display = "block"
    }
  } else if (
    imgRef2.current &&
    playerRef2.current &&
    target.closest(".block-2")
  ) {
    if (
      playerRef2.current.videoRef.current &&
      imgRef2.current.imageRef.current
    ) {
      playerRef2.current.videoRef.current.style.display = "none"
      playerRef2.current.videoRef.current.pause()
      playerRef2.current.videoRef.current.currentTime = 0
      imgRef2.current.imageRef.current.style.display = "block"
    }
  } else if (
    imgRef3.current &&
    playerRef3.current &&
    target.closest(".block-3")
  ) {
    if (
      playerRef3.current.videoRef.current &&
      imgRef3.current.imageRef.current
    ) {
      playerRef3.current.videoRef.current.style.display = "none"
      playerRef3.current.videoRef.current.pause()
      playerRef3.current.videoRef.current.currentTime = 0
      imgRef3.current.imageRef.current.style.display = "block"
    }
  } else if (
    imgRef4.current &&
    playerRef4.current &&
    target.closest(".block-4")
  ) {
    if (
      playerRef4.current.videoRef.current &&
      imgRef4.current.imageRef.current
    ) {
      playerRef4.current.videoRef.current.style.display = "none"
      playerRef4.current.videoRef.current.pause()
      playerRef4.current.videoRef.current.currentTime = 0
      imgRef4.current.imageRef.current.style.display = "block"
    }
  }
}
