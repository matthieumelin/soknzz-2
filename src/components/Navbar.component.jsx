import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components'

export default function Navbar() {
    return (
        <StyledNavbar>
            <Menu>
                <MenuItem>
                    <MenuLink to="/">Balance</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/">Activité</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/">Transfer</MenuLink>
                </MenuItem>
            </Menu>
            <Profile>
                <Logout type="button">Déconnexion</Logout>
                <ProfileAvatar src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Profile" />
            </Profile>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav``;
const Menu = styled.ul``;
const MenuItem = styled.li``;
const MenuLink = styled(NavLink)``;
const Profile = styled.div``;
const Logout = styled.button``;
const ProfileAvatar = styled.img``