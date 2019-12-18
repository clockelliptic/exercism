const push = (xs, x) => [...xs, x]
const foldl = (xs, acc, fn, i = 0) =>
  (i < xs.length)
    ? foldl(xs, fn(acc, xs[i]), fn, i + 1)
    : acc
const concat = (arrs) => {
      const [head, ...tail] = [...arrs]
      return foldl(tail, head, (acc, arr) => (arr.length ? [...acc, ...arr] : acc))
    }
const reverse = (xs) => foldl(xs, [], (acc, x) => [x, ...acc])

export class List {
  constructor(data=[]) {
    this._data = data;
  }

  append(list) {
    return new List([...this._data, ...list.values]);
  }

  get values() {
    return [...this._data];
  }

  concat(more) {
    return new List(concat([this._data, ...more.values.map(list => list.values)]))
  }

  filter(pred) {
    return new List(foldl(this._data, [], (acc, x) => pred(x) ? push(acc, x) : acc))
  }

  map(fn) {
    return new List(foldl(this._data, [], (acc, x) => push(acc, fn(x))))
  }

  length() {
    return this._data.length
  }

  foldl(fn, acc) {
    return foldl(this._data, acc, fn)
  }

  foldr(fn, acc) {
    return foldl(reverse(this._data), acc, fn)
  }

  reverse() {
    return new List(reverse(this._data))
  }
}