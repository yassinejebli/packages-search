import moduleReducer, {moduleState} from "./moduleReducer";
import {Actions} from "../constants/Constants";

describe('module reducer', () => {
    it('should return the initial state', () => {
        expect(moduleReducer(undefined, {})).toEqual(moduleState);
    });

    it('LOAD_MODULES_BEGIN - isLoading should be true', () => {
        expect(
            moduleReducer(moduleState, {
                type: Actions.LOAD_MODULES_BEGIN
            })
        ).toEqual({
            ...moduleState,
            isLoading: true
        });
    });

    it('LOAD_MODULES_FAIL - error should be true', () => {
        expect(
            moduleReducer(moduleState, {
                type: Actions.LOAD_MODULES_FAIL
            })
        ).toEqual({
            ...moduleState,
            error: true
        });
    });
});
