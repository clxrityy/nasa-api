import {describe, it, expect} from "vitest";
import { nasa } from "..";

// WITHOUT ANY DARN PARAMS
describe("APOD API (default)", () => {
    it("should return a response", async () => {
        // const response = await nasa.getApod();
        // expect(response).toBeDefined();
        const response = await nasa.getApod();
        expect(response).toBeDefined();
    })
});

// WITH `count` PARAM
describe("APOD API (count)", () => {
    it("should return a response", async () => {
        const response = await nasa.getApod({count: 5});
        expect(response).toBeDefined();
    })
})