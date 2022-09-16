import React, { useState, useRef } from "react"
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
  ContactFormTextArea,
  ContactFormInputHighlight,
  ContactFormInputBar,
  ContactFormInputLabel,
  ContactFormDetailsInputWrapper,
  FooterCopyright,
  FooterBottom,
  FormWrapper,
  ImageUploadWrapper,
  FileInputLabel,
  FileInput,
  HiddenCheckbox,
} from "./footer-styles"
import ActionButtonComponent from "../action-button"
import behanceIcon from "../../images/icons/behance.svg"
import instagramIcon from "../../images/icons/instagram.svg"
import facebookIcon from "../../images/icons/facebook.svg"
import linkedinIcon from "../../images/icons/linkedin.svg"
import twitterIcon from "../../images/icons/twitter.svg"
import pinIcon from "../../images/icons/pin.svg"
import emailjs from "@emailjs/browser"

const Footer = () => {
  const form = useRef()
  const [checkboxValue1, setCheckboxValue1] = useState(false)
  const [checkboxValue2, setCheckboxValue2] = useState(false)
  const [checkboxValue3, setCheckboxValue3] = useState(false)

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
  // const [templateParams, setTemplateParams] = useState({})

  // const handleInputNameChange = e => {
  //   setTemplateParams((templateParams["from_name"] = e.target.value))
  // }

  // const handleInputEmailChange = e => {
  //   setTemplateParams((templateParams["from_email"] = e.target.value))
  // }

  // const handleInputDetailsChange = e => {
  //   setTemplateParams((templateParams["from_message"] = e.target.value))
  // }

  // const handleInputFileChange = e => {
  //   console.log(e)
  // }

  const handleSubmit = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        "service_d2ne6pu",
        "template_vhr1ego",
        form.current,
        "-Tk9BuqG_XddgZtIY"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )

    event.target.reset()

    console.log("form submitted ✅")
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
        <FormWrapper onSubmit={handleSubmit} ref={form}>
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
                      setCheckboxValue1(false)
                    } else {
                      setApplicationDevelopmentService(true)
                      setCheckboxValue1(true)
                    }
                  }}
                  name="option1"
                >
                  {`${services[0]}`}
                </ContactFormService>
                <ContactFormService
                  className={`${developmentAdviceService ? "active" : ""} `}
                  onClick={() => {
                    if (developmentAdviceService) {
                      setDevelopmentAdviceService(false)
                      setCheckboxValue2(false)
                    } else {
                      setDevelopmentAdviceService(true)
                      setCheckboxValue2(true)
                    }
                  }}
                  name="option2"
                >
                  {`${services[1]}`}
                </ContactFormService>
                <ContactFormService
                  className={`${migrationService ? "active" : ""} `}
                  onClick={() => {
                    if (migrationService) {
                      setMigrationService(false)
                      setCheckboxValue3(false)
                    } else {
                      setMigrationService(true)
                      setCheckboxValue3(true)
                    }
                  }}
                  name="option3"
                >
                  {`${services[2]}`}
                </ContactFormService>
              </ContactFormServicesList>
              <ContactForm>
                <ContactFormBlock>
                  <ContactFormInputGroup>
                    <ContactFormInput required type="text" name="from_name" />
                    <ContactFormInputHighlight />
                    <ContactFormInputBar />
                    <ContactFormInputLabel>{"Name"}</ContactFormInputLabel>
                  </ContactFormInputGroup>
                  <ContactFormInputGroup>
                    <ContactFormInput required type="text" name="user_email" />
                    <ContactFormInputHighlight />
                    <ContactFormInputBar />
                    <ContactFormInputLabel>{"Email"}</ContactFormInputLabel>
                  </ContactFormInputGroup>
                </ContactFormBlock>
                <ContactFormBlock>
                  <ContactFormDetailsInputWrapper>
                    <ContactFormInputGroup>
                      <ContactFormTextArea
                        type="text"
                        style={{ width: "100%" }}
                        name="message"
                        rows="1"
                      />
                      <ContactFormInputHighlight />
                      <ContactFormInputBar />
                      <ContactFormInputLabel>
                        {"Project details (optional)"}
                      </ContactFormInputLabel>
                      {/* <ImageUploadWrapper>
                        <FileInputLabel htmlFor="file-input">
                          <img src={pinIcon} height={25} />
                        </FileInputLabel>
                        <FileInput
                          id="file-input"
                          type="file"
                          name="attached_file"
                          onChange={handleInputFileChange}
                        ></FileInput>
                      </ImageUploadWrapper> */}
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
          <HiddenCheckbox
            checked={checkboxValue1}
            onChange={() => setCheckboxValue1(!checkboxValue1)}
            name="option1"
          ></HiddenCheckbox>
          <HiddenCheckbox
            checked={checkboxValue2}
            onChange={() => setCheckboxValue1(!checkboxValue2)}
            name="option2"
          ></HiddenCheckbox>
          <HiddenCheckbox
            checked={checkboxValue3}
            onChange={() => setCheckboxValue1(!checkboxValue3)}
            name="option3"
          ></HiddenCheckbox>
        </FormWrapper>
      </FooterWrapper>
    </>
  )
}

export default Footer
