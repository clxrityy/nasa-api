import { describe, it, expect } from "vitest";
import { nasa } from "..";

// imagery
describe("Earth API (imagery)", () => {
    it("should return a response", async () => {
        const response = await nasa.earth.imagery({
            lat: 100.75,
            lon: 1.5,
            date: "2014-02-01",
            dim: 0.025
        });

        console.log(response);

        expect(response).toBeDefined();
    })
});


// assets
describe("Earth API (assets)", () => {
    it("should return a response", async () => {
        const response = await nasa.earth.assets({
            lat: 35.0,
            lon: 137.0,
            date: "2022-02-11",
            dim: 0.025
        });

        expect(response).toBeDefined();
    });
});