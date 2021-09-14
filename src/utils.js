export const setTextAndCubeColor = (tab, setText, setColor) => {
  switch (tab % 4) {
    case 0:
      setText('Portfolio')
      setColor('#0077ff')
      break
    case 1:
      setText('About')
      setColor('#ff9900')
      break
    case 2:
      setText('Skills')
      setColor('#ff0000')
      break
    case 3:
      setText('Guestbook')
      setColor('#00ff95')
      break
    default:
      break
  }
}
