export interface EARTH_PARAMS {
    lat?: number;
    lon?: number;
    date?: string;
    dim?: number;
}

export interface EARTH_ASSETS_RESPONSE {
    date: string;
    id: string;
    resource: {
        dataset: string;
        planet: string;
    };
    service_version: string;
    url: string;
}