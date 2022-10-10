import React from 'react'

import styled from 'styled-components'

export default function Info() {
    return (
        <StyledInfo>
            * Le solde disponible doit être au moins $20 pour faire un
            transfer.
        </StyledInfo>
    )
}

const StyledInfo = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: darkgray;
  padding: 0 0 30px 0;
  `;

