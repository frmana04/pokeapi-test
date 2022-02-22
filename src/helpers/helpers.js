const getRandomColor = () => {
  const items = [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ];
  return items[Math.floor(Math.random() * items.length)];
};

const setId = (list) => {
  return list.map((element, index) => {
    element.id = index + 1;
    return element;
  });
};

export { getRandomColor,setId };
