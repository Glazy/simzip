# simzip

A simple array zip function to match corresponding elements from a collection of enumerables.

```typescript
zip<number | string>([[1, 2, 3], ['a', 'b', 'c'], ['x', 'y', 'z']])
// [[1, 'a', 'x'], [2, 'b', 'y'], [3, 'c', 'z']]
```

By default, the zipping finishes as soon as any enumerable in the given collection completes.

```typescript
zip([['a', 'b', 'c', 'd'], ['x', 'y', 'z']])
// [['a', 'x'], ['b', 'y'], ['c', 'z']]
```

This truncation can be disabled and any gaps can be filled with a placeholder value instead.

```typescript
zip([['a', 'b', 'c', 'd'], ['x', 'y', 'z']], { truncate: false, placeholder: '-' })
// [['a', 'x'], ['b', 'y'], ['c', 'z'], ['d', '-']]
```