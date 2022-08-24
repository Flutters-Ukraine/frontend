import React, { useState, useEffect } from 'react'
import { HeaderWrapper, HeaderIcon, HeaderLogo, HeaderNavMenu, NavItem, NavLink, HeaderNavList, LanguageSpan } from './header-styles'

const Header = () => {

    const languages = ['en', 'ua']

    const [language, setLanguage] = useState(languages[0]);

    return (
        <>
            <HeaderWrapper>
                <HeaderLogo to="/">
                    LOGO
                </HeaderLogo>
                <HeaderNavMenu>
                    <HeaderNavList>
                        <NavItem >
                            <NavLink to="/about">About Us</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink to="/about-flutter">About Flutter</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink to="/services">Services</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink to="/our-work">Our Work</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink to="/our-work">Contact Us</NavLink>
                        </NavItem>
                        <NavItem >
                            <LanguageSpan className={`${language === languages[0] ? 'active' : ''} `} onClick={() => setLanguage(languages[0])}>en&nbsp;</LanguageSpan>/&nbsp;<LanguageSpan className={`${language === languages[1] ? 'active' : ''}`} onClick={() => setLanguage(languages[1])}>ua</LanguageSpan>
                        </NavItem>
                    </HeaderNavList>
                </HeaderNavMenu>
            </HeaderWrapper>
        </>
    )
}

export default Header