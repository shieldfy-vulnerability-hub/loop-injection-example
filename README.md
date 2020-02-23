# Loop-Injection-example

## there is 2 vulnerabilities

1. loop-injection in `index.vuln.js` line `25`

```js
var obj = req.body

for (let index = 0; index < obj.length; index++) {
    const element = obj.length[index];
    
}
res.end('finished')

```

2. loop-injection in `index.vuln.ts` line `26`

```ts
var obj = req.body

for (let index = 0; index < obj.length; index++) {
    const element = obj.length[index];
    
}
res.end('finished')

```