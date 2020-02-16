import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import {theme} from "../../theme/theme";
import {useDispatch} from "react-redux";
import {setPaginationDataAction} from "../../actions/paginationActions";

const {fontSize} = theme;

const Pagination = () => {
    const dispatch = useDispatch();

    const onPageChange = ({selected}: {selected: number}) => {
        dispatch(
            setPaginationDataAction(selected+1)
        );
    };
    return (
        <Wrapper>
            <ModulesFoundText>122234 modules</ModulesFoundText>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                pageCount={40}
                pageRangeDisplayed={5}
                containerClassName="pagination"
                marginPagesDisplayed={0}
                onPageChange={onPageChange}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModulesFoundText = styled.div`
    font-size: ${fontSize.m};
`;


export default Pagination;
