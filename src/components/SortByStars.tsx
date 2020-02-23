import React from 'react';
import styled from 'styled-components';
import {theme} from "../theme/theme";
import {useDispatch} from "react-redux";
import {sortModulesByStars} from "../actions/moduleActions";
import {ReactComponent as SortIcon} from "../assets/icons/sort.svg";
import useDebounce from "../hooks/useDebounce";

const SortByStars = () => {
    const dispatch = useDispatch();
    const [sortedByStars, setSortedByStars] = React.useState(false);
    const debouncedSortedByStars = useDebounce(sortedByStars, 200);

    React.useEffect(()=>{
        dispatch(
            sortModulesByStars(debouncedSortedByStars)
        );
    }, [debouncedSortedByStars]);

    const onModulesSortByStars = () => {
        setSortedByStars(!sortedByStars);
    };
    return (
        <Wrapper title="Sort modules by stars"
                 onClick={onModulesSortByStars}
                 data-testid="sort"
        >
            <SortIcon data-testid="sort-icon"
                      style={{fill: sortedByStars?theme.color.lightBlue:theme.color.lightGray2}}
            />
        </Wrapper>
    );
};

const Wrapper = styled.span`
    cursor: pointer;
`;

export default SortByStars;
