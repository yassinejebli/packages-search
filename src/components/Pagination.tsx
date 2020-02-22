import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import {theme} from "../theme/theme";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../actions/moduleActions";
import {MetaData, ModuleState} from "../reducers/moduleReducer";
import useDebounce from "../hooks/useDebounce";

const {fontSize} = theme;

const Pagination = () => {
    const dispatch = useDispatch();
    const {total, perPage} = useSelector<ModuleState, MetaData>(state=>state.meta);
    const [selectedPage, setSelectedPage] = React.useState();
    const debouncedSelectedPage: number = useDebounce(selectedPage, 500);

    React.useEffect(()=>{
        if(debouncedSelectedPage){
            dispatch(
                setCurrentPage(selectedPage)
            );
        }
    }, [debouncedSelectedPage]);

    const onPageChange = ({selected}: {selected: number}) => {
        setSelectedPage(selected+1);
    };

    return (
        <Wrapper>
            <ModulesFoundText>{total>0&&total + ' modules'}</ModulesFoundText>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                pageCount={Math.ceil(total/perPage)}
                pageRangeDisplayed={perPage}
                activeClassName="active" // bootstrap
                containerClassName="pagination"
                marginPagesDisplayed={1}
                onPageChange={onPageChange}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const ModulesFoundText = styled.div`
    font-size: ${fontSize.m};
`;


export default Pagination;
