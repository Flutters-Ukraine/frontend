import React, { useState, useEffect } from 'react'
import { ScrollDownWrapper, ScrollDownButton, ScrollDownSpan } from '../scroll-down-button/scroll-down-button-styles'
import { BsArrowUpRight } from 'react-icons/bs'

const ScrollDownButtonComponent = () => {
    return (
        <>
            <ScrollDownWrapper>
                <ScrollDownButton />
                <ScrollDownSpan>{'Scrolldown'}</ScrollDownSpan>
            </ScrollDownWrapper>
        </>
    )
}



export default ScrollDownButtonComponent