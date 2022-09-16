
import React from 'react'
import { DescriptionText } from './description-text-styles'

const DescriptionTextComponent = ({ center, text }) => {
    return (
        <>
            <DescriptionText center={center}>{text}</DescriptionText>
        </>
    )
}



export default DescriptionTextComponent