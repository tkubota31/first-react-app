import {choice, remove} from "./helpers";
import foods from "./foods"

let randomFruit = choice(foods)

console.log(`I'd like one ${randomFruit}, please`)
console.log(`Here you go: ${randomFruit}`)
console.log("Delicious! May I have another?")

let newFruitList = remove(foods,randomFruit);

console.log(`I'm sorry, we're all out. we have ${newFruitList} left`)
