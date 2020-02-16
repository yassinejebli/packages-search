import {Actions} from "../constants/Constants";
import {getModules} from "../api/Api";
import {ModuleModel} from "../models/ModuleModel";
import {serializeQuery} from "../utils/Utils";
import {MetaData} from "../reducers/moduleReducer";

const loadModulesBegin = () => {
    return {
        type: Actions.LOAD_MODULES_BEGIN
    };
};

const loadModulesSuccess = (moduleList: Array<ModuleModel>, meta: MetaData) => {
    return {
        type: Actions.LOAD_MODULES_SUCCESS,
        moduleList,
        meta
    };
};

const loadModulesFail = () => {
    return {
        type: Actions.LOAD_MODULES_FAIL
    };
};

export const loadModules = (searchText: string = '') => {
    return (dispatch: any, getState: any) => {
        const {paginationState} = getState();
        dispatch(loadModulesBegin());
        return getModules(`?${serializeQuery({
            per_page: paginationState.perPage,
            page: paginationState.page,
            q: searchText
        })}`).then((jsonArray: any) => {
                const moduleList = jsonArray.map((json:any)=>new ModuleModel(json));
                dispatch(loadModulesSuccess(moduleList, {
                    ...paginationState,
                    searchText
                }));
            })
            .catch((err) => {
                dispatch(loadModulesFail());
                console.error(err);
            });
    };
};
