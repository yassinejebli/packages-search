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

export const filterModules = (searchText: string) => {
    return (dispatch: any, getState: any) => {
        dispatch({
            type: Actions.SET_SEARCH_TEXT,
            payload: searchText
        });
        dispatch(loadModules());
    };
};

export const setCurrentPage = (currentPage: number) => {
    return (dispatch: any, getState: any) => {
        dispatch({
            type: Actions.SET_CURRENT_PAGE,
            payload: currentPage
        });
        dispatch(loadModules());
    }
};


export const sortModulesByStars = (sortedByStars: boolean) => {
    return (dispatch: any, getState: any) => {
        dispatch({
            type: Actions.SORT_MODULES_BY_STARS,
            payload: sortedByStars
        });
        dispatch(loadModules());
    };
};

export const loadModules = () => {
    return (dispatch: any, getState: any) => {
        const {searchText, meta:{currentPage, sortedByStars}} = getState();

        dispatch(loadModulesBegin());
        return getModules(`?${serializeQuery({
            per_page: 5,
            page: currentPage,
            q: searchText,
            sort: sortedByStars?'stars':''
        })}`).then((jsonArray: any) => {
                const moduleList = jsonArray.map((json:any)=>new ModuleModel(json));

                dispatch(loadModulesSuccess(moduleList, {
                    perPage: 5,
                    total: 500, //normally per page and total values should come from libraries.io, but because of CORS issue we can't do that
                    sortedByStars: sortedByStars,
                    currentPage
                }));
            })
            .catch((err) => {
                dispatch(loadModulesFail());
                console.error(err);
            });
    };
};
