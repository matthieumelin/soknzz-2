import PropTypes from "prop-types";
import React from 'react'

import styled from 'styled-components'

export default function Data({ title, data }) {
    return (
        <StyledData>
            <Title>{title}</Title>
            <Table>
                {data && data.map((item) => {
                    return <TableItem key={item.id}>
                        <TableItemStatus>{item.status}</TableItemStatus>
                        <TableItemAmount>$ {item.transfer.usd}</TableItemAmount>
                        <TableItemAmount>BTC {item.transfer.btc}</TableItemAmount>
                    </TableItem>
                })}
                <TableItem>
                    <TableItemStatus>Total</TableItemStatus>
                    <TableItemAmount>$ {data.map((item) => item.transfer.usd)}</TableItemAmount>
                    <TableItemAmount>BTC {data.map((item) => item.transfer.btc)}</TableItemAmount>
                </TableItem>
            </Table>
            <Info>* Le solde disponible doit être au moins $20 pour faire un transfer.</Info>
        </StyledData>
    )
}

Data.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

const StyledData = styled.div``;
const Title = styled.h2``;
const Table = styled.ul``;
const TableItem = styled.li``;
const TableItemAmount = styled.p``;
const TableItemStatus = styled.p``;
const Info = styled.p``;