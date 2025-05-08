const { createHobbies } = require("./hobbies");

const { fullName } = require("./names");

const hobbies = createHobbies("lettura", "pittura", "sport");
console.log(hobbies);

const person = fullName("Yuri", "Cifiello");
console.log(person);

const init = () => {
  const people = {
    hobbies: { createHobbies },
    person: { fullName },
  };
  console.log(people);
};

init();
