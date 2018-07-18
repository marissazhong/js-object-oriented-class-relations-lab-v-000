
let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++itemId;
    this.driverId = driverId;
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
