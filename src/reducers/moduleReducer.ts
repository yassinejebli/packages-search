import {Actions} from '../constants/Constants';
import {ModuleModel} from "../models/ModuleModel";

export interface MetaData {
    currentPage: number;
    perPage: number;
    total: number;
}

export interface ModuleState{
    searchText: string;
    moduleList: Array<ModuleModel>;
    isLoading: boolean;
    error: boolean;
    meta: MetaData;
}

const moduleState: ModuleState = {
    searchText: '',
    moduleList: [],
    isLoading: false,
    error: false,
    meta:{
        currentPage: 1,
        perPage: 5,
        total: 0
    }
};

const moduleReducer = (state: ModuleState = moduleState, action: any): ModuleState => {
    switch (action.type) {
        case Actions.LOAD_MODULES_BEGIN:
            return {...state, isLoading: true};
        case Actions.LOAD_MODULES_SUCCESS:
            return {
                ...state,
                moduleList: action.payload.moduleList,
                meta: action.payload.meta,
                isLoading: false
            };
        case Actions.LOAD_MODULES_FAIL:
            return {
                ...moduleState,
                error: true
            };
        case Actions.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            };
        case Actions.SET_CURRENT_PAGE:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    currentPage: action.payload
                }
            };
        default:
            return state;
    }
};

export default moduleReducer;
