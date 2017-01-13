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


function nbDays(pickupDate,returnDate){
  //Convert string to date format
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

function findCarIndex(id)
{
  switch(id)
  {
    case "p306":return 0;
    case "rr-sport": return 1;
    case "p-boxster": return 2;
    default : return null;
  }
}

function priceCalculator(idRental) {
  var pickupDate = rentals[idRental].pickupDate;
  var returnDate = rentals[idRental].returnDate;
  var distance = rentals[idRental].distance;
  var carId = rentals[idRental].carId;

  //FIND THE ASSOCIATED CAR
  var indexCar = findCarIndex(carId);

  var priceDay = cars[indexCar].pricePerDay;
  var priceKm = cars[indexCar].pricePerKm;
  var time = nbDays(pickupDate,returnDate);

  var timeComp = time*priceDay;
  var distanceComp = distance*priceKm;

  var rental = timeComp+distanceComp;
  return rental;
}

var rentalsPrice = [
  {
      "id": "1-pb-92",
      "price": priceCalculator(0)
    },
    {
      "id": "2-rs-92",
      "price": priceCalculator(1)
    },
    {
      "id": "3-sa-92",
      "price": priceCalculator(2)
    }
  ];

console.log(rentalsPrice);
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
