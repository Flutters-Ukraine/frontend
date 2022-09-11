import React, { useState } from "react"
import {
  FooterWrapper,
  FooterHead,
  FooterContactsWrapper,
  FooterContactsTitle,
  FooterContactsContent,
  FooterTitleWrapper,
  FooterSubtitle,
  FooterTitle,
  FooterBody,
  LookForUsWrapper,
  LookForUsTitle,
  LookForUsIcons,
  ContactFormWrapper,
  ContactFormSubtitle,
  ContactFormServicesList,
  ContactFormService,
  ContactForm,
  ContactFormBlock,
  ContactFormInputGroup,
  ContactFormInput,
  ContactFormInputHighlight,
  ContactFormInputBar,
  ContactFormInputLabel,
  ContactFormDetailsInputWrapper,
  FooterCopyright,
  FooterBottom,
  FormWrapper,
} from "./footer-styles"
import ActionButtonComponent from "../action-button"
import behanceIcon from "../../images/icons/behance.svg"
import instagramIcon from "../../images/icons/instagram.svg"
import facebookIcon from "../../images/icons/facebook.svg"
import linkedinIcon from "../../images/icons/linkedin.svg"
import twitterIcon from "../../images/icons/twitter.svg"
import pinIcon from "../../images/icons/pin.svg"
import { Script } from "gatsby"
import Helmet from "react-helmet"

const Footer = () => {
  const services = [
    "Application development",
    "Development advice",
    "Migration from other technologies",
  ]

  const [applicationDevelopmentService, setApplicationDevelopmentService] =
    useState(false)
  const [developmentAdviceService, setDevelopmentAdviceService] =
    useState(false)
  const [migrationService, setMigrationService] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    window.Email.send({
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: "flutters.ukraine@gmail.com",
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then(message => alert(message))

    console.log("form submitted ✅")
    alert("form submiotted ✅")
  }

  return (
    <>
      <FooterWrapper id="contactUs">
        <FooterHead>
          <FooterContactsWrapper>
            <FooterContactsTitle>{"Contacts"}</FooterContactsTitle>
            <FooterContactsContent href="mailto:flutters.ukraine@gmail.com">
              {"flutters.ukraine@gmail.com"}
            </FooterContactsContent>
          </FooterContactsWrapper>
          <FooterTitleWrapper>
            <FooterSubtitle>{"Hire us"}</FooterSubtitle>
            <FooterTitle>{"Let's create something together?"}</FooterTitle>
          </FooterTitleWrapper>
        </FooterHead>
        <FormWrapper onSubmit={handleSubmit}>
          <FooterBody>
            <LookForUsWrapper>
              <LookForUsTitle>{"Look for us on"}</LookForUsTitle>
              <LookForUsIcons>
                <a href="">
                  <img src={behanceIcon} height={30} />
                </a>
                <a href="">
                  <img src={instagramIcon} height={30} />
                </a>
                <a href="">
                  <img src={facebookIcon} height={30} />
                </a>
                <a href="">
                  <img src={linkedinIcon} height={30} />
                </a>
                <a href="">
                  <img src={twitterIcon} height={30} />
                </a>
              </LookForUsIcons>
            </LookForUsWrapper>
            <ContactFormWrapper>
              <ContactFormSubtitle>{"Services"}</ContactFormSubtitle>
              <ContactFormServicesList>
                <ContactFormService
                  className={`${
                    applicationDevelopmentService ? "active" : ""
                  } `}
                  onClick={() => {
                    if (applicationDevelopmentService) {
                      setApplicationDevelopmentService(false)
                    } else {
                      setApplicationDevelopmentService(true)
                    }
                  }}
                >
                  {`${services[0]}`}
                </ContactFormService>
                <ContactFormService
                  className={`${developmentAdviceService ? "active" : ""} `}
                  onClick={() => {
                    if (developmentAdviceService) {
                      setDevelopmentAdviceService(false)
                    } else {
                      setDevelopmentAdviceService(true)
                    }
                  }}
                >
                  {`${services[1]}`}
                </ContactFormService>
                <ContactFormService
                  className={`${migrationService ? "active" : ""} `}
                  onClick={() => {
                    if (migrationService) {
                      setMigrationService(false)
                    } else {
                      setMigrationService(true)
                    }
                  }}
                >
                  {`${services[2]}`}
                </ContactFormService>
              </ContactFormServicesList>
              <ContactForm>
                <ContactFormBlock>
                  <ContactFormInputGroup>
                    <ContactFormInput required type="text" />
                    <ContactFormInputHighlight />
                    <ContactFormInputBar />
                    <ContactFormInputLabel>{"Name"}</ContactFormInputLabel>
                  </ContactFormInputGroup>
                  <ContactFormInputGroup>
                    <ContactFormInput required type="email" />
                    <ContactFormInputHighlight />
                    <ContactFormInputBar />
                    <ContactFormInputLabel>{"Email"}</ContactFormInputLabel>
                  </ContactFormInputGroup>
                </ContactFormBlock>
                <ContactFormBlock>
                  <ContactFormDetailsInputWrapper>
                    <ContactFormInputGroup>
                      <ContactFormInput type="text" style={{ width: "100%" }} />
                      <ContactFormInputHighlight />
                      <ContactFormInputBar />
                      <ContactFormInputLabel>
                        {"Project details (optional)"}
                      </ContactFormInputLabel>
                      <img src={pinIcon} height={25} />
                    </ContactFormInputGroup>
                  </ContactFormDetailsInputWrapper>
                </ContactFormBlock>
              </ContactForm>
            </ContactFormWrapper>
          </FooterBody>
          <FooterBottom>
            <FooterCopyright>
              {"Proudly made in 🇺🇦 by Serhii Vedmediev"}
            </FooterCopyright>
            <ActionButtonComponent
              text="Send request"
              type="submit"
            ></ActionButtonComponent>
          </FooterBottom>
        </FormWrapper>
      </FooterWrapper>
    </>
  )
}

export default Footer
