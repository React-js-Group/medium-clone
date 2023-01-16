export const positonData = () => {
  const characterList = new Array(350).fill(false)

  characterList.forEach((char, i) => {
    const positionY = Math.random() * 600
    const positionX = Math.random() * 600
    const position = [positionY, positionX]

    characterList[i] = position
  })

  return characterList
}
