const unobstructedWestViewCount = buildings => {
  const unobstructedWestViewHeights = buildings.reduce((candidateHeights, height) => {
    if (height < candidateHeights[candidateHeights.length - 1]) {
      return [...candidateHeights, height]
    }
    const shorterIndex = candidateHeights.findIndex(element => element <= height)
    return [...candidateHeights.slice(0, shorterIndex), height]
  }, [])
  return unobstructedWestViewHeights.length
}

module.exports = { unobstructedWestViewCount }
