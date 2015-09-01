# String-to-object
Converts string such ```'a.b.c'``` to object ```{a: {b: {c: {}}}}```

# Installation

``
npm install string-to-object
``

# Example usage

```
var stringToObject = require('string-to-object');

stringToObject('a.b.c.d'); // {a: {b: {c: {d: {}}}}
```
