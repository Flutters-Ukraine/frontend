import React from 'react'
import { ActionButton } from './action-button-styles'
import { BsArrowUpRight } from 'react-icons/bs'

const ActionButtonComponent = (props) => {
    return (
        <>
            <ActionButton onClick={props.onClick} >{props.text} <BsArrowUpRight height={15} /></ActionButton>
        </>
    )
}



export default ActionButtonComponent