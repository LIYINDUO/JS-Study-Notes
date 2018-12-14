function Person(name) {
	this.name = name; 
}
//undefined
Person.prototype
//{constructor: ƒ}constructor: ƒ Person(name)arguments: nullcaller: nulllength: 1name: "Person"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM1117:1[[Scopes]]: Scopes[1]__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
Person.prototype.constructor
// ƒ Person(name) {
// 	this.name = name; 
// }
var yinduo = new Person('yinduo');
// undefined
yinduo.__proto__
// {constructor: ƒ}
yinduo.__proto__ === Person.prototype
// true