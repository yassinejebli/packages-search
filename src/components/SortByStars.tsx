import React from 'react';
import styled from 'styled-components';
import {theme} from "../theme/theme";
import {useDispatch, useSelector} from "react-redux";
import {sortModulesByStars} from "../actions/moduleActions";
import {ModuleState} from "../reducers/moduleReducer";
import {ReactComponent as SortIcon} from "../assets/icons/sort.svg";

const SortByStars = () => {
    const dispatch = useDispatch();
    const sortedByStars = useSelector<ModuleState, boolean>(state => state.meta.sortedByStars);

    const onModulesSortByStars = () => {
        dispatch(
            sortModulesByStars(!sortedByStars)
        );
    };
    return (
        <Wrapper title="Sort by stars" onClick={onModulesSortByStars}>
            <SortIcon style={{fill: sortedByStars?theme.color.lightBlue:theme.color.lightGray2}}/>
        </Wrapper>
    );
};

const Wrapper = styled.span`
    cursor: pointer;
`;

export default SortByStars;
