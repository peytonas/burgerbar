import Burger from "../models/Burger.js"

let _state = {
  burgers: [new Burger({
    name: "Poblano Picasso Burger",
    bun: "white",
    meat: "beef",
    ingredients: ["mayo", "mustard", "pickles", "lettuce", "tomato", "cheese"],
    comesWith: [],
    price: "$5.95"
  })]
}




export default class BurgerService {
  constructor() {
    console.log("Enjoy your burger!")
  }
  addBurger(newBurger) {
    _state.burgers.push(new Burger(newBurger))
    console.log(_state.burgers)
  }
}