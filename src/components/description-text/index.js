
import React, { useState, useEffect } from 'react'
import { DescriptionText } from '../../components/description-text/description-text-styles'
import { BsArrowUpRight } from 'react-icons/bs'

const DescriptionTextComponent = ({ text }) => {
    return (
        <>
            <DescriptionText>{text}</DescriptionText>
        </>
    )
}



export default DescriptionTextComponent