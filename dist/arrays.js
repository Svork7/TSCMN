"use strict";
// типизация массивов
const numArr = [1, 3, 4, 5, 6];
const strArr = [];
const strArr2 = [];
//тип данных массива - непримитивные данные, объекты согласно интерфейсу
const cars = [];
cars.push({ brand: 'Audi', wheels: 4, type: '' });
//создание массива массивов
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
printArr([1, '2']);
