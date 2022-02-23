const getRandomColor = (id) => {
  const items = [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ];

  return items[id%6];
};

const setId = (list) => {
  return list.map((element, index) => {
    element.id = index + 1;
    return element;
  });
};


const sortByName = (list) => list.sort((a,b)=>a.name<b.name?-1:1)

const filterByWord = (list,word) =>{
    return list.filter(element =>
        element.name.includes(word)
    )
}

export { getRandomColor,setId,sortByName,filterByWord };
