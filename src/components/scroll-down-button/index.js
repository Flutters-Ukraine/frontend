import React from "react"
import {
  ScrollDownWrapper,
  ScrollDownButton,
  ScrollDownSpan,
} from "./scroll-down-button-styles"

const ScrollDownButtonComponent = () => {
  return (
    <>
      <ScrollDownWrapper>
        <a href="#aboutUs">
          <ScrollDownButton />{" "}
        </a>
        <ScrollDownSpan>{"Scrolldown"}</ScrollDownSpan>
      </ScrollDownWrapper>
    </>
  )
}

export default ScrollDownButtonComponent
