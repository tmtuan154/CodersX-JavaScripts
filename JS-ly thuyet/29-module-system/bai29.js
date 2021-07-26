/*
    Mỗi function object sẽ được tách ra một file riêng
    cuối fìle cần module.exports = Mouse;
    Khi sử dụng var Mouse = requỉe('./mouse);
    Prototype có thể là một function
*/

// node module 
/*
function Mouse(color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}
*/

/* function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
} */

/* 
    module.export = {}
    có thể export ra object
*/

var eat = new Cat.prototype.eat

var Mouse = require('./mouse');
var Cat = require('./cat');

var chuot1 = new Mouse('black');
var chuot2 = new Mouse('white');

console.log(chuot1);
console.log(chuot2);

var cat = new Cat();

console.log(cat)

cat.eat(chuot1);
cat.eat(chuot2);

// eat(chuot1)
// eat(chuot2) // Looxi

console.log(chuot1);
console.log(chuot2);
console.log(cat)