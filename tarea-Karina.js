const arrayNum = [20, 56, 28, 30, 99, 70, 65, 49, 15, 10, 5];

const funcionFlecha = (array) => {
  array.map((item) => {
    if (item > 50) {
      console.log(item);
    }
  });
};

funcionFlecha(arrayNum);
