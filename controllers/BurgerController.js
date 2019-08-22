import BurgerService from "../services/BurgerService.js"

let _burgerService = new BurgerService()



function _draw() {
  let template = ``
  let burgers = _burgerService.Burger
  burgers.forEach((burger, index) => {
    template += burger.getTemplate(index)
  })
  document.querySelector('#burger').innerHTML = template
}


export default class BurgerController {
  constructor() {
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
  addMeat(event, burgerIndex) {
    event.preventDefault()
    let form = event.target
    let newMeat = form.meat.value
    _burgerService.addMeat(newMeat, burgerIndex)
    _draw()
  }

  addIngredients(event, burgerIndex) {
    event.preventDefault()
    let form = event.target
    let newIngredients = form.ingredients.value
    _burgerService.addIngredients(newIngredients, burgerIndex)
    _draw()
  }

  deleteBurger(index) {
    _burgerService.deleteBurger(index)
    _draw()
  }

  deleteMeat(burgerIndex, meatIndex) {
    _burgerService.deleteMeat(burgerIndex, meatIndex)
    _draw()
  }

  deleteIngredients(burgerIndex, ingredientsIndex) {
    _burgerService.deleteIngredients(burgerIndex, ingredientsIndex)
    _draw()
  }
}