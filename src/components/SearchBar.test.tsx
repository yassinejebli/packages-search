import React from "react";
import {Provider} from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import thunk, {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import createMockStore from "redux-mock-store";
import  {ModuleState, moduleState} from "../reducers/moduleReducer";
import SearchBar from "./SearchBar";

type DispatchType = ThunkDispatch<ModuleState, {}, AnyAction>;

const mockStore = createMockStore<ModuleState, DispatchType>([thunk]);

describe('Search bar', () => {
    let wrapper: any;
    let store: any;
    beforeEach(() => {
        store = mockStore(moduleState);
        wrapper = render(
            <Provider store ={store} >
                <SearchBar />
            </Provider>
        );
    });

    it('should render correctly', () => {
        const {getByTestId, queryByPlaceholderText} = wrapper;
        expect(getByTestId('search-bar')).toBeTruthy();
        expect(queryByPlaceholderText('Search...')).toBeTruthy();
    });

    it('updates on change', () => {
        const {getByTestId} = wrapper;
        const searchInput = getByTestId('search-bar');

        fireEvent.change(searchInput, {target: { value: 'module 1'}});
        expect(searchInput.value).toBe('module 1');
    });
});
