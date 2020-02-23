import React from "react";
import { render } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag", () => {
    it("Should show text", async () => {
        const { getByText } = render(<Tag text="tag" />);
        expect(getByText('tag')).toBeInTheDocument();
    });
});
