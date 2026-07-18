# About Wickra Genome

Wickra Genome is a vector database of the whole market: every asset as a live
feature vector over the streaming indicators, with similarity search, clustering
and anomaly detection over its microstructure DNA. A query is a JSON command —
**data, not code** — so it runs in every one of ten languages and returns
byte-for-byte identical results.

## What makes it different

- **Every asset is a vector.** Each asset has a shape — the momentum, volatility,
  flow and microstructure signature of how it is trading right now. Genome turns
  that shape into a feature vector, one coordinate per Wickra indicator.
- **Find assets behaving alike.** Similarity search finds every asset behaving like
  X right now, ranked by cosine or Euclidean distance in the normalized space.
- **Cluster and flag.** Seeded k-means clustering groups the market into regimes,
  and anomaly scoring flags the assets whose DNA has gone strange.
- **One coordinate per indicator.** Vectors are built from the same 514 indicators
  of the Wickra core the rest of the ecosystem uses — the same numbers a backtest
  or a live chart sees, turned into geometry.

## Why it exists

Market screening is usually per-symbol and rule-based; it can't ask "what else is
behaving like this?" Genome makes the whole market a **vector space**, built once
in Rust, and exposes it as a JSON-over-C-ABI data API to Rust, Python, Node.js,
WASM and — over a C ABI — C, C++, C#, Go, Java and R. The same query runs anywhere.

## Open source

Released under the **MIT OR Apache-2.0** license — permissive, OSI-approved, free
for any use including commercial. Source, issues and releases on
[GitHub](https://github.com/wickra-lib/wickra-genome).

## Disclaimer

Wickra Genome is a software library, **not** a trading system, and is provided
**as-is with no warranty**. It surfaces geometric relationships over market data;
it does not give financial advice. Use it at your own risk.
