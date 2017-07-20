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

    this.getTrip = this.$trips.getTrip
    this.addNextFlight = this.$trips.addNextFlight
    this.remLastFlight = this.$trips.remLastFlight
    this.getAvailableFlights = this.$trips.getAvailableFlights
  }

  trip () {
    return this.getTrip()
  }

  length () {
    return this.$trips.numFlights(this.getTrip())
  }

  flights () {
    return this.$trips.flights(this.getTrip())
  }

  add (f) {
    this.addNextFlight(f)
    this.getAvailableFlights()
      .then(res => this.flights = res)
  }

  rem () {
    this.remLastFlight()
    this.getAvailableFlights()
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
