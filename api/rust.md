# Rust

The native crate. Build the market vectors with `build`, or drive a `Genome`
handle with the JSON command protocol every other binding uses.

```bash
cargo add wickra-genome
```

```rust
use genome_core::{build, GenomeSpec};
use std::collections::BTreeMap;

let spec = GenomeSpec::from_json(SPEC).expect("valid spec");

let mut data = BTreeMap::new();
// ... fill `data` with each symbol's candle history ...

let genome = build(&data, &spec).expect("build");
let neighbours = genome.similar("AAA", 2);
println!("{neighbours:?}");
```

## More

- [crates.io/crates/wickra-genome](https://crates.io/crates/wickra-genome) - [docs.rs](https://docs.rs/wickra-genome)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/rust)
- [GenomeSpec & metrics](https://github.com/wickra-lib/wickra-genome/blob/main/docs/SPEC.md)
