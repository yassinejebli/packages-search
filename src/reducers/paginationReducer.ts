import {Actions} from '../constants/Constants';

export interface PaginationState{
    page: number;
    perPage: number;
    total: number;
}

const paginationState: PaginationState = {
    page: 1,
    perPage: 5,
    total: 0
};

const paginationReducer = (state = paginationState, action: PaginationState&{type: string}): PaginationState => {
    const {page, total=100} = action;

    switch(action.type) {
        case Actions.SET_PAGINATION_DATA:
            return { ...state,
                page,
                total
            };
        default:
            return state;
    }
};

export default paginationReducer;
