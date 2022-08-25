import React, { useState, useEffect } from 'react'
import { TitleWrapper } from '../../components/title-text/title-text-styles'
import ActionButtonComponent from '../action-button'

import ScrollDownButtonComponent from '../scroll-down-button'

const TitleText = () => {
    return (
        <>
            <TitleWrapper>
                <h2>Develop. Maintain. Consult.</h2>
                <h1>Flutter Development Experts<br />for your Start-Up</h1>
                <ActionButtonComponent />
                <ScrollDownButtonComponent />

            </TitleWrapper>
        </>
    )
}



export default TitleText