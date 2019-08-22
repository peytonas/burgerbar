import Burger from "../models/Burger.js"

let _state = {
  burgers: [new Burger({
    name: "good",
    bread: "white",
    meat: "beef",
    ingredients: ["mayo", "mustard", "pickles", "lettuce", "tomato", "cheese"],
    price: "$3.00"
  })]
}




export default class BurgerService {
  constructor() {
    console.log("Enjoy your burger!")
  }
}