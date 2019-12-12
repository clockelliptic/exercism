const push = (xs, x) => {
    return [...xs, x]
  }

const reduce = (arr, res, fn, i = 0) =>
  (i < arr.length)
    ? reduce(arr, fn(res, arr[i]), fn, i + 1)
    : res

const append = (xs, ys) =>
    reduce(ys, xs, (xs, y) => push(xs, y))

const flatten = (arr) => reduce(arr, [], (acc, x) => {
        return (x.length===undefined)
            ? append(acc, [x])
            : append(acc, flatten(x))
})

console.log("result: ", flatten([1,2,3,[4],[5,6,7,[8]],9,10,[[[11]]]]))

// result: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]