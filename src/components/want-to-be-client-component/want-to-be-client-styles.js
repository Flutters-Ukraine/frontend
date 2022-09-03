import styled from 'styled-components';


export const GridContainer = styled.div`
    overflow-x: hidden;
    margin-top: 150px;
    padding: 0 10px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    & * {
        border-radius: 10px;
    }

    //1st row
    .p1 {
        grid-column: 3/6;
        grid-row: 1/5;
    }

    .p2 {
        grid-column: 6/9;
        grid-row: 3/5;
    }
    .p3 {
        grid-column: 9/12;
        grid-row: 1/5;
    }
    .p4 {
        grid-column: 12/15;
        grid-row: 3/5;
    }
    .p5 {
        grid-column: 15/18;
        grid-row: 1/5;
    }

    //2nd row
    .p6 {
        grid-column: 1/4;
        grid-row: 5/7;
    }
    .p7 {
        grid-column: 4/7;
        grid-row: 5/9;
    }
    .p8 {
        grid-column: 13/16;
        grid-row: 5/9;
    }
    .p9 {
        grid-column: 16/19;
        grid-row: 5/8;
    }

    //3rd row
    .p10 {
        grid-column: 2/4;
        grid-row: 7/11;
    }
    .p11 {
        grid-column: 4/8;
        grid-row: 9/11;
    }
    .p12 {
        grid-column: 8/10;
        grid-row: 7/10;
    }
    .p13 {
        grid-column: 10/13;
        grid-row: 7/9;
    }
    .p14 {
        grid-column: 13/16;
        grid-row: 9/13;
    }
    .p15 {
        grid-column: 16/19;
        grid-row: 8/10;
    }
`

export const ActionTextWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid  var(--color-action);
    grid-column: 7/13;
    grid-row: 5/7;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    height: 100%;
    padding: 30px 0;
`

export const ActionText = styled.span`
    width: 100%;
    vertical-align: middle;
    text-align: center;
    font-size: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        font-size: 20px;
    }
`
