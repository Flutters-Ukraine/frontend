import { Link } from 'gatsby'
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
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
`

export const HeaderNavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* height: 90vh; */
        /* position: absolute; */
        /* top: ${({ click }) => click ? "100%" : "-1000px"}; */
        opacity: 1;
        transition: all 0.2s ease;
    }
`

export const NavItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 25px;
    /* height: 80px; */

    /* @media screen and (max-width: 960px) {
        width: 100%;
    } */
`

export const NavLink = styled(Link)`
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    &.active {
        color: #02319B;
        font-size: 26px;
    }
  
`