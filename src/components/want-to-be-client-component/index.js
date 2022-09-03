
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { GridContainer, ActionTextWrapper, ActionText } from '../want-to-be-client-component/want-to-be-client-styles'

const WantToBeClientComponent = () => {
    return (
        <>
            <GridContainer>
                <StaticImage className="p1" height={190} src="../../images/row1col1.png" alt="c7r1" />
                <StaticImage className="p2" height={190} src="../../images/row1col2.png" alt="c7r1" />
                <StaticImage className="p3" height={190} src="../../images/row1col3.png" alt="c7r1" />
                <StaticImage className="p4" height={190} src="../../images/row1col4.png" alt="c7r1" />
                <StaticImage className="p5" height={190} src="../../images/row1col5.png" alt="c7r1" />

                <StaticImage className="p6" height={190} src="../../images/row2col1.png" alt="c7r1" />
                <StaticImage className="p7" height={190} src="../../images/row2col2.png" alt="c7r1" />
                <ActionTextWrapper>
                    <ActionText>{'Want to be our client?'}</ActionText>
                </ActionTextWrapper>
                <StaticImage className="p8" height={190} src="../../images/row2col3.png" alt="c7r1" />
                <StaticImage className="p9" height={190} src="../../images/row2col4.png" alt="c7r1" />

                <StaticImage className="p10" height={190} src="../../images/row3col1.png" alt="c7r1" />
                <StaticImage className="p11" height={190} src="../../images/row3col2.png" alt="c7r1" />
                <StaticImage className="p12" height={190} src="../../images/row3col3.png" alt="c7r1" />
                <StaticImage className="p13" height={190} src="../../images/row3col4.png" alt="c7r1" />
                <StaticImage className="p14" height={190} src="../../images/row3col5.png" alt="c7r1" />
                <StaticImage className="p15" height={190} src="../../images/row3col6.png" alt="c7r1" />
            </GridContainer>
        </>
    )
}



export default WantToBeClientComponent