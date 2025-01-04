import { EARTH_ASSETS_RESPONSE, EARTH_PARAMS } from "../types/earth";

export class EARTH_API {
    private readonly baseUrl = "https://api.nasa.gov/planetary/earth" as const;
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
     * Imagery API
     * @param lat - The latitude of the location
     * - `number`
     * @param lon - The longitude of the location
     * - `number`
     * @param date - The date of the image
     * - `YYYY-MM-DD`
     * - Default: `today`
     * @param dim - The width and height of the image (in degrees)
     * - `number`
     * - Default: `0.025`
     */
    public async imagery(
        {
            lat,
            lon,
            date,
            dim,
        }: EARTH_PARAMS = {
                dim: 0.025,
            }): Promise<Blob> {
        let response: Response;

        if (lat && lon) {
            if (date) {
                if (dim) {
                    response = await fetch(`${this.baseUrl}/imagery?lat=${lat}&lon=${lon}&date=${date}&dim=${dim}${this.format(true)}`);
                } else {
                    response = await fetch(`${this.baseUrl}/imagery?lat=${lat}&lon=${lon}&date=${date}${this.format(true)}`);
                }
            } else {
                response = await fetch(`${this.baseUrl}/imagery?lat=${lat}&lon=${lon}${this.format(true)}`);
            }
        } else {
            response = await fetch(`${this.baseUrl}/imagery${this.format()}`);
        }

        return await response.blob();
    }

    /**
     * Assets API
     * @param lat - The latitude of the location
     * - `number`
     * @param lon - The longitude of the location
     * - `number`
     * @param date - Beginning of 30 day date range
     * - `YYYY-MM-DD`
     * @param dim - The width and height of the image (in degrees)
     * - `number`
     * - Default: `0.025`
     */
    public async assets({
        lat,
        lon,
        date,
        dim,
    }: EARTH_PARAMS = {
            dim: 0.025,
        }): Promise<EARTH_ASSETS_RESPONSE> {
        let response: Response;

        if (lat && lon) {
            if (date) {
                if (dim) {
                    response = await fetch(`${this.baseUrl}/assets?lat=${lat}&lon=${lon}&date=${date}&dim=${dim}${this.format(true)}`);
                } else {
                    response = await fetch(`${this.baseUrl}/assets?lat=${lat}&lon=${lon}&date=${date}${this.format(true)}`);
                }
            } else {
                response = await fetch(`${this.baseUrl}/assets?lat=${lat}&lon=${lon}${this.format(true)}`);
            }
        } else {
            response = await fetch(`${this.baseUrl}/assets${this.format()}`);
        }

        return await response.json();
    }
}