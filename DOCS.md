# Documentation

- [Getting started](#getting-started)
- [Available APIs](#available-apis)
  - [APOD](#apod) — Astronomy Picture of the Day
  - [NEO](#neo) — Near Earth Object Web Service
    - [Feed](#feed)
    - [Lookup](#lookup)
    - [Browse](#browse)
  - [Earth](#earth)
    - [Imagery](#imagery)
    - [Assets](#assets)
  - [EONET](#eonet) — Earth Observatory Natural Event Tracker

---


## Getting started

- Install [Node](https://nodejs.org/en)
  - (Version `22` or later)
- Install the package:
  - **Local**
  ```zsh
  npm i @clxrity/nasa-api
  ```
  - **Global**
  ```zsh
  npm i -g @clxrity/nasa-api
  ```
- Acquire a [NASA API key](https://api.nasa.gov/)
- Import `NASA_API` and initialize the class with your API key:

  ```ts
  import NASA_API from "@clxrity/nasa-api";
  /**
   * You can also import like so:
      - import { NASA_API } from "@clxrity/nasa-api"
   */

  const nasa = new NASA_API("API_KEY_HERE");
  ```

---

## Available APIs

- [APOD](#apod) — Astronomy Picture of the Day
- [NEO](#neo) — Near Earth Object Web Service
  - [Feed](#feed)
  - [Lookup](#lookup)
  - [Browse](#browse)


---

### APOD

##### [Astronomy Picture of the Day](http://apod.nasa.gov/apod/astropix.html)

> The full documentation for this API can be found in the [APOD API Github repository](https://github.com/nasa/apod-api).

- [Example](#example)
- [Parameters](#parameters)

#### Example

- Without parameters

  ```ts
  import NASA_API from "@clxrity/nasa-api";

  const nasa = new NASA_API(process.env.API_KEY);

  async function apod() {
    const response = await nasa.getApod();
    console.log(response);
  }
  ```

- With parameters

  ```ts
  const response = await nasa.getApid(
      date: "2025-01-03",
      thumbs: true
  )
  ```

#### Parameters

| **Param**  | **Type**     | **Default** | **Description**                                                                                                                      |
| ---------- | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| date       | `YYYY-MM-DD` | _today_     | The date of the APOD image to retrieve                                                                                               |
| start_date | `YYYY-MM-DD` | none        | The start of a date range, when requesting data for a range of date. **Cannot be used with `date`.**                                 |
| end_date   | `YYYY-MM-DD` | _today_     | The end of the date range, when used with `start_date`.                                                                              |
| count      | `number`     | none        | If this is specified then `count` randomly chosen images will be returned. Cannot be used with `date`, or `start_date` & `end_date`. |
| thumbs     | `boolean`    | false       | Returns the URL of a video thumbnail. If an APOD is not a video, this param is ignored.                                              |

---

### NEO

###### [Asteriods NeoWs: Near Object Web Service](http://neo.jpl.nasa.gov/)

- [Feed](#feed)
  - [Parameters](#parameters-1)
  - [Example](#example-1)
- [Lookup](#lookup)
  - [Params](#params)
  - [Example](#example-2)
- [Browse](#browse)
  - [Example](#example-3)


#### Feed

##### Parameters

| Param      | Type         | Default                   | Description                       |
| ---------- | ------------ | ------------------------- | --------------------------------- |
| start_date | `YYYY-MM-DD` | none                      | Starting date for asteriod search |
| end_date   | `YYYY-MM-DD` | 7 days after `start_date` | Ending date for asteriod search   |

##### Example

```ts
async function neoFeed() {
  const response = await nasa.neo.feed({
    start_date: "2024-02-11",
    end_date: "2024-02-17",
  });

  console.log(response);
}
```

#### Lookup

> Lookup a specific Asteriod based on its [NASA JPL small body (SPK-ID) ID](http://ssd.jpl.nasa.gov/sbdb_query.cgi)

##### Params

| Param       | Type   | Default | Description                                           |
| ----------- | ------ | ------- | ----------------------------------------------------- |
| asteriod_id | number | none    | Asteriod SPK-ID correlates to the NASA JPL small body |

##### Example

```ts
async function lookupAsteriod() {
  const response = await nasa.neo.lookup({ asteriod_id: 3542519 });
  console.log(response);
}
```

#### Browse

> Browse the overall Asteriod data-set.

##### Example

```ts
async function browseAsteriodData() {
  const response = await nasa.neo.browse();
  console.log(response);
}
```

---

### Earth

- [Imagery](#imagery)
- [Assets](#assets)

> Unlock the significant public investment in earth observation data.

#### Imagery

- Returns a blob

##### Example image

<img src="https://api.nasa.gov/assets/img/general/houston_2.png" width="420" />

##### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| lat   | number | n/a | Latitude |
| lon   | number | n/a | Longitude |
| dim   | number | `0.025` | Width & height of image in degrees |
| date  | `YYYY-MM-DD` | *today* | Date of the image; if non-existent, most recent image is returned |

##### Example

```ts
async function earthImagery() {
  const response = await nasa.earth.imagery({
    lat: 100.75,
    lon: 1.5,
    date: "2014-02-01",
  });
}
```

#### Assets

> This endpoint retrieves the date-times and asset names for closest available imagery for a supplied location and date.
> Primarily to support the use of [imagery](#imagery).

##### Params

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| lat   | number | n/a  | Latitude |
| lon  | number | n/a | Longitude |
| date | `YYYY-MM-DD` | n/a | Beginning of 30 day date range (to look for closest image to that date). |
| dim | number | `0.025` | Width & height of image in degrees |

##### Example

```ts
async function earthAssets() {
  const response = await nasa.earth.assets({
    lat: 95.33,
    lon: 29.78,
    date: "2018-01-01",
    dim: 0.10
  });
}
```

---

### EONET

> The Earth Observatory Natural Event Tracker (EONET) API provides a curated source of continuously updated natural event data.

#### Parans

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| sourceIds | string[] | N/A | Used to filter the output by specific event sources. Acceptable sources can be accessed via the [sources JSON](https://eonet.gsfc.nasa.gov/api/v3/sources) |
| categoryIds | string[] | N/A | Used to filter the output by specific event categories. Acceptable categories can be accessed via the [categories JSON](https://eonet.gsfc.nasa.gov/api/v3/categories) |
| status | `open` / `closed` / `all` | N/A | Used to filter the output by the status of the events |
| limit | number | 10 | The number of results to return |
| days | number | 7 | The number of days in the past to limit events |
| startDate | `YYYY-MM-DD` | N/A | The start of a date range to limit events |
| endDate | `YYYY-MM-DD` | N/A | The end of a date range to limit events |

#### Example

```ts
async function eonet() {
  const response = await nasa.getEonetEvents({
    sourceIds: ["InciWeb"],
    categoryIds: ["wildfires"],
    status: "open",
    limit: 5,
    days: 7,
  });
}

```