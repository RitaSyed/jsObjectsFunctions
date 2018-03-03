console.log("hello");

var favAnimal = {
  name: "rita",
  animal: "cat"
};

console.log("favAnimal", favAnimal.animal);
console.log("favAnimal", favAnimal["animal"]);

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

// console.log("instructorsPets", instructorsPets);
var petDiv = document.getElementById("pet-name");
for(var i=0; i<instructorsPets.length; i++){
  // console.log("animal", instructorsPets[i].petName);
  petDiv.innerHTML+="<h5>" + instructorsPets[i].petName + "</h5>";
}
