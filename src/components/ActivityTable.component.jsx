import React from 'react'

import styled from 'styled-components'

export default function ActivityTable({ activities }) {
    return (
        <StyledActivity>
            <Title>
                Activité du compte
            </Title>
            <Table>
                <TableHeader>
                    <TableHeaderItem>
                        Transaction : {activities.length}
                    </TableHeaderItem>
                    <TableHeaderItem>
                        Gains
                    </TableHeaderItem>
                    <TableHeaderItem>
                        Date
                    </TableHeaderItem>
                </TableHeader>
                <TableContent>
                    {activities.length ? activities.map((item) => {
                        return (
                            <TableContentItem key={item.id}>
                                <TableContentItemValue>{item.id}</TableContentItemValue>
                                <TableContentItemValue>{item.earnings}</TableContentItemValue>
                                <TableContentItemValue>{item.date}</TableContentItemValue>
                            </TableContentItem>
                        )
                    }) : <NotFound>Pas de résultat Trouvé.</NotFound>}
                </TableContent>
            </Table>
        </StyledActivity>
    )
}

const StyledActivity = styled.div`
padding: 20px;
`;
const Title = styled.h1`
  letter-spacing: 1px;
`;
const Table = styled.div`
`;
const TableHeader = styled.div`
padding: 0 0 20px 0;
border-bottom: 1.5px solid darkgray;

@media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`;
const TableHeaderItem = styled.div`
font-weight: 600;
color: darkgray;

@media screen and (min-width: 1024px) {
    width: 120px;
}
`;
const TableContent = styled.div`
margin: 20px 0 0 0;
display:flex;
flex-direction: column;
gap: 20px;

@media screen and (min-width: 1024px) {
    width: 100%;
    justify-content: space-between;
}
`;
const TableContentItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const TableContentItemValue = styled.div`
@media screen and (min-width: 1024px) {
    width: 120px;
}
`;
const NotFound = styled.p`
text-align: center;
font-weight: 500;
`;