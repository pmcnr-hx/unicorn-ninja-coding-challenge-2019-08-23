const unobstructedWestViewCount = buildings => {
  const [result] = buildings.reverse().reduce(
    ([count, highestHeight], height) => {
      if (height > highestHeight) {
        highestHeight = height
        count++
      }
      return [count, highestHeight]
    },
    [0, 0]
  )
  return result
}

module.exports = { unobstructedWestViewCount }
