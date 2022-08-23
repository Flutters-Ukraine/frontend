import { Link } from 'gatsby'
import styled from 'styled-components';
import { DiScala } from 'react-icons/di'

export const HeaderWrapper = styled.div`
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

export const HeaderMenu = styled.nav`
`