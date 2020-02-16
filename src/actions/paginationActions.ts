import {Actions} from "../constants/Constants";
import {loadModules} from "./moduleActions";

export const setPaginationDataAction = (page: number) => {
    return (dispatch: any, getState: any) => {
        dispatch(loadModules());
        return {
            type: Actions.SET_PAGINATION_DATA,
            page
        };
    }
};
