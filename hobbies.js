const createHobbies = (hobbyOne, hobbyTwo, hobbyThree) => [
  hobbyOne,
  hobbyTwo,
  hobbyThree,
];

const hobbies = createHobbies("lettura", "pittura", "sport");

console.log(hobbies);

module.exports = { hobbies };
