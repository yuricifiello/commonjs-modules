const creaPersona = (firstName, lastName) => ({ firstName, lastName });

const persona = creaPersona("Yuri", "Cifiello");
console.log(persona);

module.exports = { persona };
