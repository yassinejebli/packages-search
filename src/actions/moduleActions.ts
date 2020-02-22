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
        payload: {
            moduleList,
            meta
        }
    };
};

const loadModulesFail = () => {
    return {
        type: Actions.LOAD_MODULES_FAIL
    };
};

export const setSearchText = (searchText: string) => {
    return {
        type: Actions.SET_SEARCH_TEXT,
        payload: searchText
    };
};

export const setCurrentPage = (currentPage: number) => {
    return {
        type: Actions.SET_CURRENT_PAGE,
        payload: currentPage
    };
};

export const loadModules = () => {
    return (dispatch: any, getState: any) => {
        const {searchText, meta:{currentPage}} = getState();

        dispatch(loadModulesBegin());
        return getModules(`?api_key=6afd0e4c0eb2d1a2bca1d3132c0781ec&${serializeQuery({
            per_page: 5,
            page: currentPage,
            q: searchText
        })}`).then((jsonArray: any) => {
                const moduleList = jsonArray.map((json:any)=>new ModuleModel(json));
                dispatch(loadModulesSuccess(moduleList, {
                    perPage: 5,
                    total: 100,
                    currentPage
                }));
            })
            .catch((err) => {
                dispatch(loadModulesFail());
                console.error(err);
            });
    };
};
