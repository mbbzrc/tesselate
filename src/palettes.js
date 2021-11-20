export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateColor = (hueMin, hueMax, lightMin, lightMax) => {
  const hue = getRandomInteger(hueMin, hueMax);
  const sat = getRandomInteger(32, 100);
  const light = getRandomInteger(lightMin || 20, lightMax || 80);

  return `hsl(${hue}, ${sat}%, ${light}%)`;
};

export const generateGray = (lightMin, lightMax) => {
  return `hsl(325, 0%, ${getRandomInteger(lightMin, lightMax)}%)`;
};

export const generatePalette = () => {
  return [
    generateColor(0, 20),
    generateColor(25, 40),
    generateColor(45, 65),
    generateColor(70, 160),
    generateColor(170, 260),
    generateColor(265, 285),
    generateColor(290, 325),
    generateGray(70, 100),
    generateGray(0, 40),
  ];
};
