//типизация объектов. Интерфейсы могут содержать опциональные параметры (синтаксис ?)
interface Car {
  wheels: number
  brand: string
  type: string
  //опциональный параметр
  isNew?: boolean
  //если необходимо добавить возможность добавлять какие-либо поля
  //в данном примере значение может быть любым типом данных
  [key: string]: unknown
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
}

//переопределение. Должен быть тот же тип данных

car.brand = 'audi'

console.log(car)

//объекты как аргумент функции
//Объекты как параметры функции указывается обязательный минимальный набор того что должно быть в объекте
function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of thee point is x: ${point.x} and y: ${point.y}`)
}

const obj1 = {
  x: '1',
  y: '22',
}

const obj2 = {
  x: '6',
  y: '55',
  z: '44',
}

printPoint(obj2)

function printName(user: { firstName: string; lastName?: string }): void {
  console.log('Hello', user.firstName.toUpperCase())
  //Если есть опциональный элементб то иногда необходимо проходить проверку (доказать Тайпскрипту что объект существует)

  if (user.lastName) {
    console.log('Nice to meet you', user.lastName.toUpperCase())
  }
}

interface User {
  login: string
  email: string
  password: string
  isOnline: boolean
  lastVisited: Date
}

const user1: User = {
  login: 'Eugene',
  email: 'test@test.com',
  password: '12345',
  isOnline: false,
  lastVisited: new Date(2022, 12, 1),
}

interface Admin {
  login: string
  email: string
  password: string
  isOnline: boolean
  lastVisited: Date
  role: string
}

const admin: Admin = {
  login: 'Eugene',
  email: 'test@test.com',
  password: '12345',
  isOnline: false,
  lastVisited: new Date(2022, 12, 1),
  role: 'Superadmin',
}

function login(user: { login: string; password: string }) {
  if ((user.login.length > 0, user.password.length > 0))
    console.log('Hello', user.login)
}

login(user1)
login(admin)
