import React from "react";
import {Provider} from "react-redux";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import thunk, {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import createMockStore from "redux-mock-store";
import  {ModuleState, moduleState} from "../reducers/moduleReducer";
import SortByStars from "./SortByStars";
import {theme} from "../theme/theme";

type DispatchType = ThunkDispatch<ModuleState, {}, AnyAction>;

const mockStore = createMockStore<ModuleState, DispatchType>([thunk]);

describe('Sort modules by stars', () => {
    let wrapper: any;
    beforeAll(()=>{
        const store = mockStore(moduleState);
        wrapper = render(
            <Provider store={store}>
                <SortByStars />
            </Provider>
        );
    });

    it('should change sort-icon color',  () => {
        const {getByTestId} = wrapper;
        const sort = getByTestId('sort');
        const sortIcon = getByTestId('sort-icon');

        expect(sortIcon).toHaveStyle('fill: '+theme.color.lightGray2);
        fireEvent.click(sort);
        expect(sortIcon).toHaveStyle('fill: '+theme.color.lightBlue);
    })
});
