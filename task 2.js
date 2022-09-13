/*Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»

добавить ее в репозиторий;
продумать тест-кейсы (успешное/неуспешное выполнение функции);
продумать корнер-кейсы; 
написать unit-тесты (минимум 3)

Задание из тренажера:

Задание 2
Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

Пояснение: например, getPercents(30, 200) должно вернуть 60.
*/

function getPercents(percent, number) {
  if (percent < 0 || number < 0) {
    return console.log("Введите число больше 0");
  } else if (typeof percent === "number" && typeof number === "number") {
    return console.log((number / 100) * percent);
  } else {
    return console.log("Введите число");
  }
}

module.exports = getPercents;
