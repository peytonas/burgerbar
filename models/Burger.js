export default class Burger {
  constructor(data) {
    console.log("The burger is speaking to me...")
    this.name = data.name
    this.bread = data.bread || null
    this.meat = data.meat || []
    this.ingredients = data.ingredients || []
    this.price = data.price || null

  }
}