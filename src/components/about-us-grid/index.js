
import React, { useState, useEffect } from 'react'
import { AboutUsGridWrapper, AboutUsGridItem, AboutUsGridItemText, AboutUsGridItemTitle, AboutUsGridItemSubtitle, AboutUsGridItemUl, AboutUsGridItemLi } from '../about-us-grid/about-us-grid-styles'
import { BsArrowUpRight } from 'react-icons/bs'
import Img from "gatsby-image"

const AboutUsGridComponent = () => {
    return (
        <>
            <AboutUsGridWrapper>
                <AboutUsGridItem>
                    <AboutUsGridItemText>
                        <AboutUsGridItemTitle>
                            {
                                'Cross-platform App Development'
                            }
                        </AboutUsGridItemTitle>
                        <AboutUsGridItemSubtitle>
                            {
                                'Build your app once, deploy it to any screen — mobile, desktop, web, and more.'
                            }
                        </AboutUsGridItemSubtitle>

                        <AboutUsGridItemUl>
                            <AboutUsGridItemLi></AboutUsGridItemLi>
                        </AboutUsGridItemUl>
                    </AboutUsGridItemText>
                    <Img fixed={'../../../images/grid-image.png'} />
                </AboutUsGridItem>
                <AboutUsGridItem>
                    <AboutUsGridItemText>
                        <AboutUsGridItemTitle>
                            {
                                'Advanced development practices'
                            }
                        </AboutUsGridItemTitle>
                        <AboutUsGridItemSubtitle>
                            {
                                'We use the best and most modern technologies and approaches to development that accele'
                            }
                        </AboutUsGridItemSubtitle>
                        <AboutUsGridItemUl>
                            <AboutUsGridItemLi></AboutUsGridItemLi>
                        </AboutUsGridItemUl>
                    </AboutUsGridItemText>
                </AboutUsGridItem>
                <AboutUsGridItem>
                    <AboutUsGridItemText>
                        <AboutUsGridItemTitle>
                            {
                                'Full development lifecycle from design to performance analytics'
                            }
                        </AboutUsGridItemTitle>
                        <AboutUsGridItemSubtitle>
                            {
                                'We provide the full development lifecycle of your product, from working on its design to performance analytics and monitoring user satisfaction with your product.'
                            }
                        </AboutUsGridItemSubtitle>
                        <AboutUsGridItemUl>
                            <AboutUsGridItemLi></AboutUsGridItemLi>
                        </AboutUsGridItemUl>
                    </AboutUsGridItemText>
                </AboutUsGridItem>
            </AboutUsGridWrapper>
        </>
    )
}



export default AboutUsGridComponent