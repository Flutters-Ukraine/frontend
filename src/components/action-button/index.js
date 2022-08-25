import React, { useState, useEffect } from 'react'
import { ActionButton } from '../../components/action-button/action-button-styles'
import { BsArrowUpRight } from 'react-icons/bs'

const ActionButtonComponent = () => {
    return (
        <>
            <ActionButton>{'Let\'s create it together'} <BsArrowUpRight height={15} /></ActionButton>
        </>
    )
}



export default ActionButtonComponent