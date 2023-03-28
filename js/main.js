// !============================================local storage
// console.log(localStorage);
// ?setItem- добавление элемента в storage
// localStorage.setItem("name", "Irina");
// let obj = {
//   city: "Washington",
//   country: "USA",
// };

// localStorage.setItem("country", JSON.stringify(obj));
// для отправки данных в localStorage используется метод setItem, который принимает два аргумента:1) название ключа; 2) данные в формате JSON.stringify()

// ?getItem- для получения данных.  Метод исподьзуется для получения данных из localStorage. Принимает один аргумент- ключ.
// ? Данные приходят в формате JSON.stringify(), поэтому при получении нужно перевести в формат JSON.parse()
// let data1 = localStorage.getItem("name");
// console.log(data1);

// let data2 = JSON.parse(localStorage.getItem("country"));
// console.log(data2);
// let data3 = localStorage.getItem("obj");
// console.log(data3);

// ?removeItem- метод, который удаляет данные по названию ключа.
// localStorage.removeItem("country");

// ?clear-метод, который очищает весь localSrorage.
// localStorage.clear();

// ! =============================================SessionStorage
// localStorage.setItem(
//   "example",
//   "Будет храниться, даже если закроем браузер и закомментируем данный код"
// );

// sessionStorage.setItem(
//   "example",
//   "Очищается при закрытии вкладки или браузера"
// );

// !=================================================TODO List

// let form = document.querySelector("form");
// let inpTask = document.querySelector("form input");
// let list = document.querySelector("ul");

// // ? create
// function createTask() {
//   if (localStorage.getItem("tasks-data") === null) {
//     localStorage.setItem("tasks-data", "[]");
//   }

//   let data = JSON.parse(localStorage.getItem("tasks-data"));
//   console.log(data);
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let obj = { task: inpTask.value };
//   //   setItemObjTask(obj);
//   let data = JSON.parse(localStorage.getItem("tasks-data"));
//   data.push(obj);
//   localStorage.setItem("task-data", JSON.stringify(data));
//   createTask();
// });

// функция для добавления новых объектов в главный массив
// function setItemObjTask(task) {
//   let data = JSON.parse(localStorage.getItem("tasks-data"));
//   data.push(task);
//   localStorage.setItem(JSON.stringify(data));
// }

const inputs = document.querySelectorAll("input");
const localStorageKey = "myData";

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const data = JSON.parse(localStorage.getItem(localStorageKey) || "{}");
    data[input.id] = input.value;
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  });
});

function saveParam() {
  const data = JSON.parse(localStorage.getItem(localStorageKey) || "{}");
  inputs.forEach((input) => (input.value = data[input.id] || ""));
}
