import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Balance from "./pages/Balance.page";
import Partners from "./pages/Partners.page";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [filtredPartners, setFiltredPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [currentSubPage, setCurrentSubPage] = useState("");
  const [partners, setPartners] = useState([]);
  const [balance, setBalance] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        setPartners(result.partners);
        setFiltredPartners(result.partners);
        setBalance(result.balance);
        setActivities(result.activities);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/balance"
          element={
            <Balance
              currentPage={currentPage}
              currentSubPage={currentSubPage}
              setCurrentPage={setCurrentPage}
              setCurrentSubPage={setCurrentSubPage}
              balance={balance}
              activities={activities}
            />
          }
        />
        <Route index element={<Partners
          partners={partners}
          currentPage={currentPage}
          search={search}
          selectedFilter={selectedFilter}
          filtredPartners={filtredPartners}
          setSearch={setSearch}
          setFiltredPartners={setFiltredPartners}
          setCurrentPage={setCurrentPage}
          setSelectedFilter={setSelectedFilter} />} />
      </Routes>
    </BrowserRouter>
  );
}
