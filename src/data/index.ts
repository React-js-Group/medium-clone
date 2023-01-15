export const positonData = () => {
  const characterList = new Array(100).fill(false)

  characterList.forEach((char, i) => {
    const positionY = Math.random() * 500
    const positionX = Math.random() * 500
    const position = [positionY, positionX]

    characterList[i] = position
  })

  return characterList
}
