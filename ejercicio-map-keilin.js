const arregloDeNumeros = [35, 55, 47, 20, 91, 14, 70, 64, 27, 98];

const funcionNumeros = (arreglo) => {
  arreglo.map((item) => {
    if (item > 50) {
      console.log(item);
    }
  });
};

funcionNumeros(arregloDeNumeros);
