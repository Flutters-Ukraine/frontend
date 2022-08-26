
import React, { useState, useEffect } from 'react'
import { DescriptionText } from './about-flutter-styles'
import DescriptionTextComponent from '../description-text'

const AboutFlutterComponent = () => {
    return (
        <>
            <DescriptionTextComponent text={'Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.'} />
        </>
    )
}



export default AboutFlutterComponent