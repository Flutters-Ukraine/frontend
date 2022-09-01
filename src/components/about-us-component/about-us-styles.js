// import { Link } from 'gatsby'
import styled from 'styled-components';

export const AboutUsGridWrapper = styled.div`
    margin-top: 100px;
`

export const AboutUsGridItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    &:not(:first-child) {
        padding-top: 20px;
    }
`

export const AboutUsGridItemText = styled.div`
    max-width: 60%;

    &:nth-child(even) {
        padding-left: 30px;
    }

    &:nth-child(odd) {
        padding-right: 30px;
    }
`

export const AboutUsGridItemTitle = styled.h3`
    font-size: 35px;
    font-weight: 600;

    @media screen and (max-width: 1024px) {
       font-size: 25px;
    }

   @media screen and (max-width: 960px) {
       font-size: 20px;
    }
`

export const AboutUsGridItemSubtitle = styled.h5`
    padding-top: 30px;
    font-size: 22px;
    font-weight: 300;

    @media screen and (max-width: 1024px) {
    font-size: 20px;
    }

    @media screen and (max-width: 960px) {
    font-size: 18px;
    }
`

export const AboutUsGridItemUl = styled.ul`
    padding-top: 30px;
    padding-left: 20px;
    margin: 0;
`

export const AboutUsGridItemLi = styled.li`
    padding: 0;
    margin: 0;
`