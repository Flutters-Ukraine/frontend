import React from "react"
import DescriptionTextComponent from "../description-text"
import {
  AboutFlutterWrapper,
  AboutFlutterGrid,
  AboutFlutterGridItem,
  AboutFlutterGridItemTitle,
  AboutFlutterGridItemText,
} from "./about-flutter-styles"

const AboutFlutterComponent = () => {
  return (
    <>
      <div id="aboutFlutter"></div>
      <AboutFlutterWrapper>
        <DescriptionTextComponent
          text={
            "Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase."
          }
        />
        <AboutFlutterGrid>
          <AboutFlutterGridItem>
            <AboutFlutterGridItemTitle>
              {"Loved by developers 💙"}
            </AboutFlutterGridItemTitle>
            <AboutFlutterGridItemText>
              {
                "Overall, 92% of respondents were somewhat satisfied or very satisfied with Flutter."
              }
            </AboutFlutterGridItemText>
          </AboutFlutterGridItem>
          <AboutFlutterGridItem>
            <AboutFlutterGridItemTitle>
              {"Flutter is fast 🔥"}
            </AboutFlutterGridItemTitle>
            <AboutFlutterGridItemText>
              {
                "Flutter code compiles to ARM or Intel machine code as well as JavaScript, for fast performance on any device."
              }
            </AboutFlutterGridItemText>
          </AboutFlutterGridItem>
          <AboutFlutterGridItem>
            <AboutFlutterGridItemTitle>
              {"Dart language 🐦"}
            </AboutFlutterGridItemTitle>
            <AboutFlutterGridItemText>
              {
                "Flutter is powered by Dart, a language optimized for fast apps on any platform."
              }
            </AboutFlutterGridItemText>
          </AboutFlutterGridItem>
          <AboutFlutterGridItem>
            <AboutFlutterGridItemTitle>
              {"Wide application 📱"}
            </AboutFlutterGridItemTitle>
            <AboutFlutterGridItemText>
              {"Good both for small MVP's and huge scalable apps."}
            </AboutFlutterGridItemText>
          </AboutFlutterGridItem>
        </AboutFlutterGrid>
      </AboutFlutterWrapper>
    </>
  )
}

export default AboutFlutterComponent
