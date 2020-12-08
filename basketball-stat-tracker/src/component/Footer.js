import React, { Component } from "react";
import styled from "styled-components";
import { Typography, Link } from "@material-ui/core"
import LinkedInLogo from "./images/LinkedIn.png"
import MediumLogo from "./images/Medium.png"
import GithubLogo from "./images/Github.png"
import './Footer.css'

const FooterContainer = styled.div`
  position: relative
  text-align: center;
  bottom: 0;
  width: 100% !important;
  height: 100px !important ;    
  background-color: #3f51b5;
  color: white;
`;
const LogoCointainer = styled.div`
`
const Logo = styled.img`
`
function Copyright() {
  return (
      <>
          <Typography variant="body2">
              {"Created by Duke Ko "}
          </Typography>
          <LogoCointainer>
              <Link color="inherit" href="https://dukhyunko93.github.io/">
                <Logo src={LinkedInLogo}/>
              </Link>
            <Logo src={MediumLogo}/>
            <Logo src={GithubLogo}/>
          </LogoCointainer>
          <Typography>
              <Link color="inherit" href="https://dukhyunko93.github.io/">
                <image className="medium"/>
                <image className="github"/>
              </Link>
          </Typography>
      </>
  );
}

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        { Copyright() }
      </FooterContainer>
    );
  }
}

export default Footer;