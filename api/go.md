# Go

The Go binding links the C ABI via cgo. Construct a `Genome` from a JSON spec and
drive it with `Command(json) -> (json, error)`.

```bash
go get github.com/wickra-lib/wickra-genome-go
```

```go
package main

import (
	"fmt"

	wickra "github.com/wickra-lib/wickra-genome-go"
)

func main() {
	spec := `{"features":[{"kind":"price","field":"close"}],` +
		`"symbols":["AAA","BBB","CCC"],"normalize":"z_score","metric":"euclid","seed":24333}`
	g, err := wickra.New(spec)
	if err != nil {
		panic(err)
	}
	defer g.Close()

	data := `{"AAA":[{"time":0,"open":1,"high":1,"low":1,"close":1,"volume":0}],` +
		`"BBB":[{"time":0,"open":2,"high":2,"low":2,"close":2,"volume":0}],` +
		`"CCC":[{"time":0,"open":100,"high":100,"low":100,"close":100,"volume":0}]}`
	g.Command(`{"cmd":"build","data":` + data + `}`)

	out, _ := g.Command(`{"cmd":"similar","symbol":"AAA","k":2}`)
	fmt.Println(out)
}
```

## More

- [pkg.go.dev/github.com/wickra-lib/wickra-genome-go](https://pkg.go.dev/github.com/wickra-lib/wickra-genome-go)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/go)
