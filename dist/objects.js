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
//объекты как аргумент функции
//Объекты как параметры функции указывается обязательный минимальный набор того что должно быть в объекте
function printPoint(point) {
    console.log(`Coordinate of thee point is x: ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: '1',
    y: '22',
};
const obj2 = {
    x: '6',
    y: '55',
    z: '44',
};
printPoint(obj2);
function printName(user) {
    console.log('Hello', user.firstName.toUpperCase());
    //Если есть опциональный элементб то иногда необходимо проходить проверку (доказать Тайпскрипту что объект существует)
    if (user.lastName) {
        console.log('Nice to meet you', user.lastName.toUpperCase());
    }
}
const user1 = {
    login: 'Eugene',
    email: 'test@test.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2022, 12, 1),
};
const admin = {
    login: 'Eugene',
    email: 'test@test.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2022, 12, 1),
    role: 'Superadmin',
};
function login(user) {
    if ((user.login.length > 0, user.password.length > 0))
        console.log('Hello', user.login);
}
login(user1);
login(admin);
