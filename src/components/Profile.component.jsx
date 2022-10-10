import React from 'react'

import styled from 'styled-components'

export default function Profile() {
    return (
        <StyledProfile>
            <Logout type="button">Déconnexion</Logout>
            <ProfileAvatar
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt="Profile"
            />
        </StyledProfile>
    )
}

const StyledProfile = styled.div`
display: flex;
align-items: center;
gap: 10px;

@media screen and (min-width: 1024px) {
    padding: 0 20px;
}
`;
const Logout = styled.button`
  background-color: transparent;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 7px 0;
  width: 180px;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: inherit;
  font-family: inherit;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: black;
    color: white;
  }
`;
const ProfileAvatar = styled.img`
display: block;
width: 42px;
height: 42px;
border-radius: 100px;
`;

