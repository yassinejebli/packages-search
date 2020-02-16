import {Actions} from '../constants/Constants';
import {ModuleModel} from "../models/ModuleModel";

export interface MetaData {
    page: number;
    perPage: number;
    total: number;
}

export interface ModuleState{
    moduleList: Array<ModuleModel>;
    isLoading: boolean;
    error: boolean;
    meta: MetaData;
}

const moduleState: ModuleState = {
    moduleList: [],
    isLoading: false,
    error: false,
    meta:{
        page: 1,
        perPage: 5,
        total: 0
    }
};

const moduleReducer = (state = moduleState, action: ModuleState&{type: string}): ModuleState => {
    switch(action.type) {
        case Actions.LOAD_MODULES_BEGIN:
            return { ...state, isLoading: true };
        case Actions.LOAD_MODULES_SUCCESS:
            return { ...state,
                moduleList: action.moduleList,
                isLoading: false,
                meta: {...state.meta, ...action.meta}
            };
        case Actions.LOAD_MODULES_FAIL:
            return { ...state, error: true };
        default:
            return state;
    }
};

export default moduleReducer;
