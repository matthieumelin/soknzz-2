import React from "react";

import styled from "styled-components";

export default function Filter({
  name,
  partners,
  search,
  selectedFilter,
  setSelectedFilter,
  setFiltredPartners,
}) {
  /**
   * Filter brands by category
   * @returns {Array} partners
   */
  const onSelect = () => {
    setSelectedFilter(name);

    const filtred = partners.filter((item) => {
      return name === item.category && item.name
        .toLowerCase()
        .trim()
        .includes(search.toLowerCase().trim());
    });

    if (name === "Tous") {
      setFiltredPartners(partners);
    } else {
      if (filtred.length) {
        setSelectedFilter(filtred[0].category);
        setFiltredPartners(filtred);
      }
    }
  };

  return (
    <StyledFilter
      type="button"
      name={name}
      selectedFilter={selectedFilter}
      onClick={onSelect}
    >
      {name}
    </StyledFilter>
  );
}

const StyledFilter = styled.button`
  background-color: ${(props) =>
    props.selectedFilter === props.name ? "black" : "transparent"};
  color: ${(props) =>
    props.selectedFilter === props.name ? "white" : "black"};
  border: 1.5px solid black;
  border-radius: 20px;
  padding: 7px 0;
  width: 200px;
  font-weight: 600;
  font-family: inherit;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: black;
    color: white;
  }
`;
