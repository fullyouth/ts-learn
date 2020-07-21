// 变量声明
let o = { name12: 'zhq', age: 18 }

let { name12, age }: { name12:  string, age: number } = o

type C = { a?: string, b?: number }
function f({ a, b }: C): void {
    // ...
}
f({})