import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const About = () => (
  <StyledSection>
    <AboutContainer id="about">
      <AboutTitle>About</AboutTitle>
      <p>Nicole is the founder of Goodman Analytics. She has over 10 years of experience consulting for companies in the healthcare, technology, industrial, and consumer goods industries. Prior to starting Goodman Analytics, she worked at DuckerFrontier/Frontier Strategy Group where she led dozens of analytics consulting engagements for large multinational corporations all over the world. In addition to leading consulting projects, she was responsible for creating, maintaining, and expanding a database of economic data, pulling in data on a monthly basis from over 60 different sources, and partnering with country experts to continually forecast the data series. Her expertise includes working with large, economic data sets, time series forecasting, R and SQL programming, data visualization, and partnering with multiple stakeholders from diverse backgrounds. Prior to joining DuckerFrontier/FSG, Nicole was an analyst at comScore where she analyzed online traffic data and a statistical analyst at BioStat Solutions where she analyzed genetic SNP data. Nicole holds a bachelor’s degree in statistics and economics and a master’s degree in statistical practice, both from Carnegie Mellon University.</p>
    </AboutContainer>
  </StyledSection>
)

export default About

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const AboutTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`
