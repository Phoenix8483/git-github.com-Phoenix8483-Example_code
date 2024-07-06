//ПОИСК РАНДОМНЫХ ЧИСЕЛ С 1 ДО MAX (26) БЕЗ ПОВТОРЕНИЙ!!!
let idUser = 25;
let mass_id = [[], []];   
function fff(min, max) {
                          //создаем массив с элементом 1

for (let i = 0; i <= 24; i++) {              //Делаем счетчик циклов, взял до 1000, т.к. попадаются одинаковые значения
  function getRandomNumber() {         // Создаем функцию, которая возвращает целое положительное число 
    return Math.floor(Math.random() * ((max +1) - min)) + min;
  }
  
    let j = getRandomNumber();             //Вызов функции
    //const f = mass_id[0].includes(j);              // проверка с помощью .includes на присутствие эл-та найденного от min до max
      if (!mass_id[0].includes(j)) {   
             if (max == 25)   {                    //если элемента нет в массиве (true)
          mass_id[0].push(j);   
                                     } else if (max == 30)  {mass_id[1].push(j)}                      // тогда добавляем его с конца (метод push)
}     
                                          // Т.к. циклов 1000, все повторения пропускаются...
}
//console.table(mass_id);
return mass_id;
}
let d = fff(1, 25);
console.table(d)


