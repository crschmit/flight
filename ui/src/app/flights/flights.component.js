import templateUrl from './flights.component.html'

/* @ngInject */
const controller = class FlightsController {
  constructor ($log, $flights, $locations) {
    $log.log('FlightsController ...')

    this.$flights = $flights
    this.$locations = $locations

    // this.flights = []
    // $flights.getAllFlights()
    //   .then(res => {
    //     this.flights = res
    //   })

    this.flights = []
    $flights.getAvailableFlights()
      .then(res => {
        this.flights = res
      })

    this.locations = []
    $locations.getAllLocations()
      .then(res => {
        this.locations = res
      })

    this.flightOrigin = this.$flights.flightOrigin
    this.flightDestination = this.$flights.flightDestination
    this.flightDeparture = this.$flights.flightDeparture
    this.flightArrival = this.$flights.flightArrival
  }

  getAllFlights () {
    return this.flights
  }

  getAllLocations () {
    return this.locations
  }

  getOrigin () {
    return this.$flights.getOrigin()
  }

  setOrigin (city) {
    this.$flights.setOrigin(city)
    this.$flights.getAvailableFlights()
      .then(res => {
        this.flights = res
      })
  }

  getDestination () {
    return this.$flights.getDestination()
  }

  setDestination (city) {
    this.$flights.setDestination(city)
    this.$flights.getAvailableFlights()
      .then(res => {
        this.flights = res
      })
  }
}

export default {
  templateUrl,
  controller,
  controllerAs: '$flightsCtrl'
}
