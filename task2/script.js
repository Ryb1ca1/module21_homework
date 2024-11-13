/* Этап 1. Подготовка данных */

// JSON-строка, которую будем парсить
const jsonString = '{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}';

/* Этап 2. Получение данных */

// Парсинг JSON-строки
const jsonObject = JSON.parse(jsonString);

// Извлечение данных
const name = jsonObject.name;
const age = jsonObject.age;
const skills = jsonObject.skills;
const salary = jsonObject.salary;

/* Этап 3. Запись данных в результирующий объект */
const result = {
  name: name,
  age: age,
  skills: skills,
  salary: salary
};

// Преобразование объекта обратно в JSON и вывод в консоль
const resultString = JSON.stringify(result);
console.log(resultString);
