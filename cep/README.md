### Cep runner

Simple utility to eval scripts.

Using `typescript`
```ts
interface Functions extends CustomFunctions {
    someFunction: (name: string) => void;
    getVersion: () => string;
}

const runner = createRunner<Functions>("_PN_");

await runner.someFunction("Joe");
const version = await runner.getVersion();

console.log(version);
```

`javascript`
```js
const runner = new Runner("_PN_");
const version = runner.getVersion();

console.log(version);
```

The `_PN_` is reffering to the name you put in your `.jsx`.

Example:
```jsx
$._PN_ = {
    someFunction: function (name) {...},
    getVersion: function() {...}
}
```