//ПОИСК РАНДОМНЫХ ЧИСЕЛ С 1 ДО MAX (26) БЕЗ ПОВТОРЕНИЙ!!!

let mass_id = [1];                             //создаем массив с элементом 1

for (let i = 0; i <= 1000; i++) {              //Делаем счетчик циклов, взял до 1000, т.к. попадаются одинаковые значения
  function getRandomNumber(min, max) {         // Создаем функцию, которая возвращает целое положительное число 
    return Math.floor(Math.random() * (max - min)) + min;
  }
    let j = getRandomNumber(1, 26);             //Вызов функции
    const f = mass_id.includes(j);              // проверка с помощью .includes на присутствие эл-та найденного от min до max
      if (!f) {                                 //если элемента нет в массиве (true)
          mass_id.push(j);                      // тогда добавляем его с конца (метод push)
}                                               // Т.к. циклов 1000, все повторения пропускаются...
}
console.table(mass_id);
//const collection = [6];
//const isHexletInCollection = collection.includes(6);
//console.log(isHexletInCollection);


