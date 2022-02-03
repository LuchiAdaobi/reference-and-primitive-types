
// // Primitive type
// let fruit = "Kiwi";
// console.log(fruit);
// let newFruit = fruit;
// console.log(newFruit);

// // update
// newFruit = "Grape";
// console.log(newFruit);
// console.log(fruit);

// // Reference type

// const season = {
//     name: "Fall",
//     color: "Orange"
// };
// console.log(season)

// let newSeason = season;
// console.log(season)

// update
// newSeason.name = "Autumn";
// console.log(newSeason);
// console.log(season);

// Comparison operator: Primitive type returns true because the values are the same

fruit = "Kiwi";
newFruit = fruit;

console.log(fruit == newFruit);

// Reference type returns false because what is compared are the pointers not value. And clearly, the pointers are in different locations in memory

const seasons = {
    name: "Autumn",
    color: "Orange"
};
const newSeasons = {
    name: "Autumn",
    color: "Orange"
};

console.log(seasons == newSeasons)
