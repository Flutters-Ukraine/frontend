import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GridContainer } from "./title-images-styles"

const TitleImagesComponent = () => {
  return (
    <>
      <GridContainer>
        <StaticImage
          className="p1"
          height={200}
          src="../../images/col5row1.png"
          alt="c7r1"
        />
        <StaticImage
          className="p2"
          height={200}
          src="../../images/col2row1.png"
          alt="c2r1"
        />
        <StaticImage
          className="p3"
          height={200}
          src="../../images/col6row1.png"
          alt="c11r1"
        />

        <StaticImage
          className="p4"
          height={200}
          src="../../images/col3row1.png"
          alt="c3r1"
        />
        <StaticImage
          className="p5"
          height={200}
          src="../../images/col6row2.png"
          alt="c12r1"
        />
        <StaticImage
          className="p6"
          height={200}
          src="../../images/col5row2.png"
          alt="c8r1"
        />
        <StaticImage
          className="p7"
          height={200}
          src="../../images/col4row2.png"
          alt="c6r1"
        />
        <StaticImage
          className="p8"
          height={200}
          src="../../images/col1row1.png"
          alt="c1r1"
        />
        <StaticImage
          className="p9"
          height={200}
          src="../../images/col5row3.png"
          alt="c9r1"
        />
        <StaticImage
          className="p10"
          height={200}
          src="../../images/col5row4.png"
          alt="c10r1"
        />

        <StaticImage
          className="p99"
          height={200}
          src="../../images/col3row2.png"
          alt="c4r1"
        />
        <StaticImage
          className="p100"
          height={200}
          src="../../images/col4row1.png"
          alt="c5r1"
        />

        <StaticImage
          className="p13"
          height={200}
          src="../../images/col6row3.png"
          alt="c13r1"
        />
      </GridContainer>
    </>
  )
}

export default TitleImagesComponent
