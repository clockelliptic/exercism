export const abilityModifier = (ability_score) => {
  if(ability_score > 18) throw new Error("Ability scores can be at most 18")
  if(ability_score < 3) throw new Error("Ability scores must be at least 3")
  return Math.floor((ability_score - 10) / 2)
}

export class Character {
  constructor(){
    this._abilities = ['strength','dexterity','constitution', 'intelligence', 'wisdom', 'charisma', 'hitpoints']
      .reduce((abls, a) => Object.assign(abls, {[a]: Character.rollAbility()}),{})
  }

  static rollAbility() {
    return Array(4).fill()
      .map(x=> Math.floor(Math.random()*6)+1)
      .sort((a,b) => a-b)
      .slice(1,)
      .reduce((acc,x) => acc+x)
  }

  get strength() {
    return this._abilities['strength']
  }

  get dexterity() {
    return this._abilities['dexterity']
  }

  get constitution() {
    return this._abilities['constitution']
  }

  get intelligence() {
    return this._abilities['intelligence']
  }

  get wisdom() {
    return this._abilities['wisdom']
  }

  get charisma() {
    return this._abilities['charisma']
  }

  get hitpoints() {
    return 10+abilityModifier(this.constitution)
  }

}
