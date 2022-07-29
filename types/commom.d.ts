// declare 类型增强

declare var globalVar:string

// 接口和类型别名 去约束变量名称
// interface Person{
//   name:string,
//   age:number
// }

type Person = {name:string,age:number}
declare var globalObj:Person


// declare

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举
// declare namespace 声明（含有某方法的）全局对象
// declare interface 和 type 声明全局类型




// declare function $(n:string):any
// declare namespace ${
//   function ajax():void
// }

// npm i --save-dev @type/jquery
// @type/jquery 是市面上已经写好的针对jquery的ts的声明
// --save-dev  jquery是项目依赖 不是开发环境依赖
// -D 如果是开发环境依赖 npm i -D @type/库名