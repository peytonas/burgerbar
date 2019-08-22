import Burger from "../models/Burger.js"

let _state = {
  burgers: [new Burger({
    name: "Poblano Picasso Burger",
    bun: "white",
    meat: ["beef"],
    ingredients: ["mayo", "mustard", "pickles", "lettuce", "tomato", "cheese"],
    comesWith: [],
    price: "$5.95"
  })]
}




export default class BurgerService {
  deleteMeat(burgerIndex, meatIndex) {
    _state.burgers[burgerIndex].meat.splice(meatIndex, 1)
  }
  deleteBurger(index) {
    _state.burgers.splice(index, 1)
  }
  addMeat(newMeat, burgerIndex) {
    _state.burgers[burgerIndex].meat.push(newMeat)
  }
  addBurger(newBurger) {
    _state.burgers.push(new Burger(newBurger))
    console.log(_state.burgers)
  }

  constructor() {
    console.log("Enjoy your burger!")
  }
  get Burger() {
    return _state.burgers.map(burger => new Burger(burger))
  }
}