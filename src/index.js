// 类
// 在构造函数的参数上使用public等同于创建了同名的成员变量。
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// 类型注解
function greeter(Person) {
    return "hello," + Person.firstName + Person.lastName;
}
var user = new Student("Jane", "M.", "User");
greeter(user);
