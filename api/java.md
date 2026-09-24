# Java

The Java binding links the C ABI via a small JNI shim. Construct a `Genome` from a
JSON spec and drive it with `command(json) -> json`.

```xml
<!-- Maven Central -->
<dependency>
  <groupId>org.wickra</groupId>
  <artifactId>wickra-genome</artifactId>
  <version>0.1.3</version>
</dependency>
```

```java
import org.wickra.genome.Genome;

String spec =
    "{\"features\":[{\"kind\":\"price\",\"field\":\"close\"}],"
  + "\"symbols\":[\"AAA\",\"BBB\",\"CCC\"],"
  + "\"normalize\":\"z_score\",\"metric\":\"euclid\",\"seed\":24333}";

try (Genome g = new Genome(spec)) {
    g.command("{\"cmd\":\"build\",\"data\":{ /* symbol -> candles */ }}");
    String neighbours = g.command("{\"cmd\":\"similar\",\"symbol\":\"AAA\",\"k\":2}");
    System.out.println(neighbours);
}
```

## More

- [central.sonatype.com/artifact/org.wickra/wickra-genome](https://central.sonatype.com/artifact/org.wickra/wickra-genome)
- [Source & examples](https://github.com/wickra-lib/wickra-genome/tree/main/examples/java)
