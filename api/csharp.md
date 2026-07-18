# C\#

The .NET binding wraps the C ABI. Construct a `Genome` from a JSON spec and drive
it with `Command(json) -> json`.

```bash
dotnet add package Wickra.Genome
```

```csharp
using Wickra.Genome;

const string spec =
    "{\"features\":[{\"kind\":\"price\",\"field\":\"close\"}]," +
    "\"symbols\":[\"AAA\",\"BBB\",\"CCC\"]," +
    "\"normalize\":\"z_score\",\"metric\":\"euclid\",\"seed\":24333}";

using var g = new Genome(spec);
g.Command("{\"cmd\":\"build\",\"data\":{ /* symbol -> candles */ }}");
var neighbours = g.Command("{\"cmd\":\"similar\",\"symbol\":\"AAA\",\"k\":2}");
Console.WriteLine(neighbours);
```

## More

- [nuget.org/packages/Wickra.Genome](https://www.nuget.org/packages/Wickra.Genome)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/csharp)
