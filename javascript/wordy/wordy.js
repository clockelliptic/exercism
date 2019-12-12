const OPERATIONS = {
  'plus': (value) => (operand) => value + operand,
  'minus': (value) => (operand) => value - operand,
  'multiplied': (value) => (operand) => value * operand,
  'divided': (value) => (operand) => value / operand,
}

const isNumeric = (str) => !isNaN(parseFloat(str))
const isValidOperation = (str) => Object.keys(OPERATIONS).includes(word)

class ArgumentError extends Error {
  constructor() {
    super()
  }
}

class Wordy {
  constructor(question) {
    this.question = question
  }

  answer() {
    const invocations = this.question
      .split(' ')
      .reduce((acc, word, i) => (isNumeric(word) || isValidOperation(word)) ? acc.concat([word]) : acc , [])
      .map(inv => isValidOperation(inv) ? OPERATIONS[word] : word)

    const result =
      invocations.reduce((acc, inv, i) => {
        return {

        }
      })

    if(result.length !== 1) throw new ArgumentError()
    return result[0]
  }
}

export { Wordy as WordProblem, ArgumentError };