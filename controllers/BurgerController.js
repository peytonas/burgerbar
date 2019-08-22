import BurgerService from "../services/BurgerService.js"

let _burgerService = new BurgerService()



function _draw() {
  let burgers = _burgerService.Burger
}


export default class BurgerController {
  constructor() {
    console.log("Burgers!")
    _draw()
  }
}