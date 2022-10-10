import React from "react";

import styled from "styled-components";

import Profile from "./Profile.component";

export default function Navbar({ currentSubPage, setCurrentSubPage }) {
  return (
    <StyledNavbar>
      <Menu>
        <MenuItem
          page={currentSubPage}
          name="balance"
          onClick={() => setCurrentSubPage("balance")}>
          Balance
        </MenuItem>
        <MenuItem page={currentSubPage} name="activity"
          onClick={() => setCurrentSubPage("activity")}>
          Activité
        </MenuItem>
        <MenuItem page={currentSubPage} name="transfer"
          onClick={() => setCurrentSubPage("transfer")}>
          Transfer
        </MenuItem>
      </Menu>
      <Profile />
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
`;
const Menu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
const MenuItem = styled.li`
background-color: ${(props) =>
    props.page === props.name ? "black" : "transparent"};
color: ${(props) =>
    props.page === props.name ? "white" : "black"};
border: 2px solid black;
border-radius: 10px;
padding: 7px 0;
width: 180px;
display: block;
text-align: center;
font-weight: 600;
font-family: inherit;
transition: 0.2s;

&:hover {
  cursor: pointer;
  transition: 0.2s;
  background-color: black;
  color: white;
}
`;
