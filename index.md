---
layout: home
title: Wickra Genome — a vector database of the whole market
titleTemplate: false

hero:
  name: "Wickra Genome"
  text: "The market as vectors."
  tagline: "A vector database of the whole market — every asset as a live feature vector over the streaming indicators. Similarity search, clustering and anomaly detection over microstructure DNA, byte-identical across ten languages."
  image:
    src: /wickra-mark.svg
    alt: Wickra Genome
  actions:
    - theme: brand
      text: View on GitHub
      link: https://github.com/wickra-lib/wickra-genome
    - theme: alt
      text: GenomeSpec & metrics
      link: https://github.com/wickra-lib/wickra-genome/blob/main/docs/FEATURES.md
    - theme: alt
      text: API
      link: /api/rust

features:
  - icon: 🧬
    title: Every asset is a vector
    details: Each asset has a shape — the momentum, volatility, flow and microstructure signature of how it is trading right now. Genome turns that shape into a feature vector, one coordinate per Wickra indicator.
  - icon: 🔎
    title: Find assets behaving alike
    details: "Similarity search over the vectors: find every asset behaving like X right now, ranked by cosine or Euclidean distance in the normalized feature space."
  - icon: 🗺️
    title: Cluster the market into regimes
    details: "Seeded k-means clustering groups the market into regimes by microstructure DNA, and anomaly scoring flags the assets whose shape has gone strange."
  - icon: 📈
    title: One coordinate per indicator
    details: "Vectors are built from the same 514 indicators of the Wickra core the rest of the ecosystem uses — the same numbers a backtest or a live chart sees, turned into geometry."
  - icon: 🌐
    title: Ten languages, one vector space
    details: "The core is a JSON-over-C-ABI data API (Genome::command_json) in Rust, Python, Node.js, WASM, C, C++, C#, Go, Java and R. A developer in any language queries the same market."
  - icon: 🧪
    title: Deterministic, proven
    details: The same spec and data yield byte-identical similarity, clustering and anomaly results in every binding, pinned by a golden corpus in CI. Seeded k-means, stable tie-breaks, no wall-clock.
---

<script setup>
const installTabs = [
  { label: 'Python', lang: 'bash', code: 'pip install wickra-genome' },
  { label: 'Node',   lang: 'bash', code: 'npm install wickra-genome' },
  { label: 'Rust',   lang: 'bash', code: 'cargo add wickra-genome' },
  { label: 'WASM',   lang: 'bash', code: 'npm install wickra-genome-wasm' },
  { label: 'C',      lang: 'bash', code: '# prebuilt header + library from GitHub releases:\n# github.com/wickra-lib/wickra-genome/releases' },
  { label: 'C#',     lang: 'bash', code: 'dotnet add package Wickra.Genome' },
  { label: 'Go',     lang: 'bash', code: 'go get github.com/wickra-lib/wickra-genome-go' },
  { label: 'Java',   lang: 'xml',  code: '<!-- Maven Central -->\n<dependency>\n  <groupId>org.wickra</groupId>\n  <artifactId>wickra-genome</artifactId>\n  <version>0.1.2</version>\n</dependency>' },
  { label: 'R',      lang: 'r',    code: 'install.packages("wickragenome", repos = "https://wickra-lib.r-universe.dev")' },
]

const pyCode = `import json
from wickra_genome import Genome

spec = json.dumps({
    "features": [{"kind": "price", "field": "close"}],
    "symbols": ["AAA", "BBB", "CCC"],
    "normalize": "z_score", "metric": "euclid", "seed": 24333,
})

g = Genome(spec)
data = {
    "AAA": [{"time": 0, "open": 1, "high": 1, "low": 1, "close": 1, "volume": 0}],
    "BBB": [{"time": 0, "open": 2, "high": 2, "low": 2, "close": 2, "volume": 0}],
    "CCC": [{"time": 0, "open": 100, "high": 100, "low": 100, "close": 100, "volume": 0}],
}
g.command(json.dumps({"cmd": "build", "data": data}))
neighbours = json.loads(g.command(json.dumps({"cmd": "similar", "symbol": "AAA", "k": 2})))
print(neighbours)`

const nodeCode = `import { Genome } from 'wickra-genome'

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
console.log(neighbours)`

const cliCode = `# Build the market vectors and query by similarity:
wickra-genome --spec genome.json --data ./data --similar AAA --k 5

# Cluster the market into regimes, or flag anomalies:
wickra-genome --spec genome.json --data ./data --cluster 4
wickra-genome --spec genome.json --data ./data --anomaly`

const snippetTabs = [
  { label: 'Python', lang: 'python',     code: pyCode },
  { label: 'Node',   lang: 'javascript', code: nodeCode },
  { label: 'CLI',    lang: 'bash',       code: cliCode },
]
</script>

## The query is JSON, not code

A `GenomeSpec` is a list of `features`, a `symbols` universe, a `normalize` mode
and a `metric`. Build the vectors once, then query by `similar`, `cluster` or
`anomaly` — all over the JSON command protocol.

```json
{
  "features": [
    { "kind": "indicator", "name": "Rsi", "params": [14] },
    { "kind": "indicator", "name": "Atr", "params": [14] },
    { "kind": "price", "field": "close" }
  ],
  "symbols": ["BTCUSDT", "ETHUSDT", "SOLUSDT"],
  "normalize": "z_score",
  "metric": "cosine",
  "seed": 24333
}
```

## Install

The same vector database from every language — native Rust, Python, Node.js and
WASM, plus a C ABI for C, C++, C#, Go, Java and R.

<InstallTabs :tabs="installTabs" />

## Query it from any language

Construct a `Genome` from the JSON spec, `build` the vectors, then `similar`,
`cluster` or `anomaly`. Every binding returns the same results.

<InstallTabs :tabs="snippetTabs" />

## Built on the Wickra core

Wickra Genome is part of the [Wickra](https://wickra.org) ecosystem. It builds each
asset's vector from the 514 indicators of
[`wickra-core`](https://github.com/wickra-lib/wickra) — the same numbers a backtest
or a live chart sees, turned into a searchable geometry of the whole market.

> Wickra Genome is a software library, not a trading system, and comes with no
> warranty — use at your own risk.
