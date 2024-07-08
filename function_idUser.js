let message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
]
let nameAuthor = [
  'Алексей',
  'Ольга',
  'Павел',
  'Денис',
  'Юля',
  'Нина',
  'Василий',
  'Денис',
  'Яна',
  'Николай',
  'Евгений',
  'Дмитрий',
]
let description = [
  'Любовь с первого взгляда',
  'Осенний лес',
  'Утром на море',
  'Разгар рабочего дня у Кекса',
  'Будущий олимпиец',
  'Просто обычное фото',
  'Летом в деревне',
  'Позитиффф',
  'Вот оно - счастье!',
  'На старте',
  'Первым делом самолёты...',
  'Бывает жарко)',
]

let mass_id = [[], [], [], [], [], []];   
function fff(min, max) {      
for (let i = 0; i <= max * max; i++) {             
  function getRandomNumber() {         
    return Math.floor(Math.random() * ((max +1) - min)) + min;
  }
    let j = getRandomNumber();                 
    if (!mass_id[0].includes(j) && max == 25) {    //id, url
        mass_id[0].push(j);
      } 
      if (!mass_id[1].includes(j) && max == 200) {    //likes
        mass_id[1].push(j)
      } 
      if (!mass_id[2].includes(j) && max == 30) {   //comments
        mass_id[2].push(j);  
      } 
      if (!mass_id[3].includes(j) && max == 1000) {    //id_comments
        mass_id[3].push(j)
      } 
      if (!mass_id[4].includes(j) && max == 6) {    //avatar
        mass_id[4].push(j);
        } 
      if (!mass_id[5].includes(j) && max == 7) {    //message
          mass_id[5].push(j);
          } 
    }
return mass_id;
}


let commentsObject = () => {
  return {
    idComments: fff(1, 1000)[3].shift(),
    avatar: `img/avatar-${fff(1, 6)[4].shift()}.svg`,
    message: fff(1, 7)[5].shift(),
  }; 
};


let comments = Array.from({length: 5}, commentsObject);



let describePhoto = () => {
  return {
   id: fff(1, 25)[0].shift(),  
   likes: fff(15, 200)[1].shift(),  
   comments: comments,
   avatar: fff(1, 6)[4].shift(),
   };
};

 let userPhoto = Array.from({length: 25}, describePhoto);
 console.table(userPhoto);
