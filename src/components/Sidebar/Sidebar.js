import React from 'react';
import styled from "styled-components";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #ffffff; /* Black */
  opacity: .4;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {

    render() {
        return (
            <StyledSideNav></StyledSideNav>
        );
      }
}
export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    
    );
  }
}