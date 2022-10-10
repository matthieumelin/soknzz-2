import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import styled from "styled-components";

import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Sidebar.component";
import BalanceTable from "../components/BalanceTable.component";
import ActivityTable from "../components/ActivityTable.component";
import Transfer from "../components/Transfer.component";

export default function Balance({ balance, activities, currentPage, currentSubPage, setCurrentSubPage, setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("balance");
    setCurrentSubPage("balance");
  }, [setCurrentPage, setCurrentSubPage]);

  return (
    <StyledPage>
      <Helmet>
        <title>Soknz - Balance</title>
      </Helmet>
      <Main>
        <Sidebar currentPage={currentPage} />
        <Wrapper>
          <Navbar
            currentSubPage={currentSubPage}
            setCurrentSubPage={setCurrentSubPage} />
          {currentSubPage === "balance" ?
            <BalanceTable balance={balance} /> :
            currentSubPage === "activity" ?
              <ActivityTable activities={activities} /> :
              <Transfer />}
        </Wrapper>
      </Main>
    </StyledPage>
  );
}

const StyledPage = styled.div``;
const Main = styled.main`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0 30px;
  }
`;