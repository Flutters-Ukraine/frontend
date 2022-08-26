
import React, { useState, useEffect } from 'react'
import { DescriptionText } from '../description-text/description-text-styles'
import { BsArrowUpRight } from 'react-icons/bs'
import DescriptionTextComponent from '../description-text'
import AboutUsGridComponent from '../about-us-grid'

const AboutUsComponent = () => {
    return (
        <>
            <DescriptionTextComponent text={'Flutters Agency Ukraine is a leading company in the field of mobile development, which uses the latest approaches and technologies to increase development processes speed and create great applications for several platforms (iOS, Android, Mac, Windows, Linux) using Flutter.'} />
            <AboutUsGridComponent />
        </>
    )
}



export default AboutUsComponent