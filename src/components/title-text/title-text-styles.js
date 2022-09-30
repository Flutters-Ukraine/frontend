// import { Link } from "gatsby"
import styled from "styled-components"

export const TitleWrapper = styled.div`
  padding-top: 75px;
  position: static;

  & h1 {
    padding-top: 20px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 760px) {
    top: 400px;
  }

  @media screen and (max-height: 630px) {
    & h1 {
      font-size: 25px;
    }

    & h2 {
      font-size: 20px;
    }
  }
`
