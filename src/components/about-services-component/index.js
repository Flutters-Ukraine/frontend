import React from 'react'
import DescriptionTextComponent from '../description-text'
import {
    AboutServicesWrapper,
    AboutServicesList,
    AboutServicesListItem,
    AboutServicesListItemText
} from './about-services-styles'

const AboutServicesComponent = () => {
    return (
        <>
            <AboutServicesWrapper>
                <DescriptionTextComponent center={true} text={'Turn your ideas into a wonderful app that we will make'} />
                <AboutServicesList>
                    <AboutServicesListItem>
                        <AboutServicesListItemText>{'Development Consulting'}</AboutServicesListItemText>
                    </AboutServicesListItem>
                    <AboutServicesListItem>
                        <AboutServicesListItemText>{'App Development'}</AboutServicesListItemText>
                    </AboutServicesListItem>
                    <AboutServicesListItem>
                        <AboutServicesListItemText>{'App Technology Migration to Flutter'}</AboutServicesListItemText>
                    </AboutServicesListItem>
                </AboutServicesList>
            </AboutServicesWrapper>
        </>
    )
}



export default AboutServicesComponent