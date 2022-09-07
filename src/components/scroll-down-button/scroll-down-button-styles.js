// import { Link } from 'gatsby'
import styled from "styled-components"

export const ScrollDownWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  display: flex;
  left: 100;
  align-items: center;

  @media screen and (max-width: 420px) {
    bottom: 30px;
  }
`

export const ScrollDownButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  height: 41px;
  width: 24px;
  background-color: transparent;
  border: 2px solid var(--color-action);
  border-radius: 20px;
  cursor: pointer;
  outline: none;

  &:before {
    position: absolute;
    top: 4px;
    left: 12px;
    content: "";
    width: 10px;
    height: 10px;
    margin-left: -5px;
    background-color: var(--color-action);
    border-radius: 100%;
    -webkit-animation: scroll_down_btn-animation 2s infinite;
    animation: scroll_down_btn-animation 2s infinite;
    box-sizing: border-box;
  }

  @keyframes scroll_down_btn-animation {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes scroll_down_btn-animation {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 20px);
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`

export const ScrollDownSpan = styled.span`
  margin-left: 10px;
  font-size: 16px;
  text-transform: uppercase;
`
