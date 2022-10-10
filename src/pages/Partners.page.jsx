import React, { useEffect } from "react";

import { Helmet } from "react-helmet-async";

import styled from "styled-components";

import Filter from "../components/partners/Filter.component";
import SearchBar from "../components/partners/SearchBar.component";
import Partner from "../components/partners/Partner.component";
import Sidebar from "../components/Sidebar.component";

export default function Partners({ partners, search, selectedFilter, filtredPartners, currentPage, setCurrentPage, setSearch, setFiltredPartners, setSelectedFilter }) {
    useEffect(() => {
        setCurrentPage("/");
        setSearch("");
        setSelectedFilter("Tous");
    }, [setCurrentPage, setSelectedFilter, setSearch]);

    /**
     * Fetch a partner by deleting duplicate keys
     * @param {Array} - array
     * @param {String} - key
     * @returns {Array} data
     */
    const getUniqueArrayBy = (array, key) => {
        return [...new Map(array.map((item) => [item[key], item])).values()];
    };

    return (
        <StyledPage>
            <Helmet>
                <title>Soknz - Partners</title>
            </Helmet>
            <Main>
                <Sidebar currentPage={currentPage} />
                <Wrapper>
                    <SearchBar
                        partners={partners}
                        search={search}
                        setFiltredPartners={setFiltredPartners}
                        setSearch={setSearch}
                        setSelectedFilter={setSelectedFilter} />
                    <Filters>
                        <Filter
                            name="Tous"
                            partners={partners}
                            search={search}
                            filtredPartners={filtredPartners}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                            setFiltredPartners={setFiltredPartners}
                        />
                        {getUniqueArrayBy(partners, "category").map((item, index) => {
                            return (
                                <Filter
                                    key={`filter_${index}`}
                                    partners={partners}
                                    search={search}
                                    filtredPartners={filtredPartners}
                                    name={item.category}
                                    selectedFilter={selectedFilter}
                                    setSelectedFilter={setSelectedFilter}
                                    setFiltredPartners={setFiltredPartners}
                                />
                            );
                        })}
                    </Filters>
                    <List>
                        {filtredPartners.map((partner, index) => {
                            return <Partner key={`partner_${index}`} partner={partner} />;
                        })}
                    </List>
                </Wrapper>
            </Main>
        </StyledPage>
    );
}

const StyledPage = styled.div`
`;
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
const Filters = styled.ul`
  padding: 0;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 20px;
`;

const List = styled.ul`
  padding: 0;
  Partners-style: none;
  margin: 30px 0 0 0;
  gap: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
