import React, { Component } from "react";
import styled from "styled-components";
import { Typography, Link, Grid } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterContainer = styled.div`
  position: relative; 
  bottom: 0px; 
  padding-top: 2vh;
  padding-left: 2vh;
  padding-right: 2vh;
  text-align: center;
  color: gray;
`
const CopyrightContainer = styled.div`
  padding: 2vh;
  border-top: 1px solid #d9d9d9;
`

const LinkGrid = styled(Grid)`
  margin: 5px;
`

function Copyright() {
  return (
      <CopyrightContainer>
        <Typography>
            {"Created by Duke Ko "}
        </Typography>
        <div>
          <Grid container direction="row" alignItems="center" alignContent="center" justify="center">
            <Link color="inherit" href="https://www.linkedin.com/in/duke-ko-01ab03169/">
              <LinkGrid container direction="row" alignItems="center" >
                <LinkedInIcon style={{marginRight: "3px"}} />LinkedIn
              </LinkGrid>
            </Link>
            |
            <Link color="inherit" href="https://github.com/dukhyunko93/BasketballStatTracker">
              <LinkGrid container direction="row" alignItems="center">
                <GitHubIcon style={{marginRight: "5px"}} fontSize="small"/> GitHub
              </LinkGrid>
            </Link>
          </Grid>
        </div>
      </CopyrightContainer>
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