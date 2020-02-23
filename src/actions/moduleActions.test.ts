import thunk, {ThunkDispatch} from "redux-thunk";
import fetchMock from "fetch-mock";
import {Actions} from "../constants/Constants";
import {filterModules, loadModules} from "./moduleActions";
import {ModuleState, moduleState} from "../reducers/moduleReducer";
import {ModuleModel} from "../models/ModuleModel";
import {AnyAction} from "redux";
import createMockStore from "redux-mock-store";

type DispatchType = ThunkDispatch<ModuleState, {}, AnyAction>;

const mockStore = createMockStore<ModuleState, DispatchType>([thunk]);

describe('Modules async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should create LOAD_MODULES_SUCCESS when modules are fetched successfully', async () => {
        const store = mockStore(moduleState);
        const module1 = {
            name: "module 1",
            description: "module 1 description",
            stars: 68133,
            repository_url: "https://github.com/twbs/module1.git",
            homepage: "https://module1.com",
            keywords: ["css"]
        };

        fetchMock.getOnce('https://libraries.io/api/bower-search?per_page=5&page=1&q=&sort=', {
            body: [
                module1
            ],
            headers: {'content-type': 'application/json', 'total': '500', 'per-page': '5'},
        });
        const expectedActions = [
            { type: Actions.LOAD_MODULES_BEGIN },
            {
                type: Actions.LOAD_MODULES_SUCCESS,
                payload: {
                    moduleList: [new ModuleModel({
                        name: "module 1",
                        description: "module 1 description",
                        stars: 68133,
                        repository_url: "https://github.com/twbs/module1.git",
                        homepage: "https://module1.com",
                        keywords: ["css"]
                    })],
                    meta: {
                        currentPage: 1,
                        perPage: 5,
                        total: 500,
                        sortedByStars: false
                    }
                }
            }
        ];

        await store.dispatch(loadModules());
        expect(store.getActions()).toEqual(expectedActions);
        // console.log('store.getState()', store.getState()); why stores' state not changed!!
    });


    it('should filter modules', async () => {
        const store = mockStore(moduleState);

        const module2 = {
            name: "module 2",
            description: "module 2 description",
            stars: 66133,
            repository_url: "https://github.com/twbs/module2.git",
            homepage: "https://module2.com",
            keywords: ["javascript"]
        };

        fetchMock.getOnce('https://libraries.io/api/bower-search?per_page=5&page=1&q=&sort=', {
            body: [
                module2
            ],
            headers: {'content-type': 'application/json', 'total': '500', 'per-page': '5'},
        });
        const expectedActions = [
            {
                type: Actions.SET_SEARCH_TEXT,
                payload: 'module 2'
            },
            { type: Actions.LOAD_MODULES_BEGIN },
            {
                type: Actions.LOAD_MODULES_SUCCESS,
                payload: {
                    moduleList: [new ModuleModel({
                        name: "module 2",
                        description: "module 2 description",
                        stars: 66133,
                        repository_url: "https://github.com/twbs/module2.git",
                        homepage: "https://module2.com",
                        keywords: ["javascript"]
                    })],
                    meta: {
                        currentPage: 1,
                        perPage: 5,
                        total: 500,
                        sortedByStars: false
                    }
                }
            }
        ];

        await store.dispatch(filterModules('module 2'));
        expect(store.getActions()).toEqual(expectedActions);
        // console.log('store.getState()', store.getState()); why stores' state not changed!!
    });
});
