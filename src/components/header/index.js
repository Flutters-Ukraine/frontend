import React, { useState, useEffect } from 'react'
import { HeaderWrapper, HeaderIcon, HeaderLogo, HeaderNavMenu, NavItem, NavLink, HeaderNavList, LanguageSpan, MenuToggle, HamburgerLines, HamburgerLine, } from './header-styles'

const Header = () => {

    const languages = ['en', 'ua']

    const [language, setLanguage] = useState(languages[0]);

    return (
        <>
            <HeaderWrapper>
                <HeaderLogo to="/">
                    LOGO
                </HeaderLogo>
                <MenuToggle />
                <HamburgerLines>
                    <HamburgerLine className="line1"></HamburgerLine>
                    <HamburgerLine className="line2"></HamburgerLine>
                    <HamburgerLine className="line3"></HamburgerLine>
                </HamburgerLines>
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