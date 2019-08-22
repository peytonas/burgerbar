import Burger from "../models/Burger.js"

let _state = {
  burgers: [new Burger({
    name: "Create a Burger!",
    bun: [],
    meat: [],
    ingredients: [],
    price: "$5.95"
  })]
}




export default class BurgerService {

  deleteBun(burgerIndex, bunIndex) {
    _state.burgers[burgerIndex].bun.splice(bunIndex, 1)
  }

  deleteMeat(burgerIndex, meatIndex) {
    _state.burgers[burgerIndex].meat.splice(meatIndex, 1)
  }
  deleteBurger(index) {
    _state.burgers.splice(index, 1)
  }
  deleteIngredients(burgerIndex, ingredientsIndex) {
    _state.burgers[burgerIndex].ingredients.splice(ingredientsIndex, 1)
  }

  addBun(newBun, burgerIndex) {
    _state.burgers[burgerIndex].bun.push(newBun)
  }

  addIngredients(newIngredients, burgerIndex) {
    _state.burgers[burgerIndex].ingredients.push(newIngredients)
  }
  addMeat(newMeat, burgerIndex) {
    _state.burgers[burgerIndex].meat.push(newMeat)
  }
  addBurger(newBurger) {
    _state.burgers.push(new Burger(newBurger))
  }
  get Burger() {
    return _state.burgers.map(burger => new Burger(burger))
  }
}