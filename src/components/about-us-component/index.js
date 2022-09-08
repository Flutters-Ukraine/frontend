import React from "react"
import DescriptionTextComponent from "../description-text"
import {
  AboutUsGridWrapper,
  AboutUsGridItem,
  AboutUsGridItemText,
  AboutUsGridItemTitle,
  AboutUsGridItemSubtitle,
  AboutUsGridItemUl,
  AboutUsGridItemLi,
} from "./about-us-styles"
import { StaticImage } from "gatsby-plugin-image"

const AboutUsComponent = () => {
  return (
    <>
      <div id="aboutUs"></div>
      <DescriptionTextComponent
        id="dropdownId1asd"
        text={
          "Flutters Agency Ukraine is a leading company in the field of mobile development, which uses the latest approaches and technologies to increase development processes speed and create great applications for several platforms (iOS, Android, Mac, Windows, Linux) using Flutter."
        }
      />
      <AboutUsGridWrapper>
        <AboutUsGridItem>
          <AboutUsGridItemText>
            <AboutUsGridItemTitle>
              {"Cross-platform App Development"}
            </AboutUsGridItemTitle>
            <AboutUsGridItemSubtitle>
              {
                "Build your app once, deploy it to any screen — mobile, desktop, web, and more."
              }
            </AboutUsGridItemSubtitle>

            <AboutUsGridItemUl>
              <AboutUsGridItemLi>
                {" iOS & Android app development  "}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {"macOS & Windows app development"}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {"ChromeOS app development"}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {
                  "Web App Development for all modern browsers (Chrome, Safari, Firefox, Edge, Brave)"
                }
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>{"Back-End Development"}</AboutUsGridItemLi>
            </AboutUsGridItemUl>
          </AboutUsGridItemText>
          <StaticImage
            height={600}
            src="../../images/grid-image.png"
            alt="A dinosaur"
          />
        </AboutUsGridItem>
        <AboutUsGridItem>
          <StaticImage
            height={600}
            src="../../images/grid-image.png"
            alt="A dinosaur"
          />
          <AboutUsGridItemText>
            <AboutUsGridItemTitle>
              {"Advanced development practices"}
            </AboutUsGridItemTitle>
            <AboutUsGridItemSubtitle>
              {
                "We use the best and most modern technologies and approaches to development that accele"
              }
            </AboutUsGridItemSubtitle>
            <AboutUsGridItemUl>
              <AboutUsGridItemLi>
                {
                  "Using of ready-to-go app templates to reduce app development time and costs "
                }
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {"Writing tests to decrease bugs during development process  "}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {
                  "Working with Agile approach to increase flexibility during development process"
                }
              </AboutUsGridItemLi>
            </AboutUsGridItemUl>
          </AboutUsGridItemText>
        </AboutUsGridItem>
        <AboutUsGridItem>
          <AboutUsGridItemText>
            <AboutUsGridItemTitle>
              {
                "Full development lifecycle from design to performance analytics"
              }
            </AboutUsGridItemTitle>
            <AboutUsGridItemSubtitle>
              {
                "We provide the full development lifecycle of your product, from working on its design to performance analytics and monitoring user satisfaction with your product."
              }
            </AboutUsGridItemSubtitle>
            <AboutUsGridItemUl>
              <AboutUsGridItemLi>
                {"Stunning app designs, perfect user experiences"}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {"Users needs and market research with prototyping"}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {"Modern animations for your apps"}
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>
                {
                  "Back-end development with using modern cloud technologies such as Firebase, AWS, etc"
                }
              </AboutUsGridItemLi>
              <AboutUsGridItemLi>{"Back-End Development"}</AboutUsGridItemLi>
            </AboutUsGridItemUl>
          </AboutUsGridItemText>
          <StaticImage
            height={600}
            src="../../images/grid-image.png"
            alt="A dinosaur"
          />
        </AboutUsGridItem>
      </AboutUsGridWrapper>
    </>
  )
}

export default AboutUsComponent
