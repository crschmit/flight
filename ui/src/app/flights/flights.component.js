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
        this.locations = res})
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
}

export default {
  templateUrl,
  controller,
  controllerAs: '$flightsCtrl'
}
