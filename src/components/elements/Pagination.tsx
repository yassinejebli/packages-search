import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import {theme} from "../../theme/theme";
import {useDispatch, useSelector} from "react-redux";
import {loadModules, setCurrentPage} from "../../actions/moduleActions";
import {MetaData, ModuleState} from "../../reducers/moduleReducer";

const {fontSize} = theme;

const Pagination = () => {
    const dispatch = useDispatch();
    const {total, perPage} = useSelector<ModuleState, MetaData>(state=>state.meta);

    //TODO: need to debounce pagination
    const onPageChange = ({selected}: {selected: number}) => {
        dispatch(
            setCurrentPage(selected+1)
        );
        dispatch(
            loadModules()
        ); //TODO: I think it's better to create a new action (setCurrentPageAndLoadModules) that dispatches these two actions!
    };

    return (
        <Wrapper>
            <ModulesFoundText>{total>0&&total + ' modules'}</ModulesFoundText>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                pageCount={total}
                pageRangeDisplayed={perPage}
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
