import {Actions} from "../constants/Constants";
import {getModules} from "../api/Api";
import {ModuleModel} from "../models/ModuleModel";
import {serializeQuery} from "../utils/Utils";

const loadModulesBegin = () => {
    return {
        type: Actions.LOAD_MODULES_BEGIN
    };
};

const loadModulesSuccess = (moduleList: Array<ModuleModel>) => {
    return {
        type: Actions.LOAD_MODULES_SUCCESS,
        moduleList
    };
};

const loadModulesFail = () => {
    return {
        type: Actions.LOAD_MODULES_FAIL
    };
};

export const loadModules = (searchText: string = '') => {
    return function(dispatch: any, getState: any) {
        const {meta} = getState();
        dispatch(loadModulesBegin());
        return getModules(`?${serializeQuery({
            per_page: meta.perPage,
            page: meta.page,
            q: searchText
        })}`).then((jsonArray: any) => {
                const moduleList = jsonArray.map((json:any)=>new ModuleModel(json));
                dispatch(loadModulesSuccess(moduleList));
            })
            .catch((err) => {
                dispatch(loadModulesFail());
                console.error(err);
            });
    };
};
