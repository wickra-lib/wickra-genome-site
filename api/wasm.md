# WASM

The WebAssembly build runs the same Rust core in the browser or any WASM runtime.
Construct a `Genome`, `build` the vectors, then query with `command(json) -> json`.

```bash
npm install wickra-genome-wasm
```

```javascript
import init, { Genome } from 'wickra-genome-wasm'

await init() // fetches and instantiates the .wasm module

const spec = JSON.stringify({
  features: [{ kind: 'price', field: 'close' }],
  symbols: ['AAA', 'BBB', 'CCC'], normalize: 'z_score', metric: 'euclid', seed: 24333,
})
const g = new Genome(spec)
const data = {
  AAA: [{ time: 0, open: 1, high: 1, low: 1, close: 1, volume: 0 }],
  BBB: [{ time: 0, open: 2, high: 2, low: 2, close: 2, volume: 0 }],
  CCC: [{ time: 0, open: 100, high: 100, low: 100, close: 100, volume: 0 }],
}
g.command(JSON.stringify({ cmd: 'build', data }))
console.log(JSON.parse(g.command(JSON.stringify({ cmd: 'similar', symbol: 'AAA', k: 2 }))))
```

The same spec and data yield results byte-identical to the native build. See the
[live demo](/demo) for the Wickra core running in your browser.

## More

- [npmjs.com/package/wickra-genome-wasm](https://www.npmjs.com/package/wickra-genome-wasm)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/bindings/wasm)
