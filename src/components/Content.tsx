import React from 'react';
import styled from 'styled-components';
import SearchInput from "./SearchBar";
import {theme} from "../theme/theme";
import ModuleList from "./ModuleList";
import Pagination from "./Pagination";
import SortByStars from "./SortByStars";

const {margin} = theme;

const Content = () => {

    return (
        <Wrapper>
            <SearchInput />
            <SortingIconWrapper>
                <SortByStars />
            </SortingIconWrapper>
            <Pagination />
            <ModuleList/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    margin-left: ${margin.xxl};
    
    @media (max-width: 768px){
        margin: 0;
    }
`;

const SortingIconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;  
    margin-top: ${margin.m}; 
`;
export default Content;
