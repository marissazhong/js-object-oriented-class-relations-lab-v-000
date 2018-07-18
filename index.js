
let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++itemId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
  }
}
