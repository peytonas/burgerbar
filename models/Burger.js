export default class Burger {
  constructor(data) {
    console.log("The burger is speaking to me...")
    this.name = data.name
    this.bun = data.bun || null
    this.meat = data.meat || []
    this.ingredients = data.ingredients || []
    this.comesWith = data.comesWith || null
    this.price = data.price || null


  }

  getTemplate(index) {
    let template =
      `
        <div class="col-4">
            <h1>${this.name}</h1>
            <h3>${this.bun}</h3>
            <h3>${this.meat}</h3>
            <h3>${this.ingredients}</h3>
            <h3>${this.comesWith}</h3>
            <h3>${this.price}</h3>
            <ul>`
    template += this.drawMeat(index)
    template += ` </ul>
            <form onsubmit="burger.controllers.burgerController.addMeat(event, ${index})">
              <div class="form-group">
                <label for="meat">meat</label>
                <input type="text" class="form-control" name="meat" placeholder="choose meat" required>
              </div>
              <button type="submit">+</button>
            </form>
            <h3>${this.price}</h3>
            <button type="button" onclick="burger.controllers.burgerController.deleteBurger(${index})">x</button>
          </div>
    `
    return template
  }
  drawMeat(burgerIndex) {
    let meatTemplate = ""
    this.meat.forEach((m, meatIndex) => {
      meatTemplate += `<li>${m}<span onclick="burger.controllers.burgerController.deleteMeat(${burgerIndex}, ${meatIndex})>x</span></li>`
    });
    return meatTemplate
  }

}