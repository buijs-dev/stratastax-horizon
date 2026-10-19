# Stratastax Horizon
[![](https://img.shields.io/badge/Buijs-Software-blue)](https://buijs.dev/)
[![GitHub](https://img.shields.io/github/license/buijs-dev/stratastax-horizon?color=black)](https://github.com/buijs-dev/stratastax-horizon/blob/main/LICENSE)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

The meeting point of Earth and Sky. 
> Where the architecture of Stratastax meets the world—the horizon where our technology and its users first connect.

## Overview
Stratastax Horizon is the public face of the Stratastax ecosystem.

The site is published at [docs.stratastax.dev](https://docs.stratastax.dev): the design, development and product
documentation, the API reference of every OpenAPI spec (with a Swagger UI explorer) and the database schemas.

## Development

```shell
npm ci
npm run sync    # copy the specs, schema docs and design tokens from stratastax-contract and stratastax-design
npm run dev
```

`npm run sync` ([scripts/sync-sources.mjs](scripts/sync-sources.mjs)) builds
[stratastax-contract](https://github.com/buijs-dev/stratastax-contract) with Gradle, exports the tokens of
[stratastax-design](https://github.com/buijs-dev/stratastax-design), and copies the output into the site;
everything it writes is in `.gitignore`. It finds each repository in `STX_CONTRACT_DIR` / `STX_DESIGN_DIR`, else in
`_sources/<repository>`, else next to this repository. It needs Java (see the contract's `.sdkmanrc`) and, for the
schema docs, Docker:

| Variable              | Effect                                                         |
|-----------------------|----------------------------------------------------------------|
| `STX_CONTRACT_DIR`    | Location of the stratastax-contract checkout                   |
| `STX_DESIGN_DIR`      | Location of the stratastax-design checkout                     |
| `STX_SKIP_GRADLE=1`   | Use the existing build output of the contract                  |
| `STX_SKIP_SCHEMA=1`   | Leave out the schema docs (no Docker needed)                   |

Without a sync the site still builds, without the API reference and the database pages, and with the fallback
colours in `src/styles/global.css` instead of the design system.

| Output                                   | Published at                                  |
|------------------------------------------|-----------------------------------------------|
| `public/openapi/*.yaml`, `index.json`    | `/openapi/<file>`, a stable URL for tools such as the stx compiler |
| starlight-openapi pages                  | `/technical/api/<platform\|catalog\|i18n>/`  |
| Swagger UI                               | `/technical/api/explorer/`                    |
| `src/content/docs/technical/database/*/` | `/technical/database/<service>/`              |
| `public/design/`                         | `/design/<file>`: the tokens (`tokens.css`, `starlight.css`, `swagger.css`, `tokens.json`, `stratastax.tokens.yaml`) |
| `src/styles/design/`                     | The theme of this site (`customCss` in `astro.config.mjs`), and the swatches of `/design/design-system/` |

## Deployment

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) deploys the site to GitHub Pages with the
[`astro-pages`](https://github.com/buijs-dev/ci-templates) workflow of ci-templates: on every push to `main`, when
stratastax-contract sends `contract-updated` (after a change to its specs or migrations on `main`), when
stratastax-design sends `design-updated`, and by hand.

## Related Stratastax projects

- [stratastax-portal](https://github.com/buijs-dev/stratastax-portal) - the web portal
- [stratastax-engine](https://github.com/buijs-dev/stratastax-engine) - the platform service
- [stratastax-game-catalog](https://github.com/buijs-dev/stratastax-game-catalog) - the game data service
- [stratastax-contract](https://github.com/buijs-dev/stratastax-contract) - the API definitions
- [stratastax-infrastructure](https://github.com/buijs-dev/stratastax-infrastructure) - the infrastructure, including the DNS record of docs.stratastax.dev
- [stratastax-flutter](https://github.com/buijs-dev/stratastax-flutter) - the Flutter framework and compiler
- [stratastax-design](https://github.com/buijs-dev/stratastax-design) - the design system that styles this site
- [ci-templates](https://github.com/buijs-dev/ci-templates) - the shared GitHub Actions, including the Pages workflow
