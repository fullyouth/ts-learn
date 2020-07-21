var isDone1 = false;
var num1 = 1;
var name1 = 'zhq';
var list1 = [1];
var list2 = [1, 2, 3];
var list3 = [1, '2', 3];
// 元组
var x;
x = ['zhq', 123];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
// 某种程度上来说，void类型像是与any类型相反
function warnUser() {
    console.log("This is my warning message");
}
// Never
// Object
// 类型断言
var someValue = "this is a string";
var strLength = someValue.length;
var someValue1 = "this is a string";
var strLength1 = someValue.length;
