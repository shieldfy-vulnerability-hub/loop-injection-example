# Loop-Injection-example

## there is 1 vulnerability

1. loop-injection in `index.vuln.js` line `25`

```js
var obj = req.body

for (let index = 0; index < obj.length; index++) {
    const element = obj.length[index];
    
}
res.end('finished')

```