import React from 'react'

import styled from 'styled-components'

import Info from './Info.component';
import TransferCard from "./TransferCard.component";

export default function Transfer() {
    return (
        <StyledTransfer>
            <Title>
                Transfert
            </Title>
            <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum minus, accusamus necessitatibus enim soluta, quos dignissimos veniam officiis consequuntur veritatis sint aliquid iure harum doloribus non impedit doloremque quo commodi!
            </Description>
            <Content>
                <AmountAvailable>
                    Disponible : $ 20
                    <AmountAvailableSpan>BTC 0.00013102</AmountAvailableSpan>
                </AmountAvailable>
                <Info />
                <TransferCards>
                    <TransferCard
                        icon="wallet"
                        title="Transfert vers un Wallet"
                        description="Transfert tes Bitcoin vers une adresse bitcoin valide" />
                    <TransferCard
                        icon="credit-card"
                        title="Transfert vers un Compte Bancaire"
                        description="Transfert directement en euro sur ton Compte en Banque" />
                </TransferCards>
            </Content>
        </StyledTransfer>
    )
}

const StyledTransfer = styled.div`
padding: 20px;
`;
const Title = styled.h1`
  letter-spacing: 1px;
`;
const Description = styled.p`
font-weight: 600;
color: darkgray;
max-width: 1024px;
`;
const Content = styled.div`
`;
const AmountAvailable = styled.div`
color: black;
font-weight: 600;
display: flex;
align-items: center;
gap: 20px;
`;
const AmountAvailableSpan = styled.span`
color: darkgray;
`;
const TransferCards = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 50px 0 0 0;
border-top: 1.5px solid darkgray;
@media screen and (min-width: 1024px) {
    flex-direction: row;
}
`;