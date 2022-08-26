import { Link } from 'gatsby'
import styled from 'styled-components';

export const AboutFlutterWrapper = styled.div`
    margin-top: 150px;
`

export const AboutFlutterGrid = styled.div`
    padding-top: 150px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-row: auto auto;
    grid-column-gap: 60px;
    grid-row-gap: 200px;
`

export const AboutFlutterGridItem = styled.div`

`

export const AboutFlutterGridItemTitle = styled.h4`
	font-size: 50px;
	font-weight: 500;

	@media screen and (max-width: 1024px) {
       font-size: 30px;
    }

	@media screen and (max-width: 960px) {
       font-size: 20px;
    }
`

export const AboutFlutterGridItemText = styled.p`
	padding-top: 20px;
`