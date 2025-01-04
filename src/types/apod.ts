export interface APOD {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export interface APOD_PARAMS {
    date?: string,
    start_date?: string,
    end_date?: string,
    count?: number,
    thumbs?: boolean
}