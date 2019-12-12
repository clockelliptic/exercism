const LETTERS = [...'QWERTYUIOPASDFGHJKLZXCVBNM']
const NUMBERS = [...'0123456789']

export class Robot {
  constructor() {
    this.reset()
  }

  get name() {
    return this._name
  }

  reset() {
    this._name = Robot.avaibleNames[Robot.namePointer]
    Robot.namePointer++
  }
}

const shuffleArray = array => {
  const copyArray = [...array]
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * i);
    const temp = copyArray[i];
    copyArray[i] = copyArray[j];
    copyArray[j] = temp;
  }
  return copyArray
}

Robot.generateAllNames = function *() {
  for (let a of LETTERS) {
    for (let b of LETTERS) {
      for (let c of NUMBERS) {
        for (let d of NUMBERS) {
          for (let f of NUMBERS) {
            yield a + b + c + d + f
          }
        }
      }
    }
  }
}

Robot.releaseNames = () => {
  Robot.avaibleNames = shuffleArray(Robot.avaibleNames)
  Robot.namePointer = 0
}

Robot.avaibleNames = [...Robot.generateAllNames()]
Robot.releaseNames()