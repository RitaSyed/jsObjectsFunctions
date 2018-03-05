console.log("functions");

//function expressions
var a = function(){
  console.log("a", 3);
};

//function declarations
function b (){
  console.log("b", 2);
}

var num = 3;
function numPrinter(anyNameWeMakeup){
  console.log("my number", anyNameWeMakeup); //temp var name
}

numPrinter(num);
numPrinter(6);

// return //return key can return an object

function cat(){
  return "love them";
  // numPrinter("love them");
  // div.innerHTML = "love them";
}

var message = cat();
console.log("message", message); //best practice is to have two lines:one for function and second is for var to where to pass the function

var instructorsPets = [
  {instructorName: "Zoe",   // This 
  petName: "Biff",          // is
  animalType: "cat",        // [i]
  isFavorite: false         // in the for loop
  },
  {
  instructorName: "Zoe",
  petName: "Whiskey",
  animalType: "evil cat",
  isFavorite: false
  },
  {
  instructorName: "Lauren",
  petName: "Frankie",
  animalType: "sweet dog",
  isFavorite: true
  },
  {instructorName: "Callan",
  petName: "Seymour",
  animalType: "one eyed dog",
  isFavorite: true
  },
  {instructorName: "Callan",
  petName: "Willey",
  animalType: "destructive dog",
  isFavorite: false
  }
];

// function domStringMaker(animalArray){
//   //take pet names and create dom string
//   //call printToDom funstion
//   for(var i=0; i<animalArray.length; i++){
//     var animalString = "<h5>" + animalArray[i].petName + "</h5>";
//     // console.log("animalString", animalString);
//     printToDom(animalString, "pet-name");
//   }
// }

// function printToDom(stringToPrint, divId){
//   //take string and innerHTML to the div
//   var myDiv = document.getElementById(divId);
//   // console.log("myDiv", myDiv);
//   myDiv.innerHTML += stringToPrint;
// }

// domStringMaker(instructorsPets);


//display each per as card

function domStringMaker(animalArray){
  //take pet names and create dom string
  //call printToDom funstion
  for(var i=0; i<animalArray.length; i++){
    var animalString = "";
    if(animalArray[i].isFavorite){
      animalString +="<div class='pet isFavorite'>";
    } else {
      animalString +="<div class='pet isNotFavorite'>";
    }
    animalString += "<h1>" + animalArray[i].petName + "</h1>";
    animalString += "<h3> Owner: " + animalArray[i].instructorName + "</h3>";
    animalString += "<h3> Type: " + animalArray[i].animalType + "</h3>";
    animalString += "</div>"
    // console.log("animalString", animalString);
    printToDom(animalString, "pet-name");
  }
}

function printToDom(stringToPrint, divId){
  //take string and innerHTML to the div
  var myDiv = document.getElementById(divId);
  // console.log("myDiv", myDiv);
  myDiv.innerHTML += stringToPrint;
}

domStringMaker(instructorsPets);

/* <div class="pet-name isNotFavorite">
    <h1>Biff</h1>
    <h3>Owner:</h3>
    <h3>Type: Bad Cat</h3>
  </div>
    <div class="pet-name isFavorite">
    <h1>Whiskey</h1>
    <h3>Owner:</h3>
    <h3>Type: Cat</h3>
  </div> */