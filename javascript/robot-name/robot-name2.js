export class Robot {
    constructor() {
      this.reset()
    }

    get name() {
      return this._name
    }

    reset() {
      this._name = Robot.avaibleNames[Robot.avaibleNamesIndex]
      Robot.avaibleNamesIndex++
    }
  }

  Robot.generateAvaiblesNames = function* generateAvaiblesNames() {
    for (let firstLetter = 'A'.charCodeAt(); firstLetter <= 'Z'.charCodeAt(); firstLetter++) {
      for (let secondLetter = 'A'.charCodeAt(); secondLetter <= 'Z'.charCodeAt(); secondLetter++) {
        for (let number = 0; number <= 999; number++) {
          yield String.fromCharCode(firstLetter)
            + String.fromCharCode(secondLetter)
            + number.toString().padStart(3,'0')
        }
      }
    }
  }

  Robot.shuffleArray = array => {
    const copyArray = [...array]
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * i);
      const temp = copyArray[i];
      copyArray[i] = copyArray[j];
      copyArray[j] = temp;
    }
    return copyArray
  }

  Robot.releaseNames = () => {
    Robot.avaibleNames = [...Robot.generateAvaiblesNames()]
    Robot.avaibleNames = Robot.shuffleArray(Robot.avaibleNames)
    Robot.avaibleNamesIndex = 0
  }

  Robot.releaseNames()