import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  /* height: 50px; */
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 110px;
  z-index: 2;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 960px) {
    padding: 20px 50px;
  }
`

export const HeaderLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const HeaderNavMenu = styled.nav`
  font-size: 18px;

  @media screen and (max-width: 960px) {
    transform: translateX(-150%);
    position: absolute;
    top: 30;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    transition: 800ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`

export const HamburgerLines = styled.div`
  display: none;
  height: 28px;
  width: 34px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  flex-direction: column;
  justify-content: space-between;

  & .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  & .line2 {
    transition: transform 0.2s ease-in-out;
  }

  & .line3 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }
`

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    /* margin-top: 50px; */
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* transform: translate(-150%); */
  }
`

export const MenuToggle = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 20px;
  right: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${HeaderNavList} {
    transform: translateX(0);
  }

  &:checked ~ ${HamburgerLines} .line1 {
    transform: rotate(45deg);
  }

  &:checked ~ ${HamburgerLines} .line2 {
    transform: scaleY(0);
  }

  &:checked ~ ${HamburgerLines} .line3 {
    transform: rotate(-45deg);
  }

  &:checked ~ ${HeaderNavMenu} {
    transform: translateX(0) !important;
  }

  /* @media screen and (min-width: 960px) {
        display: block;
    } */
`

export const HamburgerLine = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: black;

  /* @media screen and (min-width: 960px) {
        display: none;
    } */
`

export const NavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
  /* height: 80px; */

  @media screen and (max-width: 960px) {
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    padding-bottom: 30px;
  }
`

export const NavLink = styled.a`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const LanguageSpan = styled.span`
  cursor: pointer;
  text-decoration: none;
  outline-style: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &.active {
    color: #02319b;
    font-size: 26px;
  }
`
