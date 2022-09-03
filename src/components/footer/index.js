
import React from 'react'
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
} from './footer-styles';
import ActionButtonComponent from "../action-button"
import behanceIcon from "../../images/icons/behance.svg";
import instagramIcon from "../../images/icons/instagram.svg";
import facebookIcon from "../../images/icons/facebook.svg";
import linkedinIcon from "../../images/icons/linkedin.svg";
import twitterIcon from "../../images/icons/twitter.svg";
import pinIcon from "../../images/icons/pin.svg";

const Footer = () => {

    const services = ['Application development', 'Development advice', 'Migration from other technologies']

    return (
        <>
            <FooterWrapper>
                <FooterHead>
                    <FooterContactsWrapper>
                        <FooterContactsTitle>
                            {'Contacts'}
                        </FooterContactsTitle>
                        <FooterContactsContent href="mailto:flutters.ukraine@gmail.com">
                            {'flutters.ukraine@gmail.com'}
                        </FooterContactsContent>

                    </FooterContactsWrapper>
                    <FooterTitleWrapper>
                        <FooterSubtitle>
                            {'Hire us'}
                        </FooterSubtitle>
                        <FooterTitle>
                            {'Let\'s create something together?'}
                        </FooterTitle>
                    </FooterTitleWrapper>

                </FooterHead>
                <FooterBody>
                    <LookForUsWrapper>
                        <LookForUsTitle>{'Look for us on'}</LookForUsTitle>
                        <LookForUsIcons>
                            <a href=""><img src={behanceIcon} height={30} /></a>
                            <a href=""><img src={instagramIcon} height={30} /></a>
                            <a href=""><img src={facebookIcon} height={30} /></a>
                            <a href=""><img src={linkedinIcon} height={30} /></a>
                            <a href=""><img src={twitterIcon} height={30} /></a>
                        </LookForUsIcons>
                    </LookForUsWrapper >
                    <ContactFormWrapper>
                        <ContactFormSubtitle>{'Services'}</ContactFormSubtitle>
                        <ContactFormServicesList>
                            <ContactFormService>{`${services[0]}`}</ContactFormService>
                            <ContactFormService>{`${services[1]}`}</ContactFormService>
                            <ContactFormService>{`${services[2]}`}</ContactFormService>
                        </ContactFormServicesList>
                        <ContactForm>
                            <ContactFormBlock>
                                <ContactFormInputGroup>
                                    <ContactFormInput required type='text' />
                                    <ContactFormInputHighlight />
                                    <ContactFormInputBar />
                                    <ContactFormInputLabel>{'Name'}</ContactFormInputLabel>
                                </ContactFormInputGroup>
                                <ContactFormInputGroup>
                                    <ContactFormInput required type='text' />
                                    <ContactFormInputHighlight />
                                    <ContactFormInputBar />
                                    <ContactFormInputLabel>{'Email'}</ContactFormInputLabel>
                                </ContactFormInputGroup>
                            </ContactFormBlock>
                            <ContactFormBlock>
                                <ContactFormDetailsInputWrapper>
                                    <ContactFormInputGroup>
                                        <ContactFormInput type='text' style={{ width: "100%" }} />
                                        <ContactFormInputHighlight />
                                        <ContactFormInputBar />
                                        <ContactFormInputLabel>{'Project details (optional)'}</ContactFormInputLabel>
                                        <img src={pinIcon} height={25} />
                                    </ContactFormInputGroup>
                                </ContactFormDetailsInputWrapper>
                            </ContactFormBlock>
                        </ContactForm>
                    </ContactFormWrapper>
                </FooterBody >
                <FooterBottom>
                    <FooterCopyright>{'(c) Serhii Vedmediev'}</FooterCopyright>
                    <ActionButtonComponent onClick={() => console.log('click footer')} text={'Send request'}></ActionButtonComponent>
                </FooterBottom>
            </FooterWrapper >
        </>
    )
}



export default Footer