"use strict";
// numbers
let x = 10;
// bigInt, должны быть целыми
//let y: bigint = 1234n
// string
let str1 = 'Hello world';
// symbol
let symb = Symbol('as');
//boolean
let bool = true;
// undefined
let und = undefined;
//null
let n = null;
// literal, определяется через const
const num = 108;
//universal (можно присваивать любой тип)
let mm = 1;
mm = [];
//unknown, для него в дальнейшем необходимо уточнение в отличие от any
let xx = 2;
//типизация функций
function sum(a, b) {
    return a + b;
}
//стрелочная запись
const sum2 = (a, b) => a + b;
//тип - void, когда функция ничего не возвращает (в js undefined)
function log(name) {
    console.log('Hello', name);
}
// тип данных never, отличие от void never не завершается
function crash() {
    throw new Error('crash');
}
//опциональность параметров (?)
function log1(name, userId) {
    console.log('Hello', name, 'with ID', userId);
}
log1('Eugene', '213');
function average(...nums) {
    const sum = nums.reduce((acc, el) => acc + el, 0);
    return sum / nums.length;
}
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
