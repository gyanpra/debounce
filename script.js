let counter = 0;
const getData = () => {
  // Make api calls
  console.log("Fetching Data ....", counter++);
}

const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, delay);
  }
}

const outputFunc = debounce(getData, 5000);


