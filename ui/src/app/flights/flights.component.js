import templateUrl from './flights.component.html'

/* @ngInject */
const controller = class FlightsController {
  constructor ($log, $flights) {
    $log.log('FlightsController ...')

    this.$flights = $flights

    this.flights = []
    $flights.getAllFlights()
      .then(res => {
        this.flights = res
      })
  }

  getAllFlights () {
    return this.flights
  }
}

export default {
  templateUrl,
  controller,
  controllerAs: '$flightsCtrl'
}
