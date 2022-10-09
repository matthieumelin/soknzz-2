import PropTypes, { useEffect } from "prop-types";
import React from 'react'
import { Helmet } from 'react-helmet-async';

import styled from 'styled-components'

import Navbar from '../components/Navbar.component';
import Sidebar from '../components/Sidebar.component';
import Data from "../components/Data.component";

export default function Balance({ currentLocation, setCurrentLocation, data }) {
    useEffect(() => {
        setCurrentLocation("/");
    }, []);

    return (
        <StyledPage>
            <Helmet>
                <title>Soknz - Balance</title>
            </Helmet>
            <Sidebar
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation} />
            <Main>
                <Navbar />
                <Data title="Balance" data={data} />
            </Main>
        </StyledPage>
    )
}

Balance.propTypes = {
    currentLocation: PropTypes.string.isRequired,
    setCurrentLocation: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
}

const StyledPage = styled.div``;
const Main = styled.main``;
const Container = styled.div``;