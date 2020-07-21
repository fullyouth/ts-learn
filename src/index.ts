// 类
// 在构造函数的参数上使用public等同于创建了同名的成员变量。
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// 接口
interface Person {
  firstName: string;
  lastName: string;
}

// 类型注解
function greeter(Person: Person) {
  return `hello,${Person.firstName}${Person.lastName}`
}
let user = new Student("Jane", "M.", "User");
greeter(user)

