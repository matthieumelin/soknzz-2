import React from 'react'

import styled from 'styled-components';

export default function Partner({ partner }) {
    return (
        <StyledPartner>
            <PartnerLogo src={partner.logoUrl} alt={partner.name} />
            <PartnerName>{partner.name}</PartnerName>
            <PartnerLink href={partner.displayUrl} target="_blank">Aller sur le site</PartnerLink>
        </StyledPartner>
    )
}

const StyledPartner = styled.li`
@media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const PartnerLogo = styled.img`
display: block;
width: 100px;
`;
const PartnerName = styled.h4`
font-weight: 600;
width: 100px;
`;
const PartnerLink = styled.a`
text-decoration: none;
border: 1.5px solid black;
border-radius: 20px;
padding: 10px 60px;
color: black;
display: block;
width: max-content;
font-size: 0.8rem;
transition: 0.2s;

&:hover {
    transition: 0.2s;
    background-color: black;
    color: white;
}
`;