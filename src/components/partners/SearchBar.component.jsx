import React from "react";

import styled from "styled-components";
import Profile from "../Profile.component";

export default function SearchBar({
  partners,
  search,
  setSearch,
  setSelectedFilter,
  setFiltredPartners,
}) {
  const onSearch = (event) => {
    const newSearch = event.target.value;

    setSearch(newSearch);

    const filtred = partners.filter((item) => {
      return item.name
        .toLowerCase()
        .trim()
        .includes(newSearch.toLowerCase().trim());
    });

    if (!newSearch.length) {
      setSelectedFilter("Tous");
      setFiltredPartners(partners);
    } else if (newSearch.trim().length >= 2) {
      if (filtred.length) {
        setSelectedFilter(filtred[0].category);
        setFiltredPartners(filtred);
      }
    }
  };
  return (
    <StyledSearchBar>
      <Input
        type="text"
        value={search}
        onChange={onSearch}
        placeholder="Rechercher un partenaire..."
      />
      <Profile />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
padding: 0 20px 20px 20px;

@media screen and (min-width: 1024px) {
  display: flex;
  align-items: center;
  padding: 20px;
}
`;
const Input = styled.input`
  width: 100%;
  font-family: inherit;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  transition: 0.2s;

  &:focus {
    transition: 0.2s;
    border: 1.5px solid black;
  }
`;
