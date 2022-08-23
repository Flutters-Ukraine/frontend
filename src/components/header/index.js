import React, { useState, useEffect } from 'react'
import { HeaderWrapper, HeaderIcon, HeaderLogo, HeaderMenu } from './header-styles'

const Header = () => {


    return (
        <>
            <HeaderWrapper>
                <HeaderLogo to="/">
                    LOGO
                </HeaderLogo>
                <HeaderMenu>

                </HeaderMenu>
            </HeaderWrapper>
        </>
    )
}

export default Header