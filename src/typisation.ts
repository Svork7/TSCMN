// numbers
let x: number = 10
// bigInt, должны быть целыми
let y: bigint = 1234n
// string
let str1: string = 'Hello world'
// symbol
let symb: symbol = Symbol('as')
//boolean
let bool: boolean = true
// undefined
let und: undefined = undefined
//null
let n: null = null

// literal, определяется через const
const num = 108

//universal (можно присваивать любой тип)
let mm: any = 1
mm = []

//unknown, для него в дальнейшем необходимо уточнение в отличие от any
let xx: unknown = 2

//типизация функций
function sum(a: number, b: number): number {
  return a + b
}

//стрелочная запись
const sum2 = (a: number, b: number): number => a + b

//тип - void, когда функция ничего не возвращает (в js undefined)
function log(name: string): void {
  console.log('Hello', name)
}

// тип данных never, отличие от void never не завершается
function crash(): never {
  throw new Error('crash')
}

//опциональность параметров (?)
function log1(name: string, userId?: string): void {
  console.log('Hello', name, 'with ID', userId)
}

log1('Eugene', '213')

function average(...nums: number[]) {
  const sum = nums.reduce((acc, el) => acc + el, 0)
  return sum / nums.length
}

function slice(str: string, start: number, end?: number): string {
  let newStr: string = ''

  let lastIndex: number

  if (end) {
    lastIndex = end > str.length ? str.length : end
  } else {
    lastIndex = str.length
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i]
  }

  return newStr
}
