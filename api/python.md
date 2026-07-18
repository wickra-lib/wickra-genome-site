# Python

The Python package wraps the Rust core over the C ABI. Construct a `Genome`,
`build` the vectors, then query with `command(json) -> json`.

```bash
pip install wickra-genome
```

```python
import json
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
print(neighbours)
```

## More

- [pypi.org/project/wickra-genome](https://pypi.org/project/wickra-genome/)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/python)
