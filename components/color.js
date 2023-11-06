
const setColors = ["#D9E8FC", "#FFD8F4", "#FDE99D", "#B0E9CA", "#FFEADD"];

const getRandomColorFromList = () => {
  const randomIndex = Math.floor(Math.random() * setColors.length);
  return setColors[randomIndex];
};


export default getRandomColorFromList;