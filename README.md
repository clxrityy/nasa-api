# NASA API

[![view on npm](https://badgen.net/npm/v/@clxrity/nasa-api)](https://www.npmjs.org/package/@clxrity/nasa-api)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/clxrityy/nasa-api/blob/main/LICENSE)
[![Node.js CI](https://github.com/clxrityy/nasa-api/actions/workflows/main.yml/badge.svg)](https://github.com/clxrityy/nasa-api/actions/workflows/main.yml)

- [api.nasa.gov](https://api.nasa.gov)
- [Documenation](https://github.com/clxrityy/nasa-api/blob/master/DOCS.md)

```zsh
npm i @clxrity/nasa-api
```
```zsh
yarn add @clxrity/nasa-api
```
```zsh
pnpm add @clxrity/nasa-api
```

## Requirements

- Latest version of [Node](https://nodejs.org) installed
- A [NASA API key](https://api.nasa.gov/)

> See the [Documenation](https://github.com/clxrityy/nasa-api/blob/master/DOCS.md) for more information and a full list of available APIs.


---

```ts
import NASA_API from "@clxrity/nasa-api"

const nasa = new NASA_API(process.env.NASA_API_KEY);

async function apod() {
    const { 
        url, 
        title,
        // ...
    } = await nasa.getApod(); // Astronomy Picture of the Day
    console.log(url, title);
}
```