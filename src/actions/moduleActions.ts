import {Actions} from "../constants/Constants";
import {getModules} from "../api/Api";
import {ModuleModel} from "../models/ModuleModel";
import {serializeQuery} from "../utils/Utils";
import {MetaData, ModuleState} from "../reducers/moduleReducer";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";

export const loadModulesBegin = () => {
    return {
        type: Actions.LOAD_MODULES_BEGIN
    };
};

export const loadModulesSuccess = (moduleList: Array<ModuleModel>, meta: MetaData) => {
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
    return (dispatch: ThunkDispatch<ModuleState, {}, AnyAction>) => {
        dispatch({
            type: Actions.SET_SEARCH_TEXT,
            payload: searchText
        });
        return dispatch(loadModules());
    };
};

export const setCurrentPage = (currentPage: number) => {
    return (dispatch: ThunkDispatch<ModuleState, {}, AnyAction>) => {
        dispatch({
            type: Actions.SET_CURRENT_PAGE,
            payload: currentPage
        });
        return dispatch(loadModules());
    }
};


export const sortModulesByStars = (sortedByStars: boolean) => {
    return (dispatch: ThunkDispatch<ModuleState, {}, AnyAction>) => {
        dispatch({
            type: Actions.SORT_MODULES_BY_STARS,
            payload: sortedByStars
        });
        return dispatch(loadModules());
    };
};

export const loadModules = () => {
    return (dispatch: ThunkDispatch<ModuleState, {}, AnyAction>, getState: () => ModuleState) => {
        const {searchText, meta: {currentPage, sortedByStars}} = getState();

        dispatch(loadModulesBegin());
        return getModules(`?${serializeQuery({
            per_page: 5,
            page: currentPage,
            q: searchText,
            sort: sortedByStars ? 'stars' : ''
        })}`).then((jsonArray: any) => {
            const moduleList = jsonArray.map((json: any) => new ModuleModel(json));

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
