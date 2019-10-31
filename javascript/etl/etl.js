export const transform = (old) => {
    const result = Object.keys(old).reduce(transform, {})
    function transform(new_map, point_value) {
        const letters = old[point_value]
        const chunk = letters.reduce((new_map_chunk, letter) => {
            return Object.assign(new_map_chunk, {[letter.toLowerCase()]: Number(point_value)})
        }, {})
        return Object.assign(new_map, chunk)
    }
    return result
};
