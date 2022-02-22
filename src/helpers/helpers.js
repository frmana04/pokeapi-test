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

export { getRandomColor };
