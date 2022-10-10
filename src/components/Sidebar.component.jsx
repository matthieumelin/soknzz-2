import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { ReactComponent as HandshakeIcon } from "../assets/icons/handshake.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";

export default function Sidebar({ currentPage }) {
  return (
    <StyledSidebar>
      <Menu>
        <MenuItem>
          <MenuLink to="/" page={currentPage} name="/">
            <HandshakeIcon
              fill={currentPage === "/" ? "white" : "black"}
              style={{ width: 18, height: 18 }}
            />
            Partenaires
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/balance" page={currentPage} name="balance">
            <WalletIcon
              fill={currentPage === "balance" ? "white" : "black"}
              style={{
                width: 18,
                height: 18,
              }}
            />
            Portefeuille
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/" page={currentPage} name="profile">
            <UserIcon
              fill={currentPage === "profile" ? "white" : "black"}
              style={{ width: 18, height: 18 }}
            />
            Profil
          </MenuLink>
        </MenuItem>
      </Menu>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.aside`
  @media screen and (min-width: 1024px) {
    border-right: 1.5px solid darkgray;
    height: 90vh;
    margin: 20px 0;
  }
`;
const Menu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    margin: 60px 0;
    padding: 0;
    gap: 30px;
  }
`;
const MenuItem = styled.li``;
const MenuLink = styled(Link)`
  display: flex;
  padding: 15px 10px;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  padding: 15px 30px;
  ${(props) =>
    props.page === props.name
      ? `
      color: white;
      border-radius: 0;
background: linear-gradient(90deg, rgba(148,187,233,1) 20%, rgba(196,155,255,1) 50%, rgba(238,174,202,1) 80%, rgba(238,174,202,1) 100%);  `
      : null};
  @media screen and (min-width: 1024px) {
    ${(props) =>
      props.page === props.name
        ? `
            border-radius: 0 5px 5px 0;`
        : null};
    margin: 0 30px 0 0;
  }
`;
