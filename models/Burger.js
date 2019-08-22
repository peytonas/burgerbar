export default class Burger {
  constructor(data) {
    this.name = data.name
    this.bun = data.bun || null
    this.meat = data.meat || []
    this.ingredients = data.ingredients || []
    this.price = data.price || null
  }

  getTemplate(index) {
    let template =
      `
        <div class="col-4">
            <h1 class="card text-center">${this.name}</h1>
            <h3>${this.bun}</h3>
            <h3>${this.meat}</h3>
            <h3>${this.ingredients}</h3>
            <h3>${this.price}</h3>

            <ul>`
    template += this.drawBun(index)
    template += ` </ul>
            <form onsubmit="burger.controllers.burgerController.addBun(event, ${index})">
              <div class="form-group">
                <label for="ingredients">bun:</label>
                <input type="text" class="form-control" name="bun" placeholder="choose bun" required>
              </div>
              <button class="btn btn-info" type="submit">+</button>
            </form>
            <button class="btn btn-danger" type="button" onclick="burger.controllers.burgerController.deleteBun(${index})">x</button>
            <ul>`
    template += this.drawMeat(index)
    template += ` </ul>
            <form onsubmit="burger.controllers.burgerController.addMeat(event, ${index})">
              <div class="form-group">
                <label for="meat">meat:</label>
                <input type="text" class="form-control" name="meat" placeholder="choose meat" required>
              </div>
              <button class="btn btn-info" type="submit">+</button>
            </form>
            <button class="btn btn-danger" type="button" onclick="burger.controllers.burgerController.deleteMeat(${index})">x</button>
        <ul>`
    template += this.drawIngredients(index)
    template += ` </ul>
            <form onsubmit="burger.controllers.burgerController.addIngredients(event, ${index})">
              <div class="form-group">
                <label for="ingredients">ingredients:</label>
                <input type="text" class="form-control" name="ingredients" placeholder="choose ingredients" required>
              </div>
              <button class="btn btn-info" type="submit">+</button>
            </form>
            <button class="btn btn-danger" type="button" onclick="burger.controllers.burgerController.deleteIngredients(${index})">x</button>
        </div>
    `
    return template
  }

  drawBun(burgerIndex) {
    let bunTemplate = ""
    this.bun.forEach((m, bunIndex) => {
      bunTemplate += `<li>${m}<span onclick="burger.controllers.burgerController.deleteBun(${burgerIndex}, ${bunIndex})>x</span></li>`
    });
    return bunTemplate
  }

  drawMeat(burgerIndex) {
    let meatTemplate = ""
    this.meat.forEach((m, meatIndex) => {
      meatTemplate += `<li>${m}<span onclick="burger.controllers.burgerController.deleteMeat(${burgerIndex}, ${meatIndex})>x</span></li>`
    });
    return meatTemplate
  }
  drawIngredients(burgerIndex) {
    let ingredientsTemplate = ""
    this.ingredients.forEach((i, ingredientsIndex) => {
      ingredientsTemplate += `<li>${i}<span onclick="burger.controllers.burgerController.deleteIngredients(${burgerIndex}, ${ingredientsIndex})>x</span></li>`
    });
    return ingredientsTemplate
  }


}