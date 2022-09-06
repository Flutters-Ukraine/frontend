// import { Link } from "gatsby"
import styled from "styled-components"

export const FullScreenBlock = styled.div`
  height: 100vh;
  margin-bottom: 100px;
`

//note: footer has own padding
export const PaddingWrappper = styled.div`
  padding: 0 110px;

  @media screen and (max-width: 960px) {
    padding: 0 50px;
  }
`
