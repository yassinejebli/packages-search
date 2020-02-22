import React from 'react';
import styled, {css} from 'styled-components';
import {theme} from "../theme/theme";
import ModuleItem from "./ModuleItem";
import {useDispatch, useSelector} from "react-redux";
import {ModuleState} from "../reducers/moduleReducer";
import {loadModules} from "../actions/moduleActions";
import {ModuleModel} from "../models/ModuleModel";
import { ReactComponent as LoaderIcon } from "../assets/icons/loader.svg";

const {margin} = theme;

const ModuleList = () => {
    const dispatch = useDispatch();
    const {isLoading, error, moduleList} = useSelector<ModuleState, ModuleState>(state=>state);

    React.useEffect(()=>{
        dispatch(
            loadModules()
        );
    },[]);

    if(error)
        return null;

    if(isLoading)
        return (
            <LoaderIconWrapper>
                <LoaderIcon />
            </LoaderIconWrapper>
        );

    return (
        <Wrapper>
            {moduleList.map((module: ModuleModel, index: number) =>
                    <StyledModuleItem isLast={index===moduleList.length-1} key={module.name} {...module}/>
                )
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: ${margin.l};
`;

const StyledModuleItem = styled(ModuleItem)<{isLast: boolean}>`
    margin-top: ${margin.l};
    ${(props)=>props.isLast&&css`
        border-bottom: none;
    `}
`;

const LoaderIconWrapper = styled.div`
    margin: 100px auto;
`;
export default ModuleList;
