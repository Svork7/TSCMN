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
