import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme/theme";

const {color, backgroundColor, margin} = theme;

interface TagProps {
    text: string;
}

const Tag = ({text}: TagProps) => {
    return (
        <StyledTag>
            {text}
        </StyledTag>
    );
};

const StyledTag = styled.span`
    color: ${color.lightGray2};
    padding: 4px 12px;
    background-color: ${backgroundColor.lightGray3};
    margin-right: ${margin.xs};
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
    
    &:hover{
      background-color: ${backgroundColor.lightGray};
    }
`;

export default Tag;
