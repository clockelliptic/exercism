class Cell {
  constructor(){
    this.__callbacks = []
    this.__value;
  }

  addCallback(cb) {
    this.__callbacks = this.__callbacks.concat([cb])
  }

  removeCallback(cb) {
    this.__callbacks = this.__callbacks.filter(callback => cb!==callback)
  }

  get value(){
    return this.__value
  }
}

export class InputCell extends Cell {
  constructor(value) {
    super();
    this.setValue(value)
  }

  resetUpdateCheck_onDependencies(){
    this.__callbacks.map(cb => { if ( cb instanceof ComputeCell) cb.resetUpdateCheck() })
  }

  setValue(value) {
    this.__prev_val = this.__value
    this.__value = value
    this.__isUpToDate = true
    this.resetUpdateCheck_onDependencies()
    this.__callbacks.map(cb => {cb.setValue(this)})
    this.__callbacks.map(cb => {cb.fireCallbacks()})
  }
}

export class ComputeCell extends Cell {
  constructor(inputCells, fn) {
    super();
    this.__fn = fn
    this.__inputCells = inputCells
    inputCells.map(cell => {cell.addCallback(this)})
    this.setValue()
  }

  resetUpdateCheck(){
    this.__isUpToDate = false;
    this.resetUpdateCheck_onDependencies()
  }

  resetUpdateCheck_onDependencies(){
    this.__callbacks.map(cb => { if ( cb instanceof ComputeCell) cb.resetUpdateCheck() })
  }

  safeToFireCallbacks(){
    const valueChanged = () => (this.__prev_val !== this.__value)
    const inputsAreUpToDate = () => this.__inputCells.map(cell => cell.__isUpToDate).every(x => x===true)
    return ( this.__isUpToDate && valueChanged() && inputsAreUpToDate() )
  }

  setValue(){
    this.__prev_val = this.value
    this.__value = this.__fn(this.__inputCells)
    this.__isUpToDate = true;
  }

  fireCallbacks(){
    if (this.safeToFireCallbacks()) {
      this.__callbacks.map(cb => {cb.setValue(this)})
      this.__callbacks.map(cb => { if (cb instanceof ComputeCell) cb.fireCallbacks(this)} )
    }
  }
}

export class CallbackCell {
  constructor(fn) {
    this.__fn = fn
    this.__values = [];
  }

  isStaticMethod(fn){
    try {
      fn()
      return true
    } catch {
      return false
    }
  }

  setValue(cell){
    const callbackVal = this.__fn(cell)
    this.__values = this.values.concat([callbackVal])
  }

  get values(){
    return this.__values
  }
}