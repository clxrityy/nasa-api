export interface EONET_SOURCE {
    id: string;
    title: string;
    source: string;
    link: string;
}

export interface EONET_MAGITUDE {
    id: string;
    min: number;
    max: number;
}

export interface EONET_BBOX {
    lon: {
        min: number;
        max: number;
    },
    lat: {
        min: number;
        max: number;
    }
}

export interface EONET_CATEGORIES {
    id: string;
    title: string;
    link: string;
    description: string;
    layers: string;
}

export interface EONET_PARAMS {
    sourceIds?: string[];
    categoryIds?: string[];
    status?: "open" | "closed" | "all";
    limit?: number;
    days?: number;
    startDate?: string | Date;
    endDate?: string | Date;
}

export interface EONET_RESPONSE {
    id: string;
    title: string;
    description?: string;
    link: string;
    categories?: EONET_CATEGORIES[];
    sources?: EONET_SOURCE[];
    geometries: {
        date: string | Date;
        type: string;
        coordinates: number[];
    }[];
    closed?: string | null;
    maginitude?: EONET_MAGITUDE;
}