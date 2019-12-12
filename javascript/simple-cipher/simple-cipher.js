const LETTERS = 'abcdefghijklmnopqrstuvwxyz'

export class Cipher {
  constructor(key = 'aaaaaaaaaa') {
    // map characters to values 0 - 25
    this.__key = [...key].map(c => LETTERS.indexOf(c))
  }

  encode(msg) {
    return [...msg]
        .map((c, i) => LETTERS.indexOf(c) + this.__key[i%this.__key.length])
        .map(n => LETTERS[n%26])
        .join('')
  }

  decode(code) {
    return [...code]
        .map((c, i) => LETTERS.indexOf(c) - this.__key[i%this.__key.length])
        .map(n => LETTERS[(n+26)%26])
        .join('')
  }

  get key() {
    return this.__key.map(c => LETTERS[c]).join('')
  }
}