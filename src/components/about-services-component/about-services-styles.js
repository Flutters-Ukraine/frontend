import styled from "styled-components"

export const AboutServicesWrapper = styled.div`
  padding-top: 200px;
  height: 100%;
`
export const AboutServicesList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  vertical-align: middle;
  height: 100%;
  margin-top: 80px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`
export const AboutServicesListItem = styled.div`
  flex: 1;
  border: 1px solid var(--color-action);
  border-radius: 10px;
  padding: 35px 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: 20px;
  }

  & a {
    text-decoration: none;
    outline: none;
    color: black;
  }

  @media screen and (max-width: 420px) {
    &:not(:first-child) {
      margin: 0;
      margin-top: 30px;
    }
  }
`
export const AboutServicesListItemText = styled.div`
  text-align: center;
  font-size: 22px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`
