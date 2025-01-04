# NASA API

- [api.nasa.gov](https://api.nasa.gov)
- [Documenation](./DOCS.md)

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

> See the [Documenation](./DOCS.md) for more information and a full list of available APIs.


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