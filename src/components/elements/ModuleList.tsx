import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme/theme";
import ModuleItem from "./ModuleItem";
import {useDispatch, useSelector} from "react-redux";
import {ModuleState} from "../../reducers/moduleReducer";
import {loadModules} from "../../actions/moduleActions";
import {ModuleModel} from "../../models/ModuleModel";
import { ReactComponent as LoaderIcon } from "../../assets/icons/loader.svg";

const {margin} = theme;

const ModuleList = () => {
    const dispatch = useDispatch();
    const {isLoading, error, moduleList} = useSelector<any, ModuleState>(state=>state.moduleState);

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

    const rowCount = 100; //TODO:
    return (
        <Wrapper>
            {moduleList.map((module: ModuleModel) =>
                    <StyledModuleItem key={module.name} {...module}/>
                )
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: ${margin.l};
`;

const StyledModuleItem = styled(ModuleItem)`
    margin-top: ${margin.l};
`;

const LoaderIconWrapper = styled.div`
    margin: 100px auto;
`;
export default ModuleList;
