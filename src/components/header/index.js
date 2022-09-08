import React, { useState } from "react"
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderNavMenu,
  NavItem,
  NavLink,
  HeaderNavList,
  LanguageSpan,
  MenuToggle,
  HamburgerLines,
  HamburgerLine,
} from "./header-styles"

const Header = () => {
  const languages = ["en", "ua"]

  const [language, setLanguage] = useState(languages[0])

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo to="/">LOGO</HeaderLogo>
        <MenuToggle />
        <HamburgerLines>
          <HamburgerLine className="line1"></HamburgerLine>
          <HamburgerLine className="line2"></HamburgerLine>
          <HamburgerLine className="line3"></HamburgerLine>
        </HamburgerLines>
        <HeaderNavMenu>
          <HeaderNavList>
            <NavItem>
              <NavLink href="#aboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#aboutFlutter">About Flutter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#aboutServices">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contactUs">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <LanguageSpan
                className={`${language === languages[0] ? "active" : ""} `}
                onClick={() => setLanguage(languages[0])}
              >
                en&nbsp;
              </LanguageSpan>
              /&nbsp;
              <LanguageSpan
                className={`${language === languages[1] ? "active" : ""}`}
                onClick={() => setLanguage(languages[1])}
              >
                ua
              </LanguageSpan>
            </NavItem>
          </HeaderNavList>
        </HeaderNavMenu>
      </HeaderWrapper>
    </>
  )
}

export default Header
