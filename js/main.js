// $('#datepicker').datepicker( {
//   changeMonth: true,
//   changeYear: false,
//   dateFormat: "mm/dd",
// });


var objZodiac = [
  {name: "Aquarius",
  dates: "01/20 - 02/18",
  symbol: "",
  element: "air",
  compatible: ["Leo","Sagittarius"],
  luckyNumbers: [4, 7, 11, 22, 29],
  imgPath: "img/aquarius.png",
  constPath: "img/constAquarius.png"
  },
  {name: "Pisces",
  dates: "02/19 - 03/20",
  symbol: "",
  element: "water",
  compatible: ["Virgo","Taurus"],
  luckyNumbers: [3,9,12,15,18,24],
  imgPath: "img/pisces.png",
  constPath: "img/constPisces.png"
  },
  {name: "Aries",
  dates: "03/21 - 04/19",
  symbol: "",
  element: "fire",
  compatible: ["Libra","Leo"],
  luckyNumbers: [1,8,17],
  imgPath: "img/aries.png",
  constPath: "img/constAries.png"
  },
  {name: "Taurus",
  dates: "04/20 - 05/20",
  symbol: "",
  element: "earth",
  compatible: ["Scorpio","Cancer"],
  luckyNumbers: [2,6,9,12,24],
  imgPath: "img/taurus.png",
  constPath: "img/constTaurus.png"
  },
  {name: "Gemini",
  dates: "05/21 - 06/20",
  symbol: "",
  element: "air",
  compatible: ["Sagittarius","Aquarius"],
  luckyNumbers: [5,7,14,23],
  imgPath: "img/gemini.png",
  constPath: "img/constGemini.png"
  },
  {name: "Cancer",
  dates: "06/21 - 07/22",
  symbol: "",
  element: "water",
  compatible: ["Capricorn","Taurus"],
  luckyNumbers: [2,3,15,20],
  imgPath: "img/cancer.png",
  constPath: "img/constCancer.png"
  },
  {name: "Leo",
  dates: "07/23 - 08/22",
  symbol: "",
  element: "fire",
  compatible: ["Aquarius","Gemini"],
  luckyNumbers: [1,3,10,19],
  imgPath: "img/leo.png",
  constPath: "img/constLeo.png"
  },
  {name: "Virgo",
  dates: "08/23 - 09/22",
  symbol: "",
  element: "earth",
  compatible: ["Pisces","Cancer"],
  luckyNumbers: [5,14,15,23,32],
  imgPath: "img/virgo.png",
  constPath: "img/constVirgo.png"
  },
  {name: "Libra",
  dates: "09/23 - 10/22",
  symbol: "",
  element: "air",
  compatible: ["Aries","Sagittarius"],
  luckyNumbers: [4,6,13,15,24],
  imgPath: "img/libra.png",
  constPath: "img/constLibra.png"

  },
  {name: "Scorpio",
  dates: "10/23 - 11/21",
  symbol: "",
  element: "water",
  compatible: ["Taurus","Cancer"],
  luckyNumbers: [8,11,18,22],
  imgPath: "img/scorpio.png",
  constPath: "img/constScorpio.png"
  },
  {name: "Sagittarius",
  dates: "11/22 - 12/21",
  symbol: "",
  element: "fire",
  compatible: ["Gemini","Aries"],
  luckyNumbers: [3,7,9,12,21],
  imgPath: "img/sagittarius.png",
  constPath: "img/constSagittarius.png"
  },
  {name: "Capricorn",
  dates: "12/22 - 01/19",
  symbol: "",
  element: "earth",
  compatible: ["Taurus","Cancer"],
  luckyNumbers: [4,8,13,22],
  imgPath: "img/capricorn.png",
  constPath: "img/constCapricorn.png"
  },
]

