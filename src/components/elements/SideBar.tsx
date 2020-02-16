import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme/theme";

const {color, margin, fontWeight, fontSize} = theme;

const SideBar = () => {
    return (
        <Wrapper>
            <MenuItem>Home</MenuItem>
            <MenuItem>Configuration</MenuItem>
            <MenuItem>API</MenuItem>
            <MenuItem>Tools</MenuItem>
            <MenuItem>About</MenuItem>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuItem = styled.div`
    color: ${color.lightBlue};
    cursor: pointer;
    user-select: none;
    margin-top: ${margin.m};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.l};
`;

export default SideBar;
