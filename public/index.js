'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}]

//MAIN FUNCTION
main();
function main() {
  //EXECUTION OF EXERCISE 1
  for(var i = 0;i<3;i++) rentals[i].price = exercise1(i);
  //EXECUTION OF EXERCISE 2
  for(var i = 0;i<3;i++) rentals[i].price = exercise2(i);
  //EXECUTION OF EXERCISE 3
  for(var i = 0;i<3;i++) exercise3(i);
  //EXECUTION OF EXERCISE 4
  for(var i = 0;i<3;i++) exercise4(i);
  //EXECUTION OF EXERCISE 5
  for(var i = 0;i<3;i++) exercise5(i);
}

function exercise1(idRental){
  var distance = rentals[idRental].distance;
  var time = timeCalculator(idRental);
  //FIND THE CAR ASSOCIATED TO THE RENTAL
  var indexCar = findCarIndex(idRental);
  //INFORMATION ABOUT THE CAR
  var pricePerDay = cars[indexCar].pricePerDay;
  var pricePerKm = cars[indexCar].pricePerKm;
  var timeComponent = time*pricePerDay;
  var distanceComponent = distance*pricePerKm;
  var price = timeComponent+distanceComponent;
  return price;
}
function exercise2(idRental) {
  var distance = rentals[idRental].distance;
  var time = timeCalculator(idRental);
  //FIND THE CAR ASSOCIATED TO THE RENTAL
  var indexCar = findCarIndex(idRental);
  //INFORMATION ABOUT THE CAR
  var decreasePercent = decreasePercentCalculator(time);
  var pricePerDay = cars[indexCar].pricePerDay*(1-decreasePercent);
  var pricePerKm = cars[indexCar].pricePerKm;
  var timeComponent = time*pricePerDay;
  var distanceComponent = distance*pricePerKm;
  var price = timeComponent+distanceComponent;
  return price;
}
function exercise3(idRental) {
  var price = exercise2(idRental);
  var time = timeCalculator(idRental);
  //COMMISSIONS
  var totalCommission = price*0.3;
  var insuranceCommission = totalCommission/2;
  var assistanceCommission = time;
  var drivyCommission = totalCommission-(insuranceCommission+assistanceCommission);
  //price -= totalCommission;
  rentals[idRental].commission.insurance = insuranceCommission;
  rentals[idRental].commission.assistance = assistanceCommission;
  rentals[idRental].commission.drivy = drivyCommission;
}
function exercise4(idRental) {
  var additionalCharge= 0;
  var time = timeCalculator(idRental);
  if(rentals[idRental].options.deductibleReduction) additionalCharge = time*4;
  rentals[idRental].commission.drivy += additionalCharge;
}
function exercise5(idRental) {
  var price = exercise2(idRental);
  var time = timeCalculator(idRental);
  //COMMISSIONS
  var totalCommission = price*0.3;
  var insuranceCommission = totalCommission/2;
  var assistanceCommission = time;
  var drivyCommission = totalCommission-(insuranceCommission+assistanceCommission);
  //Driver debit
  actors[idRental].payment[0].amount = price;
  //Owner credit
  actors[idRental].payment[1].amount = price-totalCommission;
  //Insurance credit
  actors[idRental].payment[2].amount = insuranceCommission;
  //Assistance credit
  actors[idRental].payment[3].amount = assistanceCommission;
  //Drivy credit
  actors[idRental].payment[4].amount = drivyCommission;
}

function timeCalculator(idRental) {
  var pickupDate = rentals[idRental].pickupDate;
  var returnDate = rentals[idRental].returnDate;
  //String to date format convertion
  var pickDate = Date.parse(pickupDate);
  var retDate = Date.parse(returnDate);
  //Calculate the difference between the two dates
  var tmp = retDate - pickDate;
  tmp = Math.floor(tmp/1000);        // Result in seconde(s)
  var sec = tmp%60;
  tmp = Math.floor((tmp-sec)/60);    // Result in minut(s)
  var min = tmp%60;
  tmp = Math.floor((tmp-min)/60);    // Result in hour(s)
  var hour = tmp%24;
  tmp = Math.floor((tmp-hour)/24);   // Result in day(s)
  var nbDays = tmp;
  return nbDays+1;
}
function findCarIndex(idRental) {
  var carId = rentals[idRental].carId;
  switch(carId) {
    case "p306": return 0;
    case "rr-sport": return 1;
    case "p-boxster": return 2;
    default : return null;
  }
}
function decreasePercentCalculator(time) {
  var decreasePercent=0;
  if(1<time<=4) decreasePercent=0.1;
  if(4<time<=10) decreasePercent=0.3;
  if(10<time) decreasePercent=0.5
  return decreasePercent;
}

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