// up from 29 to 31
var to31 = true
// up from 29 to 30
var to30 = true
$("#bdDay").change(function(){
    $('#constLeft').fadeOut("slow", function(){})
    $('#constRight').fadeOut("slow", function(){})
    $('#zodiacImg').fadeOut()
    $('#zodiacName').fadeOut()
    $('#zodiacInfo').fadeOut()
  })
$("#bdMonth").change(function(){
    $('#constLeft').fadeOut("slow", function(){})
    $('#constRight').fadeOut("slow", function(){})
    $('#zodiacImg').fadeOut()
    $('#zodiacName').fadeOut()
    $('#zodiacInfo').fadeOut()
  var bdMonth = document.getElementById("bdMonth").value
// if month has 31 days (29-31, 30-31, 31-31)
  if (bdMonth == 1 || bdMonth == 3 || bdMonth == 5 || bdMonth == 7 || bdMonth == 8 || bdMonth == 10 || bdMonth == 12) {
    // from 29 to 31
    if (to31 == true && to30 == true){
      var daysList = document.getElementById("bdDay");
      var thirty = document.createElement('option');
      daysList.appendChild(thirty);
      thirty.innerHTML = "30";
      thirty.value = 30;
      var thirtyOne = document.createElement('option');
      daysList.appendChild(thirtyOne);
      thirtyOne.innerHTML = "31";
      thirtyOne.value = 31;
      to31 = false;
      to30 = true;
    }
    // from 30 to 31
    else if (to31 == true && to30 == false) {
      var daysList = document.getElementById("bdDay");
      var thirtyOne = document.createElement('option');
      daysList.appendChild(thirtyOne);
      thirtyOne.innerHTML = "31";
      thirtyOne.value = 31;
      to31 = false;
      to30 = true;
    }
    else {
      to31 = false;
      to30 = true;
    }
  }

// if month has 30 days (29-30, 31-30, 30-30)
  if (bdMonth == 4 || bdMonth == 6 || bdMonth == 9 || bdMonth == 11) {
    // from 29 to 30
    if (to31 == true && to30 == true){
      var daysList = document.getElementById("bdDay");
      var thirty = document.createElement('option');
      daysList.appendChild(thirty);
      thirty.innerHTML = "30";
      thirty.value = 30;
      to30 = false;
      to31 = true;
    }
    // from 31 to 30
    else if (to31 == false && to30 == true) {
      var daysList = document.getElementById("bdDay");
      daysList.removeChild(daysList.children[31]);
      to30 = false;
      to31 = true;
    }
    else{
      to30 = false;
      to31 = true;
    }
}
// if month has 29 days (31-29, 30-29, 29-29)
  if (bdMonth == 2) {
    // from 31 to 29
    if (to31 == false) {
      var daysList = document.getElementById("bdDay");
      daysList.removeChild(daysList.children[31]);
      daysList.removeChild(daysList.children[30]);
      to31 = true;
      to30 = true;
    }
    // from 30 to 29
    else if (to30 == false) {
      var daysList = document.getElementById("bdDay");
      daysList.removeChild(daysList.children[30]);
      to31 = true;
      to30 = true;
    }
    else {
      to31 = true;
      to30 = true;
    }
  }
})

