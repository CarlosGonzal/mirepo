
// ALGORITMOS 3

// Constans

// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

// var fillArray = (team, work) => {
for (var i = 0; i < myTeam.length; i++) {
  myTeam[i].schedule = [];
  for (var j = 0; j < WORK_HOURS.length; j++) {
    myTeam[i].schedule[j] = WORK_HOURS[j]
  }
}
// return console.log(team)
// }

// fillArray(myTeam, WORK_HOURS);


var getRandom = team => {
  for (i = 0; i < team.length; i++) {
    for (j = 0; j < 8; j++) {
      team[i].availability[j] = (Math.random() < 0.5 ? true : false);
    }
  }
  return team;
};



var showAvailabilty = team => {
  var team = getRandom(myTeam);
  for (i = 0; i < myTeam.length; i++) {
    console.log("Disponibilidad de : ", team[i].name);
    for (j = 0; j < WORK_HOURS.length; j++) {
      console.log(team[i].schedule[j], team[i].availability[j]);
    }
  }
  return team;
}

// showAvailabilty(getRandom(myTeam));

//

var showSameSchedule = (team) => {
  var check = [0, 0, 0, 0, 0, 0, 0, 0];
  var team = showAvailabilty(myTeam);
  for (var i = 0; i < team.length; i++) {
    for (var j = 0; j < WORK_HOURS.length; j++) {
      if (team[i].availability[j]) {
        check[j] += 1;
        if (check[j] === 4) {
          console.log("Hueco disponible ", team[i].schedule[j]);
        }
      }
    }
  }
  return console.log(check);
}

showSameSchedule(getRandom(myTeam));


//////////
