
import React, { useState, useEffect } from 'react'
import DescriptionTextComponent from '../description-text'
import { AboutFlutterWrapper, AboutFlutterGrid, AboutFlutterGridItem } from '../about-flutter-component/about-flutter-styles'

const AboutFlutterComponent = () => {
    return (
        <>
            <AboutFlutterWrapper>
                <DescriptionTextComponent text={'Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.'} />
                <AboutFlutterGrid>
                    <AboutFlutterGridItem></AboutFlutterGridItem>
                    <AboutFlutterGridItem></AboutFlutterGridItem>
                    <AboutFlutterGridItem></AboutFlutterGridItem>
                    <AboutFlutterGridItem></AboutFlutterGridItem>
                </AboutFlutterGrid>
            </AboutFlutterWrapper>
        </>
    )
}



export default AboutFlutterComponent