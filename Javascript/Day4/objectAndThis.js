const mercE = {
  horsePower: "250Bhp",
  torque: "7Nm",
  monoSuspension: true,
  tyre: "radial",
  colours: ["red", "black", "white"],
  fuelType: "petrol",
  speedLimitByGear: { 1: 20, 2: 35, 3: 60, 4: 90, 5: 120, 6: 180, 7: 10 },
  soundHorn: function() {
    console.log("Beep Beep!");
  },
  
  getSpeedLimitByGear: function(gearNumber) {
    return this.speedLimitByGear[gearNumber];
  },
  getTyreType() {
    console.log(this.tyre);
  },
};

window.tyre = "Hello",

mercE.speedLimitByGear["3"] = 75;
console.log(mercE.getSpeedLimitByGear(5));

console.log(mercE.horsePower);
console.log(mercE.speedLimitByGear);

mercE.soundHorn();

//"this" is the context of the method
//Generally it is equal to the object on which the method is called.

mercE.getTyreType();

//"this" value is not bound.
//In case of no context this value will be the global object in non-strict mode. In strict mode it will be undefined.
const tyreTypeFunction = mercE.getTyreType;
tyreTypeFunction();

//"bind"
const boundTyreTypeFunction = mercE.getTyreType.bind(mercE);
boundTyreTypeFunction();

//Arrow functions have no this binding.
const dummyArrowFunction = () => console.log(this.tyre);
const boundArrowFunction = dummyArrowFunction.bind(mercE);
dummyArrowFunction();
boundArrowFunction();