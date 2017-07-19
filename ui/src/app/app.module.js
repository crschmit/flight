import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
// import config from './app.config'

// import locationsComponent from './locations/locations.component.js'
// import locationsService from './locations/locations.service'
import flightLocations from './locations/locations.module'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap,
      flightLocations
    ])
    // .service('$locations', locationsService)
    // .component('flightLocations', locationsComponent)
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    // .config(config)
    .name
