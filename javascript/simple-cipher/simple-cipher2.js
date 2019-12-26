const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const DEFAULT_KEY_LENGTH = 100

function random(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Cipher {
  constructor(key) {
    if (key === undefined) {
      let res = [];
      for (let i=0;i<DEFAULT_KEY_LENGTH;i++) {
        res.push(random(0,ALPHABET.length));
      }
      this._key = res;
    }
    else {
      this._key = [...key].map(c=>ALPHABET.indexOf(c));
    }
  }

  encode(msg) {
    return [...msg]
      .map((c, i) => ALPHABET.indexOf(c) + this._key[i%this._key.length])
      .map(n => ALPHABET[n % ALPHABET.length])
      .join("");
  }

  decode(code) {
    return [...code]
      .map((c, i) =>ALPHABET.indexOf(c) - this._key[i%this._key.length])
      .map(n =>ALPHABET[(n + ALPHABET.length) % ALPHABET.length])
      .join("");
  }

  get key() {
    return this._key.map(n=>ALPHABET[n]).join("");
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