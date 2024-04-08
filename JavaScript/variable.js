// 1. strict coding-use srict
// added in ES5
// use this for Vanila Javascript
'use strict';

// 2. blocking scope - Variable, r/w
// let (added in ES6)
// never use 'var' (has no block scope)
// var hoisting (move declaration from bottom to top)
{
    let name = 'Jisoo';
    console.log(name);
    name = 'hello'
    console.log(name);
}
console.log(name);
 

// 3. const - Constant, r (read only)
// recommended to use whenever possible 
// only use let when it needs to change
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// Object, box container
// function, first-class function

// number
const count = 3;
const size = 3.14;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 9999999999999999999999999999999999999999999999999n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const Jisoo = 'Jisoo';
const greeting = 'hello' + Jisoo;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hiJisoo = `hi ${Jisoo}`; // formatting method
console.log(`value: ${hiJisoo}, type: ${typeof hiJisoo}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

 // Symbol => creates unique id for objects.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);
// conversion to string needed for id type.

// object, real-life object, data structure
const me = {'name': 'me', 'age': 24};
me.age = 10;

// 5 Dynamic typing: number <=> string
let text = 'hello'
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '4' + 4;
console.log(`value: ${text}, type: ${typeof text}`);
text = '4' / 4;
console.log(`value: ${text}, type: ${typeof text}`);