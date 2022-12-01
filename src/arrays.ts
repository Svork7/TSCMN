// типизация массивов
const numArr = [1, 3, 4, 5, 6]

const strArr: string[] = []
const strArr2: Array<string> = []

interface Car {
  wheels: number
  brand: string
}

//тип данных массива - непримитивные данные, объекты согласно интерфейсу
const cars: Car[] = []
cars.push({ brand: 'Audi', wheels: 4, type: '' })

//создание массива массивов

const arrOfArr: string[][] = []
arrOfArr.push(['', ''])

function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index)
  })
}

printArr([1, '2'])
