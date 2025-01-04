import { APOD, APOD_PARAMS } from "../types/apod";
import { EARTH_API } from "./earth";
import { NEO_API } from "./neo";

export class NASA_API {
    private readonly apiKey: string = "DEMO_KEY";
    private readonly baseUrl: string = "https://api.nasa.gov" as const;
    public neo: NEO_API = new NEO_API(this.apiKey);
    public earth: EARTH_API = new EARTH_API(this.apiKey);

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private format() {
        return `?api_key=${this.apiKey}`;
    }

    /**
     * Get Astronomy Picture of the Day
     * @param date - The date of the APOD image you want to retrieve
     *  - `YYYY-MM-DD`
     *  - Default is `today`
     * @param start_date - The start date of the APOD image you want to retrieve 
     *  - `YYYY-MM-DD`
     *  - Default is `none`
     *  - **Cannot be used with `date`**
     * @param end_date - The end date of the APOD image you want to retrieve
     *  - `YYYY-MM-DD`
     *  - Default is `today`
     *  - Used with `start_date`
     * @param count - The number of APOD images you want to retrieve
     *  - Default is `none`
     *  - **Cannot be used with `date` or `start_date` & `end_date`**
     * @param thumbs - Whether to return the URL for the thumbnail image
     *  - Default is `false`
     *  - *If an APOD is not a video, this param is ignored*
     * 
     * @example
     * ```typescript
     * const nasa = new NASA_API("DEMO_KEY");
     * const apod = await nasa.getApod();
     * console.log(apod);
     * ```
     */

    public async getApod(
        {
            date,
            start_date,
            end_date,
            count,
            thumbs
        }: APOD_PARAMS = {}
    ): Promise<APOD | APOD[]> {

        if (date && start_date) {
            throw new Error("Cannot use `date` and `start_date` together");
        }

        if (count && (date || start_date)) {
            throw new Error("Cannot use `count` with `date` or `start_date`");
        }

        if (start_date && !end_date) {
            throw new Error("Must use `end_date` with `start_date`");
        }

        let query = "";

        if (date) {
            query += `&date=${date}`;
        }

        if (start_date) {
            query += `&start_date=${start_date}`;
        }

        if (end_date) {
            query += `&end_date=${end_date}`;
        }

        if (count) {
            query += `&count=${count}`;
        }

        if (thumbs) {
            query += `&thumbs=true`;
        }

        const response = await fetch(`${this.baseUrl}/planetary/apod${this.format()}${query.length > 0 ? query : ""}`);
        return await response.json();
    }
}