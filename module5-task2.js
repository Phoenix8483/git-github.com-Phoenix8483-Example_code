function getTimeMeet (start, end, startMeet, durationMeet) {
    const start_mass = start.split(':');                           //Приведение к формату чч:мм 
       if(start_mass[0] < 10 && start_mass[0].length == 1) {       //  00:00 вместо 0:00
      start_mass.splice(0, 1, '0' + start_mass[0])             //Start
    }                                                         //Возможно, стоит улучшить, надо спросить у Дениса
    if(start_mass[1] < 10 && start_mass[1].length == 1) {    
       start_mass.splice(1, 1, '0' + start_mass[1]) 
     }
    
     const end_mass = end.split(':');
     if(end_mass[0] < 10 && end_mass[0].length == 1) {   
    end_mass.splice(0, 1, '0' + end_mass[0])                       //End
  }
  if(end_mass[1] < 10 && end_mass[1].length == 1) {    
     end_mass.splice(1, 1, '0' + end_mass[1]) 
   }

   const meet_mass = startMeet.split(':');
   if(meet_mass[0] < 10 && meet_mass[0].length == 1) {       //startMeet
  meet_mass.splice(0, 1, '0' + meet_mass[0]) 
}
if(meet_mass[1] < 10 && meet_mass[1].length == 1) {   
   meet_mass.splice(1, 1, '0' + meet_mass[1]) 
 }

     console.log(start_mass, end_mass, meet_mass, durationMeet);

   let beginning = start_mass[0] * 60 + Number(start_mass[1]);  //Приводим аргументы в минуты, начиная с 00:00
   let finish = end_mass[0] * 60 + Number(end_mass[1])
   let beginMeet = meet_mass[0] * 60 + Number(meet_mass[1]);
   console.log(beginning, finish, beginMeet)

    if (beginMeet > beginning && beginMeet < finish && beginMeet + durationMeet < finish) { 
      
        return console.log(true)} else {
            return console.log(false)
        }
    }
    let timeMeetBegin = getTimeMeet ('9:10', '18:30', '18:19', 10) //Вызов функции с заданными аргументами