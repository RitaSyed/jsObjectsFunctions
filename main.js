console.log("hello");

var favAnimal = {
  name: "rita",
  animal: "cat"
};

console.log("favAnimal", favAnimal.animal);
console.log("favAnimal", favAnimal["animal"]);

var instructorsPets = [
  {instructorName: "Zoe",
  petName: "Biff",
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

console.log("instructorsPets", instructorsPets);
