const SYMBOLS = 'abcdefghijklmnopqrstuvwxyz'
const SET_LEN = SYMBOLS.length
const DEFAULT_KEY_LENGTH = 100
const random = (min,max) => Math.floor(Math.random() * (max - min)) + min;
const randomKey = (n) => Array(n).fill().map(_ => SYMBOLS[random(0, SET_LEN)] )
class Cipher {
  constructor(key = randomKey(DEFAULT_KEY_LENGTH)) {
    this.__key = [...key].map(c => SYMBOLS.indexOf(c))
  }
  encode(msg) {
    return [...msg]
        .map((c, i) => SYMBOLS.indexOf(c) + this.__key[i%this.__key.length])
        .map(n => SYMBOLS[n % SET_LEN])
        .join('')
  }
  decode(code) {
    return [...code]
        .map((c, i) => LETTERS.indexOf(c) - this.__key[i%this.__key.length])
        .map(n => SYMBOLS[(n+SET_LEN) % SET_LEN])
        .join('')
  }
  get key() {
    return this.__key.map(c => SYMBOLS[c]).join('')
  }
}


let cipher,
    n_runs = 1000000;
const startTime = new Date().getTime()  // milliseconds

for (let i = 0; i<=n_runs; i++){
    cipher = new Cipher()
}

const endTime = new Date().getTime()  // milliseconds

const totalTime = (endTime-startTime)/1000  // SECONDS
const averageTime = (endTime-startTime)/n_runs/1000  // SECONDS

console.log(`Total time for ${n_runs} runs:`, totalTime, ` seconds.`)
console.log(`Average time per run:`, averageTime, ` seconds.`)
console.log(`A single run takes 1/${Math.floor(1/averageTime)} seconds to complete.`)