const push = (arr, newVal) => [...arr, ...(Array.isArray(newVal) ? newVal : [newVal])]
const reduce = (arr, res, fn, i = 0) =>
  (i < arr.length)
    ? reduce(arr, fn(res, arr[i]), fn, i + 1)
    : res

export class List {
  constructor(arg) {
    this._data = [];
  }

  append(newList) {
    this._data = push(this._data, newList.values)
    return this;
  }

  get values() {
    return [...this._data];
  }

  concat(list1) {
    return this.append(list1);
  }

  filter(predicate) {
    this._data = reduce(this._data, [], (a, b) => predicate(b) ? push(a, b) : a);
    return this;
  }

  map(callback) {
    this._data = reduce(this._data, [], (a, b) => push(a, callback(b)));
    return this;
  }

  length() {
    return this._data.length;
  }

  foldl(callback, init) {
    return reduce(this._data, init, callback);
  }

  foldr(callback, init) {
    const reduce = (xs, res, len) => len < 0 ? res : reduce(xs, callback(res, xs[len]), len - 1);
    return reduce(this._data, init, this.length() - 1);

  }

  reverse() {
    this._data = this.foldl((a, b) => [b, ...a], []);
    return this;

  }

}