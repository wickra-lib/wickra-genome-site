# R

The R package links the C ABI. Build a genome with `wkgenome_new`, then drive it
with `wkgenome_command`.

```r
install.packages("wickragenome", repos = "https://wickra-lib.r-universe.dev")
```

```r
library(wickragenome)

spec <- '{"features":[{"kind":"price","field":"close"}],
          "symbols":["AAA","BBB","CCC"],"normalize":"z_score","metric":"euclid","seed":24333}'

g <- wkgenome_new(spec)
data <- '{"AAA":[{"time":0,"open":1,"high":1,"low":1,"close":1,"volume":0}],
          "BBB":[{"time":0,"open":2,"high":2,"low":2,"close":2,"volume":0}],
          "CCC":[{"time":0,"open":100,"high":100,"low":100,"close":100,"volume":0}]}'
wkgenome_command(g, paste0('{"cmd":"build","data":', data, '}'))
out <- wkgenome_command(g, '{"cmd":"similar","symbol":"AAA","k":2}')
cat(out)
```

## More

- [wickra-lib.r-universe.dev](https://wickra-lib.r-universe.dev)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/r)
