export const setTextAndCubeColor = (tab, setText, setColor) => {
  switch (tab % 3) {
    case 0:
      setText("Portfolio")
      setColor("#0077ff")
      break
    case 1:
      setText("About")
      setColor("#bb691d")
      break
    case 2:
      setText("Skills")
      setColor("#ff0000")
      break
    default:
      break
  }
}