// find zodiac on submit
$("#submit").click(function(){
  var bdMonth = document.getElementById("bdMonth").value
  var bdDay = document.getElementById("bdDay").value
  console.log (bdMonth + "/" + bdDay)
  //Aquarius
  if ((bdMonth == 1 && bdDay >= 20) || (bdMonth == 2 && bdDay <= 18)) {
    console.log(objZodiac[0].name);
    i = 0;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constLeft = document.getElementById("constLeft");
    constLeft.src = objZodiac[i].constPath;
    $(constLeft).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";
  }
  // Pisces
  if ((bdMonth == 2 && bdDay >= 19) || (bdMonth == 3 && bdDay <= 20)) {
    console.log(objZodiac[1].name)
    i = 1;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constRight = document.getElementById("constRight");
    constRight.src = objZodiac[i].constPath;
    $(constRight).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";
  }
  // Aries
  if ((bdMonth == 3 && bdDay >= 21) || (bdMonth == 4 && bdDay <= 19)) {
    console.log(objZodiac[2].name)
    i = 2;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constLeft = document.getElementById("constLeft");
    constLeft.src = objZodiac[i].constPath;
    $(constLeft).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";
  }
  // Taurus
  if ((bdMonth == 4 && bdDay >= 20) || (bdMonth == 5 && bdDay <= 20)) {
    console.log(objZodiac[3].name)
    i = 3;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constRight = document.getElementById("constRight");
    constRight.src = objZodiac[i].constPath;
    $(constRight).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";
  }
  // Gemini
  if ((bdMonth == 5 && bdDay >= 21) || (bdMonth == 6 && bdDay <= 20)) {
    console.log(objZodiac[4].name)
    i = 4;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constLeft = document.getElementById("constLeft");
    constLeft.src = objZodiac[i].constPath;
    $(constLeft).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Cancer
  if ((bdMonth == 6 && bdDay >= 21) || (bdMonth == 7 && bdDay <= 22)) {
    console.log(objZodiac[5].name)
    i = 5;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constRight = document.getElementById("constRight");
    constRight.src = objZodiac[i].constPath;
    $(constRight).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Leo
  if ((bdMonth == 7 && bdDay >= 23) || (bdMonth == 8 && bdDay <= 22)) {
    console.log(objZodiac[6].name)
    i = 6;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constLeft = document.getElementById("constLeft");
    constLeft.src = objZodiac[i].constPath;
    $(constLeft).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Virgo
  if ((bdMonth == 8 && bdDay >= 23) || (bdMonth == 9 && bdDay <= 22)) {
    console.log(objZodiac[7].name)
    i = 7;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constRight = document.getElementById("constRight");
    constRight.src = objZodiac[i].constPath;
    $(constRight).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Libra
  if ((bdMonth == 9 && bdDay >= 23) || (bdMonth == 10 && bdDay <= 22)) {
    console.log(objZodiac[8].name)
    i = 8;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constLeft = document.getElementById("constLeft");
    constLeft.src = objZodiac[i].constPath;
    $(constLeft).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Scorpio
  if ((bdMonth == 10 && bdDay >= 23) || (bdMonth == 11 && bdDay <= 21)) {
    console.log(objZodiac[9].name)
    i = 9;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constRight = document.getElementById("constRight");
    constRight.src = objZodiac[i].constPath;
    $(constRight).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Sagittarius
  if ((bdMonth == 11 && bdDay >= 22) || (bdMonth == 12 && bdDay <= 21)) {
    console.log(objZodiac[10].name)
    i = 10;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constLeft = document.getElementById("constLeft");
    constLeft.src = objZodiac[i].constPath;
    $(constLeft).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
  // Capricorn
  if ((bdMonth == 12 && bdDay >= 22) || (bdMonth == 1 && bdDay <= 19)) {
    console.log(objZodiac[11].name)
    i = 11;
    var zodiacImg = document.getElementById("zodiacImg");
    var zodiacName = document.getElementById("zodiacName");
    var zodiacInfo = document.getElementById("zodiacInfo");
    var constRight = document.getElementById("constRight");
    constRight.src = objZodiac[i].constPath;
    $(constRight).fadeIn("slow", function(){});
    $('#zodiacImg').fadeIn()
    $('#zodiacName').fadeIn()
    $('#zodiacInfo').fadeIn()
    zodiacImg.src = objZodiac[i].imgPath;
    zodiacName.innerHTML = objZodiac[i].name;
    zodiacInfo.innerHTML = objZodiac[i].dates + "<br><br>" + objZodiac[i].name + " is of the element " + objZodiac[i].element + ". People born under the " + objZodiac[i].name + " star sign are compatible with " + objZodiac[i].compatible[0] + " and " + objZodiac[i].compatible[1] + ". Lucky numbers for this star sign are " + objZodiac[i].luckyNumbers + ".";}
})
