import templateUrl from './locations.component.html'

/* @ngInject */
const controller = class LocationsController {
  constructor ($log, $locations) {
    $log.log('LocationsController ...')

    this.locations = []
    $locations.getAllLocations()
      .then(res => {
        this.locations = res
      })
  }

  getAllLocations () {
    return this.locations
  }
}

export default {
  templateUrl,
  controller,
  controllerAs: '$locationsCtrl'
}
