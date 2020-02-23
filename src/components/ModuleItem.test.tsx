import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModuleItem from "./ModuleItem";
import {ModuleModel} from "../models/ModuleModel";

describe('MenuItem', () => {
    let module1: ModuleModel;
    let wrapper: any;
    beforeAll(()=>{
        module1 = {
            name: "module 1",
            description: "module 1 description",
            stars: 68133,
            repositoryURL: "https://github.com/twbs/module1.git",
            owner: 'twbs',
            homepage: "https://module1.com",
            keywords: ["css"]
        };
        wrapper = render(<ModuleItem {...module1} className="class" />);
    });

    it('should have link', () => {
        const {getByTestId} = wrapper;
        expect(getByTestId('module-item-url')).toHaveAttribute('href', module1.repositoryURL);
    });
});
