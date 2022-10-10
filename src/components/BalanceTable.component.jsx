import React from 'react'

import styled from 'styled-components'

import Info from './Info.component';

export default function BalanceTable({ balance }) {
    const getSum = (type) => {
        return balance.reduce((accumulator, item) => {
            return type === "usd"
                ? accumulator + item.transfer.usd
                : accumulator + item.transfer.bitcoin;
        }, 0);
    };

    return (
        <StyledBalanceTable>
            <Title>Balance</Title>
            <Total>
                <DataItemStatus status="Total">Total</DataItemStatus>
                <DataItemAmount status="Total">$ 325</DataItemAmount>
                <DataItemAmount status="Total">BTC 0.0011528</DataItemAmount>
            </Total>
            <Table>
                {balance &&
                    balance.map((item) => {
                        return (
                            <DataItem key={item.id}>
                                <DataItemStatus status={item.status}>
                                    {item.status}
                                </DataItemStatus>
                                <DataItemAmount>$ {item.transfer.usd}</DataItemAmount>
                                <DataItemAmount>
                                    BTC {item.transfer.bitcoin}
                                </DataItemAmount>
                            </DataItem>
                        );
                    })}
                <DataItem>
                    <DataItemStatus>Total</DataItemStatus>
                    <DataItemAmount>$ {getSum("usd")}</DataItemAmount>
                    <DataItemAmount>BTC {getSum("bitcoin")}</DataItemAmount>
                </DataItem>
            </Table>
            <Info />
        </StyledBalanceTable>
    )
}

const StyledBalanceTable = styled.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    width: 768px;
  }
`;
const Total = styled.div`
  border: 1.5px solid darkgray;
  border-radius: 10px;
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 103%;
    margin: 100px 0 0 0;
  }
`;

const Title = styled.h1`
  letter-spacing: 1px;
`;

const Table = styled.ul`
  list-style: none;
  padding: 0;
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    margin: 100px 0 0 0;
  }
`;
const DataItem = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid lightgray;
  padding: 0 0 20px 0;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const DataItemAmount = styled.p`
  font-weight: 600;
  color: ${(props) => (props.status === "Total" ? "black" : "darkgray")};
  margin: 0;
  ${DataItem}:last-child & {
    color: black;
  }

  @media screen and (min-width: 1024px) {
    width: 150px;
    white-space: nowrap;

    ${Total} & {
      width: 150px;
    }
  }
`;
const DataItemStatus = styled.p`
  font-weight: 600;
  color: ${(props) => (props.status === "Total" ? "black" : "darkgray")};
  margin: 0;

  @media screen and (min-width: 1024px) {
    width: 150px;
  }

  ${DataItem}:last-child & {
    color: black;
  }
`;
