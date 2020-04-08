module.exports = {
  generateColor: () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    //#usually set color to state
    //setColor(newColor);
    //#for this test just return color
    return newColor;
  },
};
