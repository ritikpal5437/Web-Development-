// Array/object ke andar ki values ko "spread" karke bahar nikalna.

let fruits = ["Apple", "Banana", "Mango"];
let newFruits = [...fruits];
console.log(newFruits);


// merge arrays

let fruits1 = ["Apple", "Banana"];
let vegetables = ["Potato", "Tomato"];

let food = [...fruits1,...vegetables];
console.log(food);
