import { describe, it, expect } from "vitest";
import { nasa } from "..";

// events
describe("EONET API (Earth Observatory Natural Event Tracker)", () => {
    it("should return a response", async () => {
        const response = await nasa.getEonetEvents({
            startDate: "2025-02-01",
            endDate: "2025-02-11"
        });

        console.log(response);

        expect(response).toBeDefined();
    })
})