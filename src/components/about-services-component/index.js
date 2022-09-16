import React from "react"
import DescriptionTextComponent from "../description-text"
import {
  AboutServicesWrapper,
  AboutServicesList,
  AboutServicesListItem,
  AboutServicesListItemText,
} from "./about-services-styles"

const AboutServicesComponent = () => {
  return (
    <>
      <div id="aboutServices"></div>
      <AboutServicesWrapper>
        <DescriptionTextComponent
          center={true}
          text={"Turn your ideas into a wonderful app that we will make"}
        />
        <AboutServicesList>
          <AboutServicesListItem>
            <a href="#contactUs">
              <AboutServicesListItemText>
                {"Development Consulting"}
              </AboutServicesListItemText>
            </a>
          </AboutServicesListItem>
          <AboutServicesListItem>
            <a href="#contactUs">
              <AboutServicesListItemText>
                {"App Development"}
              </AboutServicesListItemText>
            </a>
          </AboutServicesListItem>
          <AboutServicesListItem>
            <a href="#contactUs">
              <AboutServicesListItemText>
                {"App Technology Migration to Flutter"}
              </AboutServicesListItemText>
            </a>
          </AboutServicesListItem>
        </AboutServicesList>
      </AboutServicesWrapper>
    </>
  )
}

export default AboutServicesComponent
