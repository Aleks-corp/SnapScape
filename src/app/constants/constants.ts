import { Cloudinary } from "@cloudinary/url-gen"

import { fill } from "@cloudinary/url-gen/actions/resize"
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners"
import { Position } from "@cloudinary/url-gen/qualifiers/position"
import { compass } from "@cloudinary/url-gen/qualifiers/gravity"
import { source } from "@cloudinary/url-gen/actions/overlay"
import { text } from "@cloudinary/url-gen/qualifiers/source"
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle"

const cld = new Cloudinary({
  cloud: {
    cloudName: "deeooeyeg",
  },
})

export const Tour1Video = cld.video("SnapScape/11-uhd_3840_2160_24fps_lln6ne")
Tour1Video.resize(fill().width(624).height(414))
  .roundCorners(byRadius(28))
  .quality("100")
export const Tour1Image = cld.image("SnapScape/Tour-1_fr9iqh")
Tour1Image.quality("100")
  .resize(fill().width(624).height(414))
  .roundCorners(byRadius(28))
  .overlay(
    source(
      text(
        "Westman Islands it’s a best place to capture\n puffins and rare seabirds!",
        new TextStyle("Poppins_24_style_semibold", 24)
      ).textColor("white")
    ).position(
      new Position().gravity(compass("north_west")).offsetY(23).offsetX(34)
    )
  )

export const Tour2Video = cld.video("SnapScape/22-uhd_3840_2160_24fps_cljwrs")
Tour2Video.resize(fill().width(624).height(200)).roundCorners(byRadius(28))
export const Tour2Image = cld.image("SnapScape/Tour-2_eiiceu")
Tour2Image.quality("100")
  .resize(fill().width(624).height(200))
  .roundCorners(byRadius(28))
  .overlay(
    source(
      text(
        "Volcanic craters, rhyolite mountains, jet\n black sand deserts.",
        new TextStyle("Poppins_24_style_semibold", 24)
      ).textColor("white")
    ).position(
      new Position().gravity(compass("north_west")).offsetY(23).offsetX(34)
    )
  )

export const Tour3Video = cld.video("SnapScape/33-uhd_2560_1440_25fps_d3ds3b")
Tour3Video.resize(fill().width(624).height(200)).roundCorners(byRadius(28))
export const Tour3Image = cld.image("SnapScape/Tour-3_gcnjej")
Tour3Image.quality("100")
  .resize(fill().width(624).height(200))
  .roundCorners(byRadius(28))
  .overlay(
    source(
      text(
        "Glacier Lagoon -it's like being in a candy\n store for photographers.",
        new TextStyle("Poppins_24_style_semibold", 24)
      ).textColor("white")
    ).position(
      new Position().gravity(compass("north_west")).offsetY(23).offsetX(34)
    )
  )

export const Tour4Video = cld.video("SnapScape/44-hd_1920_1080_30fps_peedho")
Tour4Video.resize(fill().width(790).height(524)).quality("100")
export const Tour4Image = cld.image("SnapScape/Tour-4_nwxbxu")
Tour4Image.quality("100")
  .resize(fill().width(790).height(524).gravity(compass("south")))
  .roundCorners(byRadius(28))
