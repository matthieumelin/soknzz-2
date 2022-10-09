import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components'

import HandshakeIcon from "../assets/icons/handshake.png";
import UserIcon from "../assets/icons/user.png";
import WalletIcon from "../assets/icons/wallet.png";

export default function Sidebar({ currentLocation }) {
    const location = useLocation();
    return (
        <StyledSidebar>
            <Menu>
                <MenuItem isActive={location.pathname.includes(currentLocation)}>
                    <MenuLink to="/">
                        <MenuIcon src={HandshakeIcon} alt="Partenaires" />
                        Partenaires
                    </MenuLink>
                </MenuItem>
                <MenuItem isActive={location.pathname.includes(currentLocation)}>
                    <MenuLink to="/">
                        <MenuIcon src={WalletIcon} alt="Portefeuille" />
                        Portefeuille
                    </MenuLink>
                </MenuItem>
                <MenuItem isActive={location.pathname.includes(currentLocation)}>
                    <MenuLink to="/">
                        <MenuIcon src={UserIcon} alt="Profil" />
                        Profil
                    </MenuLink>
                </MenuItem>
            </Menu>
        </StyledSidebar>
    )
}

const StyledSidebar = styled.aside`
`;
const Menu = styled.ul`
list-style: none;
padding: 0 30px 0 0;
display: flex;
flex-direction: column;
gap: 30px;
`;
const MenuItem = styled.li`
padding: 10px;
border-radius: ${(props) => props.isActive ? "0 5px 5px 0" : "0px"};
color: ${(props) => props.isActive ? "white" : "black"}
background: ${(props) => props.isActive ? "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" : "transparent"};
`;
const MenuLink = styled(Link)`
display: flex;
gap: 10px;
align-items: center;
text-decoration: none;
font-weight: 500;
letter-spacing: 1px;
color: black;
`;
const MenuIcon = styled.img`
width: 18px;
height: 18px;
`;