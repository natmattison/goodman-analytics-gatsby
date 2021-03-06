import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Header = () => {

  return (
    <HeaderWrapper id="top">
      <StyledContainer>
        <HeaderTextGroup>
          <h1>
            Goodman Analytics
          </h1>
          <h2>
            Nicole Goodman, finding and monitoring untapped value in your datasets using the best statistical and data science techniques
          </h2>
        </HeaderTextGroup>
      </StyledContainer>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
// const Subtitle = styled.h5`
//   font-size: 16px;
//   color: ${props => props.theme.color.accent};
//   letter-spacing: 0px;
//   margin-bottom: 16px;
// `
const StyledContainer = styled(Container)``

const HeaderTextGroup = styled.div`
  margin: 0;
  padding-bottom: 100px;
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: left;
  }


  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
    margin-left: auto;
    margin-right: auto;
    max-width: 680px;
  }

  p {
    margin-bottom: 48px;
  }
  
`

// const HeaderForm = styled.form`
//   display: flex;
//   flex-direction: row;
//   padding-bottom: 16px;

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     flex-direction: column;
//   }
// `

// const HeaderInput = styled.input`
//   font-weight: 500;
//   font-size: 16px;
//   color: ${props => props.theme.color.primary};
//   line-height: 42px;
//   width: 100%;
//   text-align: left;
//   height: 60px;
//   border-width: 1px;
//   border-style: solid;
//   border-color: ${props => props.theme.color.secondary};
//   border-image: initial;
//   border-radius: 4px;
//   padding: 8px 16px;
//   outline: 0px;
//   &:focus {
//     box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
//   }
//   @media (max-width: ${props => props.theme.screen.md}) {
//     margin-bottom: 8px;
//   }
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     display: block;
//     width: 100%;
//   }
// `

// const HeaderButton = styled.button`
//   font-weight: 500;
//   font-size: 14px;
//   color: white;
//   letter-spacing: 1px;
//   height: 60px;
//   display: block;
//   margin-left: 8px;
//   text-transform: uppercase;
//   cursor: pointer;
//   white-space: nowrap;
//   background: ${props => props.theme.color.secondary};
//   border-radius: 4px;
//   padding: 0px 40px;
//   border-width: 0px;
//   border-style: initial;
//   border-color: initial;
//   border-image: initial;
//   outline: 0px;
//   &:hover {
//     box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
//   }
//   @media (max-width: ${props => props.theme.screen.md}) {
//   }
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-left: 0;
//   }
// `

