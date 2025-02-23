import { NASA_API } from "./api/index.js";
import { NEO_API } from "./api/neo.js";
import { type APOD, type APOD_PARAMS } from "./types/apod.js";
import { type NEO_LOOKUP_PARAMS, type NEAR_EARTH_OBJECT, type NEO_LOOKUP_RESPONSE } from "./types/neo.js";
import { type EONET_RESPONSE, type EONET_PARAMS } from "./types/eonet.js";

export {
    /**
     * CLASSES
     */
    // MAIN CLASS
    NASA_API,
    NEO_API,
    /**
     * TYPES
     */
    // APOD
    type APOD,
    type APOD_PARAMS,
    // NEO
    type NEO_LOOKUP_PARAMS,
    type NEAR_EARTH_OBJECT,
    type NEO_LOOKUP_RESPONSE,
    // EONET
    type EONET_RESPONSE,
    type EONET_PARAMS
};

export default NASA_API;