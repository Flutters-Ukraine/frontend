import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  GridContainer,
  ActionTextWrapper,
  ActionText,
} from "../want-to-be-client-component/want-to-be-client-styles"

const WantToBeClientComponent = () => {
  return (
    <>
      <GridContainer>
        <StaticImage
          className="p1"
          src="../../images/row1col1.png"
          alt="c7r1"
        />
        <StaticImage
          className="p2"
          src="../../images/row1col2.png"
          alt="c7r1"
        />
        <StaticImage
          className="p3"
          src="../../images/row1col3.png"
          alt="c7r1"
        />
        <StaticImage
          className="p4"
          src="../../images/row1col4.png"
          alt="c7r1"
        />
        <StaticImage
          className="p5"
          src="../../images/row1col5.png"
          alt="c7r1"
        />

        <StaticImage
          className="p6"
          src="../../images/row2col1.png"
          alt="c7r1"
        />
        <StaticImage
          className="p7"
          src="../../images/row2col2.png"
          alt="c7r1"
        />

        <ActionTextWrapper>
          <ActionText>
            <a href="#contactUs">{"Want to be our client?"}</a>
          </ActionText>
        </ActionTextWrapper>

        <StaticImage
          className="p8"
          src="../../images/row2col3.png"
          alt="c7r1"
        />
        <StaticImage
          className="p9"
          src="../../images/row2col4.png"
          alt="c7r1"
        />

        <StaticImage
          className="p10"
          src="../../images/row3col1.png"
          alt="c7r1"
        />
        <StaticImage
          className="p11"
          src="../../images/row3col2.png"
          alt="c7r1"
        />
        <StaticImage
          className="p12"
          src="../../images/row3col3.png"
          alt="c7r1"
        />
        <StaticImage
          className="p13"
          src="../../images/row3col4.png"
          alt="c7r1"
        />
        <StaticImage
          className="p14"
          src="../../images/row3col5.png"
          alt="c7r1"
        />
        <StaticImage
          className="p15"
          src="../../images/row3col6.png"
          alt="c7r1"
        />
      </GridContainer>
    </>
  )
}

export default WantToBeClientComponent
