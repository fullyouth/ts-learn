let isDone1: boolean = false

let num1: number = 1

let name1: String = 'zhq'

let list1: number[] = [1]
let list2: Array<number> = [1, 2, 3]
let list3: any[] = [1, '2', 3]

// 元组
let x: [string, number]

x = ['zhq', 123]

// 枚举
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
// 某种程度上来说，void类型像是与any类型相反
function warnUser(): void {
  console.log("This is my warning message");
}

// Never

// Object

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;