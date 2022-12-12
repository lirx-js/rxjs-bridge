[![npm (scoped)](https://img.shields.io/npm/v/@lirx/rxjs-bridge.svg)](https://www.npmjs.com/package/@lirx/rxjs-bridge)
![npm](https://img.shields.io/npm/dm/@lirx/rxjs-bridge.svg)
![NPM](https://img.shields.io/npm/l/@lirx/rxjs-bridge.svg)
![npm type definitions](https://img.shields.io/npm/types/@lirx/rxjs-bridge.svg)

## lirx/rxjs-bridge


Bridge between RxJS and @lirx/core


## 📦 Installation

```bash
yarn add @lirx/rxjs-bridge
# or
npm install @lirx/rxjs-bridge --save
```

This library supports:

- **common-js** (require): transpiled as es2015, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@lirx/rxjs-bridge](https://cdn.skypack.dev/@lirx/rxjs-bridge)
