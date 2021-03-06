angular.module('starter.services', [])

.factory('Elements', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var elements = [
    {
            "name": "Hydrogen",
            "id": "1",
            "mass": "1.0079",
            "melting": "13.81",
            "boiling": "20.28",
            "orbits": "1s1",
            "type": "Hydrogen"
         },
         {
            "name": "Helium",
            "id": "2",
            "mass": "4.0026",
            "melting": "0.95",
            "boiling": "4.216",
            "orbits": "1s2",
            "type": "Noble gas"
         },
         {
            "name": "Lithium",
            "id": "3",
            "mass": "6.941",
            "melting": "453.7",
            "boiling": "1615",
            "orbits": "[He]2s1",
            "type": "Alkali metals"
         },
         {
            "name": "Beryllium",
            "id": "4",
            "mass": "9.0122",
            "melting": "1560",
            "boiling": "3243",
            "orbits": "[He]2s2",
            "type": "Alkali-earth metals"
         },
         {
            "name": "Boron",
            "id": "5",
            "mass": "10.811",
            "melting": "2365",
            "boiling": "4275",
            "orbits": "[He]2s2 2p1",
            "type": "Metalloid"
         },
         {
            "name": "Carbon",
            "id": "6",
            "mass": "12.0107",
            "melting": "3825",
            "boiling": "5100",
            "orbits": "[He]2s2 2p2",
            "type": "Polyatomic nonmetal"
         },
         {
            "name": "Nitrogen",
            "id": "7",
            "mass": "14.0067",
            "melting": "63.15",
            "boiling": "77.34",
            "orbits": "[He]2s2 2p3",
            "type": "Diatomic nonmetal"
         },
         {
            "name": "Oxygen",
            "id": "8",
            "mass": "15.9994",
            "melting": "54.8",
            "boiling": "90.19",
            "orbits": "[He]2s2 2p4",
            "type": "Diatomic nonmetal"
         }
  ];

  return {
    all: function() {
      return elements;
    },
    remove: function(element) {
      elements.splice(elements.indexOf(element), 1);
    },
    get: function(elementId) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].id === elementId) { // if (elements[i].id === parseInt(elementId)) {
          return elements[i];
        }
      }
      return null;
    }
  };
});
