"use strict";
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: false,
};
//переопределение. Должен быть тот же тип данных
car.brand = 'audi';
console.log(car);
