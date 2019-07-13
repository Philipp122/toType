# toType
A better alternative to the typeof-operator in JS. Utilizes the internal [[CLASS]] property.

The function toType is designed as an alternative to the built in typeof operator and takes one argument and returns a string. 
It utilizes the internal [[CLASS]] property of Javascript Objects. See the following code for comparison:

```javascript
typeof undefined;                           //"undefined"
typeof null;                                //"object"
typeof true;                                //"boolean"
typeof 123;                                 //"number"
typeof "Hello World!";                      //"string"
typeof {a: 4};                              //"object"
typeof [1, 2, 3];                           //"object"
(() => {console.log(typeof arguments)})();  //"object"
typeof new ReferenceError;                  //"object"
typeof new Date;                            //"object"
typeof /a-z/;                               //"object"
typeof Math;                                //"object"
typeof JSON;                                //"object"
typeof new Boolean(true);                   //"object"
typeof new Number(4);                       //"object"
typeof new String("abc");                   //"object"
```

```javascript
toType(undefined);                          //"undefined"
toType(null);                               //"null"
toType(true);                               //"boolean"
toType(123);                                //"number"
toType("Hello World!");                     //"string"
toType({a: 4});                             //"object"
toType([1, 2, 3]);                          //"array"
(() => {console.log(toType(arguments))})(); //"arguments"
toType(new ReferenceError);                 //"error"
toType(new Date);                           //"date"
toType(/a-z/);                              //"regexp"
toType(Math);                               //"math"
toType(JSON);                               //"json"
toType(new Boolean(true));                  //"boolean"
toType(new Number(4));                      //"number"
toType(new String("abc"));                  //"string"
```

As you can see, there is a vast difference between the built-in typeof operator and the new toType function when it comes to more specific type checking, like regular expressions, built-in objects, error objects or even arrays.
