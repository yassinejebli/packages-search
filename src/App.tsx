import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./store/store";
import Header from "./components/elements/Header";
import GlobalStyle from "./theme/theme";
import SideBar from "./components/elements/SideBar";
import styled from "styled-components";
import Content from "./components/elements/Content";

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Header/>
            <Container>
                <SideBar/>
                <Content/>
            </Container>
        </Provider>
    );
};

const Container = styled.div`
   max-width: 1000px;
   margin: 24px auto;
   padding: 0 12px;
   display: flex;
   
   @media (max-width: 768px){
        flex-direction: column;
        margin: 8px;
        padding:0;
    }
`;

export default App;
