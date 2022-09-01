import styled from 'styled-components';

export const DescriptionText = styled.h3`
   font-size: 30px;
   text-align: ${props => props.center ? 'center' : 'left'};

   @media screen and (max-width: 1024px) {
       font-size: 25px;
    }

   @media screen and (max-width: 960px) {
       font-size: 20px;
    }
`