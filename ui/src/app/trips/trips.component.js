import templateUrl from './trips.component.html'

/* @ngInject */
const controller = class TripsController {

  constructor ($log, $trips, $locations) {
    $log.log('Trips Controller ...')

    this.$trips = $trips
    this.$locations = $locations
  }

}

export default {
  templateUrl,
  controller,
  controllerAs: '$tripsCtrl'
}
