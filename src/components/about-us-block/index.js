
import React, { useState, useEffect } from 'react'
import { DescriptionText } from '../../components/description-text/description-text-styles'
import { BsArrowUpRight } from 'react-icons/bs'
import DescriptionTextComponent from '../description-text'
import AboutUsGridComponent from '../about-us-grid'

const AboutUsComponent = () => {
    return (
        <>
            <DescriptionTextComponent />
            <AboutUsGridComponent />
        </>
    )
}



export default AboutUsComponent