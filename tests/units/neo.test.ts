import { describe, it, expect } from "vitest";
import { nasa } from "..";

// feed
describe("NEO API (feed)", () => {
    it("should return a response", async () => {
        const response = await nasa.neo.feed({
            start_date: "2024-02-11",
            end_date: "2024-02-18"
        });

        expect(response).toBeDefined();
    })
});

// lookup
describe("NEO API (lookup)", () => {
    it("should return a response", async () => {
        const response = await nasa.neo.lookup({asteroid_id: 3542519});
        expect(response).toBeDefined();
    })
});

// browse

describe("NEO API (browse)", () => {
    it("should return a response", async () => {
        const response = await nasa.neo.browse();
        expect(response).toBeDefined();
    })
});