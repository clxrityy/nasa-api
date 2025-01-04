import { NEO_BROWSE_RESPONSE, NEO_FEED_PARAMS, NEO_FEED_RESPONSE, NEO_LOOKUP_PARAMS, NEO_LOOKUP_RESPONSE } from "../types/neo";

export class NEO_API {
    private readonly baseUrl = "https://api.nasa.gov" as const;
    private readonly apiKey: string

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private format(and: boolean = false) {
        if (and) {
            return `&api_key=${this.apiKey}`;
        }
        return `?api_key=${this.apiKey}`;
    }

    /**
     * Get Near Earth Object feed
     * @param start_date - The start date of the feed
     *  - `YYYY-MM-DD`
     *  - Default is `none`
     * @param end_date - The end date of the feed
     *  - `YYYY-MM-DD`
     *  - Default is 7 days after `start_date`
     * 
     * @example
     * ```typescript
     * const nasa = new NASA_API("DEMO_KEY");
     * const feed = await nasa.neo.feed();
     * console.log(feed);
     * ```
     */

    public async feed(
        {
            start_date,
            end_date
        }: NEO_FEED_PARAMS = {
        }
    ): Promise<NEO_FEED_RESPONSE> {
        let response: Response

        if (start_date) {
            if (end_date) {
                response = await fetch(`${this.baseUrl}/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}${this.format(true)}`);
            } else {
                response = await fetch(`${this.baseUrl}/neo/rest/v1/feed?start_date=${start_date}${this.format(true)}`);
            }
        } else {
            response = await fetch(`${this.baseUrl}/neo/rest/v1/feed${this.format()}`);
        }

        if (response.status === 400) {
            throw new Error("400 Bad Request: Invalid date format");
        }

        return await response.json();
    }

    /**
     * Lookup a Near Earth Object by its NASA JPL small body (SPK-ID) ID
     * @param asteroid_id - The NASA JPL small body ID of the NEO you want to retrieve
     *  - Default is `none`
     * 
     * @example
     * ```typescript
     * const nasa = new NASA_API("DEMO_KEY");
     * const neo = await nasa.neo.lookup({ asteroid_id: 3542519 });
     * console.log(neo);
     * ```
     */

    public async lookup(
        {
            asteroid_id,
        }: NEO_LOOKUP_PARAMS = {}
    ): Promise<NEO_LOOKUP_RESPONSE | NEO_LOOKUP_RESPONSE[]> {

        let response: Response

        if (asteroid_id) {
            response = await fetch(`${this.baseUrl}/neo/rest/v1/neo/${asteroid_id}${this.format()}`);
        } else {
            response = await fetch(`${this.baseUrl}/neo/rest/v1/neo${this.format()}`);
        }

        return await response.json();
    }

    public async browse(): Promise<NEO_BROWSE_RESPONSE> {
        const res = await fetch(`${this.baseUrl}/neo/rest/v1/neo/browse${this.format()}`);

        return await res.json();
    }
}