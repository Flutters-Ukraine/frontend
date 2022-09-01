// import { Link } from "gatsby"
import styled from "styled-components"

export const GridContainer = styled.div`
  /* max-width: 960px; */
  z-index: -1;
  top: 200px;
  right: 0px;
  position: absolute;
  padding: 10px;
  display: grid;
  grid-template-columns: 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px;
  grid-template-rows: 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px 70px;

  .p1 {
    grid-column: 10/12;
    grid-row: 1/4;
  }
  .p2 {
    grid-column: 12/14;
    grid-row: 2/5;
  }
  .p3 {
    grid-column: 4/6;
    grid-row: 6/9;
  }
  .p4 {
    grid-column: 12/14;
    grid-row: 9/12;
  }
  .p5 {
    grid-column: 12/14;
    grid-row: 5/7;
  }
  .p6 {
    grid-column: 10/12;
    grid-row: 4/7;
  }
  .p7 {
    grid-column: 8/10;
    grid-row: 5/8;
  }
  .p8 {
    grid-column: 1/4;
    grid-row: 8/10;
  }
  .p9 {
    grid-column: 10/13;
    grid-row: 7/9;
  }
  .p10 {
    grid-column: 9/12;
    grid-row: 9/11;
  }
  .p99 {
    grid-column: 6/9;
    grid-row: 8/10;
  }
  .p100 {
    grid-column: 7/10;
    grid-row: 3/5;
  }
  .p13 {
    grid-column: 6/8;
    grid-row: 5/8;
  }
`
