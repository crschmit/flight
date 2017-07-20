import templateUrl from './trips.component.html'

/* @ngInject */
const controller = class TripsController {

  constructor ($log, $trips, $locations) {
    $log.log('Trips Controller ...')

    this.$trips = $trips
    this.$locations = $locations

    this.flights = []
    $trips.getAvailableFlights()
      .then(res => {
        this.flights = res
      })
    console.log(this.flights)

    // this.tFlights = this.getTrip().flights
    console.log(this.$trips.currentTrip)

    // this.addNextFlight = this.$trips.addNextFlight
    // this.remLastFlight = this.$trips.remLastFlight
    this.getAvailableFlights = this.$trips.getAvailableFlights
  }

  trip () {
    return this.$trips.currentTrip
  }

  tripLength () {
    return this.$trips.numFlights(this.$trips.currentTrip)
  }

  tripFlights () {
    return this.$trips.flights(this.$trips.currentTrip)
  }

  tripAdd (f) {
    this.$trips.addNextFlight(f)
    console.log(this.$trips.currentTrip)
    this.$trips.getAvailableFlights()
      .then(res => this.flights = res)
  }

  tripRem () {
    this.$trips.remLastFlight()
    this.$trips.getAvailableFlights()
      .then(res => this.flights = res)
  }

  getAllFlights () {
    return this.flights
  }
}

export default {
  templateUrl,
  controller,
  controllerAs: '$tripsCtrl'
}
