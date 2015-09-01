# path-to-object
Converts string such ```'a.b.c'``` to object ```{a: {b: {c: {}}}}```

# Installation

``
npm install path-to-object
``

# Example usage

```
var pathToObject = require('path-to-object');

pathToObject('a.b.c.d'); // {a: {b: {c: {d: {}}}}

// Passing second param will set last field's value
pathToObject('a.b.c', true); // {a: {b: {c: true}}}
```