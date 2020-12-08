import React, { Component } from "react";
import styled from "styled-components";
import { Typography, Link } from "@material-ui/core"
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

const FooterContainer = styled.div`
  text-align: center;
  bottom: 0;
  width: 100% !important;
  height: 100px !important ;
  background: #6cf;
`;

function Copyright() {
  return (
      <>
          <Typography variant="body2" color="textSecondary">
              {"Created by Duke Ko "}
          </Typography>
          <Typography>
              <Link color="inherit" href="https://dukhyunko93.github.io/">
                  <AccountBoxOutlinedIcon fontSize="large"/>
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