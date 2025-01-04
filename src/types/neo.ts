export interface NEO_LOOKUP_PARAMS {
    asteroid_id?: number;
}

export interface NEAR_EARTH_OBJECT {
    links: {
        self: string;
    },
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        meters: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        miles: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        feet: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        }
    },
    is_potentially_hazardous_asteroid: boolean;
    close_apporch_data: {
        close_approach_date: string;
        close_approach_date_full: string;
        epoch_date_close_approach: number;
        relative_velocity: {
            kilometers_per_second: string;
            kilometers_per_hour: string;
            miles_per_hour: string;
        },
        miss_distance: {
            astronomical: string;
            lunar: string;
            kilometers: string;
            miles: string;
        },
        orbiting_body: string;
    }[],
    is_sentry_object: boolean;
}

export interface NEO_LOOKUP_RESPONSE {
    links: {
        next: string;
        previous: string;
        self: string;
    },
    element_count: number;
    near_earth_objects: {
        [key: string]: NEAR_EARTH_OBJECT;
    }
}

export interface NEO_FEED_PARAMS {
    start_date?: string;
    end_date?: string;
}

export interface NEO_FEED_RESPONSE {
    links: {
        next: string;
        previous: string;
        self: string;
    },
    element_count: number;
    near_earth_objects: {
        [key: string]: NEAR_EARTH_OBJECT[];
    }
}

export interface NEO_BROWSE_RESPONSE {
    links: {
        next: string;
        self: string;
    },
    page: {
        size: number;
        total_elements: number;
        total_pages: number;
        number: number;
    },
    near_earth_objects: NEAR_EARTH_OBJECT[];
}