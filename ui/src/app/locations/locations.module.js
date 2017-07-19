import locationsComponent from './locations.component.js'
import locationsService from './locations.service'

export default
  angular
    .module('flight.locations', [])
    .component('flightLocations', locationsComponent)
    .service('$locations', locationsService)
    .name
