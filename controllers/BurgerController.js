import BurgerService from "../services/BurgerService.js"

let _burgerService = new BurgerService()



function _draw() {
  let template = ``
  let burgers = _burgerService.Burger
  burgers.forEach((burger, index) => {
    template += burger.getTemplate(index)
  })
  document.querySelector('#pizza').innerHTML = template
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
  addMeat(event, burgerIndex) {
    event.preventDefault()
    let form = event.target
    let newMeat = form.meat.value
    _burgerService.addMeat(newMeat, burgerIndex)
    _draw()
  }
  deleteMeat(burgerIndex, meatIndex) {
    _burgerService.deleteMeat(burgerIndex, meatIndex)
    _draw()
  }
}