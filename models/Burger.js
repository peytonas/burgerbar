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
          <h3>${this.price}</h3>`
  }

}