import React from 'react'

import styled from 'styled-components'

export default function TransferCard({ icon, title, description }) {
    return (
        <StyledTransferCard>
            <TransferCardIcon src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`} />
            <TransferCardInfo>
                <TransferCardInfoTitle>{title}</TransferCardInfoTitle>
                <TransferCardInfoDescription>{description}</TransferCardInfoDescription>
            </TransferCardInfo>
        </StyledTransferCard>
    )
}

const StyledTransferCard = styled.div`
display: flex;
align-items: center;
border-radius: 10px;
border: 1px solid black;
padding: 20px 50px;
gap: 30px;
&:hover {
    cursor: pointer;
}

@media screen and (min-width: 1024px) {
    width: 550px;
}
`;
const TransferCardIcon = styled.img`
display: block;
width: 32px;
height: 32px;
`;
const TransferCardInfo = styled.div`
}
`;
const TransferCardInfoTitle = styled.h4`
margin: 0;
font-weight: 700;
`;
const TransferCardInfoDescription = styled.p`
font-weight: 600;
font-size: 0.8rem;
margin: 0;
`;
