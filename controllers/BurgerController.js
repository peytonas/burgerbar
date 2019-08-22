import BurgerService from "../services/BurgerService.js"

let _burgerService = new BurgerService()



function _draw() {
  let burgers = _burgerService.Burger
  burgers.forEach((burger, index) => {
    template += burger.getTemplate(index)
  })
}


export default class BurgerController {
  constructor() {
    console.log("Burgers!")
    _draw()
  }

  addBurger(event) {
    event.preventDefault()
    let form = event.target
    let newBurger = {
      name: form.name.value
    }
    _burgerService.addBurger(newBurger)
    _draw()
  }
}