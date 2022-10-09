import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Balance from './pages/Balance.page'

export default function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Balance
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          data={data} />} />
      </Routes>
    </BrowserRouter>
  )
}
