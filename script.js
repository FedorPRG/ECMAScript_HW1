//Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
console.log("------------------------------------");

//Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
  let counter = 0;
  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return --counter;
    },
  };
}
const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.decrement());
console.log(counter1.decrement());
console.log("------------------------------------");

//Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(element, searh = "my-class") {
  if (element.classList.contains(`${searh}`)) {
    return element;
  }
  return findElementByClass(element.children[0]);
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
