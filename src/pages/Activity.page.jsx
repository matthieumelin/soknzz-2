import PropTypes, { useEffect } from "prop-types";
import React from 'react'
import { Helmet } from 'react-helmet-async';

import styled from 'styled-components'

import Navbar from '../components/Navbar.component';
import Sidebar from '../components/Sidebar.component';
import Data from "../components/Data.component";

export default function Activity({ currentLocation, setCurrentLocation, data }) {
    useEffect(() => {
        setCurrentLocation("activites");
    }, []);

    return (
        <StyledPage>
            <Helmet>
                <title>Soknz - Activités</title>
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

Activity.propTypes = {
    currentLocation: PropTypes.string.isRequired,
    setCurrentLocation: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
}

const StyledBalance = styled.div``;
const Main = styled.main``;
const Container = styled.div``;