function getTimeMeet (start, end, startMeet, durationMeet) {
    let t = [start, end, startMeet, durationMeet]
    const start_mass = start.split(':')
    const end_mass = end.split(':');
    const meet_mass = startMeet.split(':');

 for (let i = 0; i < 3; i ++) {
       if(start_mass[0] < 10 && start_mass[0].length == 1) {       
      start_mass.splice(0, 1, '0' + start_mass[0])             
    }                                                         
    if(start_mass[1] < 10 && start_mass[1].length == 1) {    
       start_mass.splice(1, 1, '0' + start_mass[1]) 
     }
    
     
     if(end_mass[0] < 10 && end_mass[0].length == 1) {   
    end_mass.splice(0, 1, '0' + end_mass[0])                       //End
  }
  if(end_mass[1] < 10 && end_mass[1].length == 1) {    
     end_mass.splice(1, 1, '0' + end_mass[1]) 
   }

   
   if(meet_mass[0] < 10 && meet_mass[0].length == 1) {       //startMeet
  meet_mass.splice(0, 1, '0' + meet_mass[0]) 
}
if(meet_mass[1] < 10 && meet_mass[1].length == 1) {   
   meet_mass.splice(1, 1, '0' + meet_mass[1]) 
 }
 }
    // console.log(start_mass, end_mass, meet_mass, durationMeet);
//console.log(start_mass)
console.log(t)


    }
    let timeMeetBegin = getTimeMeet ('9:10', '18:30', '18:19', 10) //Вызов функции с заданными аргументами