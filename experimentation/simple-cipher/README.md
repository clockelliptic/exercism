# Description

A fantastic question has been rasied:

Which is better?
1. More lines of code
2. More concise code

What can we analyze to determine the answer to this question? We can analyze wether there are *significant and meaningful* differences in any of the following:

1. Time-efficiency (performance)
2. Readability and cognitive overhead
3. Maintainability (how easy is it for others to modify or re-use our code)

Certainly there are other metrics, but these are the ones worth investigating.

# Code Samples

The following approaches were tested:

**CODE 1**:
 - 34 lines of code
 - relies on mutability
 - *does not* use default parameter
 - *does not* extract operations into discrete, resuable, testable functions
```
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const SET_SIZE = ALPHABET.length
const DEFAULT_KEY_LENGTH = 100
function random(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
class Cipher {
  constructor(key) {
    if (key === undefined) {
      let res = [];
      for (let i=0;i<DEFAULT_KEY_LENGTH;i++) {
        res.push(random(0, SET_SIZE));
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
      .map(n => ALPHABET[n % SET_SIZE])
      .join("");
  }
  decode(code) {
    return [...code]
      .map((c, i) =>ALPHABET.indexOf(c) - this._key[i%this._key.length])
      .map(n =>ALPHABET[(n + SET_SIZE) % SET_SIZE])
      .join("");
  }
  get key() {
    return this._key.map(n=>ALPHABET[n]).join("");
  }
}
```

**CODE 2**:
- 25 lines of code
- uses functionally pure methods
- takes advantage of default parameters
- operations are extracted into discrete, reusable, **testable** functions
```
const SYMBOLS = 'abcdefghijklmnopqrstuvwxyz'
const SET_LEN = SYMBOLS.length
const DEFAULT_KEY_LENGTH = 100
const random = (min,max) => Math.floor(Math.random() * (max - min)) + min;
const randomKey = (n) => Array(n).fill().map(_ => SYMBOLS[random(0, SET_LEN)] )
class Cipher {
  constructor(key = randomKey(DEFAULT_KEY_LENGTH)) {
    // map characters to values 0 - 25
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
```

# Relevant Information

Speed of human perception is related to how *fast* we want our code to be.

Human short-term memory is related to *code readability and maintainability*.

**Speed of human perception:**
30ms (3/100 seconds)

src: https://biology.stackexchange.com/questions/19918/what-limits-the-speed-of-human-perception

**Upper limit of human short-term memory**:
1. limited capacity (only about 7 items can be stored at a time)

2. limited duration (storage is very fragile and information can be lost with distraction or passage of time)

3. encoding (primarily acoustic, even translating visual information into sounds).

src: https://www.simplypsychology.org/short-term-memory.html

**As a rule of thumb in the _professional development world_ we _never_ optimize for speed first. We always optimize for readability and maintainability.**

# Experimentation Results


Relative to the experimenter's computer, the following time-efficiency results were gathered:

**CODE 1**:
34 lines of code.
7 code blocks.
Grouped into several larger functions, some with multiple responsibilities.

Average time per run: 0.0000027490000000000003  seconds.
A single run takes 1/363768 seconds to complete.
Total time for 1000000 (ONE MILLION) runs: 2.749  seconds.

**CODE 2**:
25 lines of code.
4 code blocks.
Broken into smaller functions.

Average time per run: 0.000007673000000000001  seconds.
A single run takes 1/130327 seconds to complete.
Total time for 1000000 (ONE MILLION) runs: 7.673  seconds.

# Conclusion

It doesn't really matter either way in this case, you decide. :)

You can practice good principles, or you can settle for what you're used to. It's up to you.