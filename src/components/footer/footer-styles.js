import styled from "styled-components"

export const FooterWrapper = styled.footer`
  padding: 0 110px;
  margin-top: 100px;
  max-width: 1210px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    padding: 0 50px;
  }
`

export const FooterHead = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`

export const FormWrapper = styled.form``

export const FooterContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  @media screen and (max-width: 960px) {
    margin-top: 30px;
  }
`

export const FooterContactsTitle = styled.p`
  font-size: 22px;
  text-transform: uppercase;
`

export const FooterContactsContent = styled.a`
  color: var(--color-action);
  margin-left: 15px;
  margin-top: 10px;
`

export const FooterCopyright = styled.span`
  align-self: flex-end;

  @media screen and (max-width: 420px) {
    align-self: center;
    margin-top: 50px;
  }
`

export const FooterTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`

export const FooterSubtitle = styled.h5`
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
`

export const FooterTitle = styled.h3`
  font-size: 30px;
`

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  /* justify-content: space-between; */

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const LookForUsWrapper = styled.div`
  width: 250px;
  /* display: flex;
    flex-direction: column;
    height: 100%; */
`

export const LookForUsTitle = styled.p`
  text-transform: uppercase;
`

export const LookForUsIcons = styled.div`
  margin-left: 15px;
  margin-top: 10px;

  & a {
    margin-right: 15px;
  }
`

export const ContactFormWrapper = styled.div`
  margin-left: 40px;

  @media screen and (max-width: 960px) {
    margin-left: 0;
    margin-top: 50px;
  }
`

export const ContactFormSubtitle = styled.div``

export const ContactFormServicesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`

export const ContactFormService = styled.div`
  text-align: center;
  border: 1px solid var(--color-action);
  border-radius: 10px;
  padding: 10px 10px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &.active {
    background: var(--color-action);
    color: white;
  }

  @media screen and (max-width: 420px) {
    margin-top: 30px;
  }
`

export const ContactForm = styled.div``

export const ContactFormBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & img {
    cursor: pointer;
    right: 0;
    top: 0;
  }

  &:first-child {
    margin-top: 50px;
  }

  &:nth-child(2) {
    margin-top: 80px;
  }
`

export const ContactFormInputBar = styled.span`
  position: relative;
  display: block;

  &:before {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: var(--color-action);
    transition: 300ms ease all;
    left: 0%;
  }
`

export const ContactFormInput = styled.input`
  background: none;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-radius: 0;
  color: black;
  border-bottom: 1px solid black;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -14px;
    font-size: 12px;
    color: var(--color-action);
  }

  &:valid ~ label {
    top: -14px;
    color: $hl-color;
  }

  &:focus ~ ${ContactFormInputBar}:before {
    width: 100%;
  }
`

export const ContactFormTextArea = styled.textarea`
  background: none;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-radius: 0;
  color: black;
  border-bottom: 1px solid black;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -14px;
    font-size: 12px;
    color: var(--color-action);
  }

  &:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: $hl-color;
  }

  &:focus ~ ${ContactFormInputBar}:before {
    width: 100%;
  }
`

export const ContactFormInputGroup = styled.div`
  position: relative;
  width: 100%;

  &:first-child {
    margin-right: 20px;
  }
`

export const ContactFormInputHighlight = styled.span``

export const ContactFormInputLabel = styled.label`
  color: black;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`

export const ContactFormDetailsInputWrapper = styled.div`
  position: relative;
  width: 100%;

  & img {
    position: absolute;
    right: 0;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column-reverse;
  }
`

export const ActionButton = styled.button``

export const ImageUploadWrapper = styled.div`
  & > input {
    display: none;
  }
`

export const FileInputLabel = styled.label``

export const FileInput = styled.input``

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`
