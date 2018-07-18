const isAdult = age => age >= 18 ;
const canDrink = age => age >= 21;
const olderWiser = age => age >= 65;

export { isAdult, canDrink, olderWiser as default };