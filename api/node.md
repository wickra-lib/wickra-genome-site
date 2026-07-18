# Node.js

The Node package is a native napi addon over the Rust core. Construct a `Genome`,
`build` the vectors, then query with `command(json) -> json`.

```bash
npm install wickra-genome
```

```javascript
import { Genome } from 'wickra-genome'

const spec = JSON.stringify({
  features: [{ kind: 'price', field: 'close' }],
  symbols: ['AAA', 'BBB', 'CCC'],
  normalize: 'z_score', metric: 'euclid', seed: 24333,
})

const g = new Genome(spec)
const data = {
  AAA: [{ time: 0, open: 1, high: 1, low: 1, close: 1, volume: 0 }],
  BBB: [{ time: 0, open: 2, high: 2, low: 2, close: 2, volume: 0 }],
  CCC: [{ time: 0, open: 100, high: 100, low: 100, close: 100, volume: 0 }],
}
g.command(JSON.stringify({ cmd: 'build', data }))
const neighbours = JSON.parse(g.command(JSON.stringify({ cmd: 'similar', symbol: 'AAA', k: 2 })))
console.log(neighbours)
```

## More

- [npmjs.com/package/wickra-genome](https://www.npmjs.com/package/wickra-genome)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/node)
