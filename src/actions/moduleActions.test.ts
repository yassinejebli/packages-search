import thunk, {ThunkDispatch} from "redux-thunk";
import fetchMock from "fetch-mock";
import {Actions} from "../constants/Constants";
import {loadModules} from "./moduleActions";
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

    it('create LOAD_MODULES_SUCCESS when modules are fetched successfully', () => {
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
                    moduleList: [new ModuleModel(module1)],
                    meta: store.getState().meta
                }
            }
        ];

        return store.dispatch(loadModules()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    it('Filter modules', () => {
        const store = mockStore(moduleState);
        const module1 = {
            name: "module 1",
            description: "module 1 description",
            stars: 68133,
            repository_url: "https://github.com/twbs/module1.git",
            homepage: "https://module1.com",
            keywords: ["css"]
        };

        fetchMock.getOnce('https://libraries.io/api/bower-search?per_page=5&page=1&q=mod&sort=', {
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
                    moduleList: [new ModuleModel(module1)],
                    meta: store.getState().meta
                }
            }
        ];

        return store.dispatch(loadModules()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
});
