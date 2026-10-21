# Stratastax Horizon
[![Stratastax](https://img.shields.io/badge/Product-stratastax.dev-4F46E5?style=flat)](https://stratastax.dev/)
[![](https://img.shields.io/badge/Buijs-Software-blue)](https://buijs.dev/)
[![GitHub](https://img.shields.io/github/license/buijs-dev/stratastax-horizon?color=black)](https://github.com/buijs-dev/stratastax-horizon/blob/main/LICENSE)

The meeting point of Earth and Sky.
> Where the architecture of Stratastax meets the world—the horizon where our technology and its users first connect.

## Overview
Stratastax Horizon is the product site of Stratastax, published at [stratastax.dev](https://stratastax.dev). It
links to the app, [app.stratastax.dev](https://app.stratastax.dev), and to the documentation,
[docs.stratastax.dev](https://docs.stratastax.dev) ([stratastax-docs](https://github.com/buijs-dev/stratastax-docs)).

The links live in [`src/site.mjs`](src/site.mjs); set `appLive` to `true` once the app is deployed, and the
"coming soon" badges become links.

## Development

```shell
npm ci
npm run sync    # copy the theme of stratastax-design into src/styles/design/
npm run dev
```

`npm run sync` ([scripts/sync-sources.mjs](scripts/sync-sources.mjs)) exports the tokens of
[stratastax-design](https://github.com/buijs-dev/stratastax-design), found in `STX_DESIGN_DIR`, in
`_sources/stratastax-design` or next to this repository. Without a sync the site builds with the fallback colours of
`src/styles/global.css`.

## Deployment

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) deploys the site to GitHub Pages with the
`astro-pages` workflow of [ci-templates](https://github.com/buijs-dev/ci-templates): on every push to `main`, when
stratastax-design sends `design-updated`, and by hand. The custom domain is `stratastax.dev` (Settings → Pages).

## Documentation

The Stratastax documentation is on [docs.stratastax.dev](https://docs.stratastax.dev/).

## Related Stratastax projects

- [stratastax-docs](https://github.com/buijs-dev/stratastax-docs) - the documentation site, docs.stratastax.dev
- [stratastax-design](https://github.com/buijs-dev/stratastax-design) - the design tokens this site is styled with
