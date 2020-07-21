// 接口
/**
 TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 * 
 */

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 接口的形式
/**
 * 不检测顺序，只检测类型
 * 
 * 可选属性
 * 好处
 * 1. 可以对可能存在的属性进行预定义
 * 2. 可以捕获引用了不存在的属性时的错误
 * 
 * 只读属性
 * 一些对象属性只能在对象刚刚创建的时候修改其值
 * 
 */
interface LabelledObj {
  readonly label?: string;
  value?: string;
}
function printLabel1(labelledObj: LabelledObj):{label: string} {
  console.log(labelledObj.label);
  return {
    label: 'zhq'
  }
}
printLabel1({})



interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
