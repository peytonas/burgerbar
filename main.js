import BurgerController from "./controllers/BurgerController.js"




class Burger {
  constructor() {
    this.controllers = {
      burgerController: new BurgerController()
    }
  }
}