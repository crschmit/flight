'use strict'
import flightMap from './map/map.module'
import apiUrl from './api.url'
import flightData from './flight.data'
import tripData from './trip.data'
import appComponent from './app.component.js'
// import { config } from './app.config'

import locationsComponent from './locations/locations.component.js'
import locationsService from './locations/locations.service'
// import flightLocations from './locations/locations.module'

import usersComponent from './users/users.component.js'
import usersService from './users/users.service'

import currentUserComponent from './current-user/currentUser.component.js'
// import currentUserService from './current-user/currentUser.service'

import flightsComponent from './flights/flights.component.js'
import flightsService from './flights/flights.service'

import tripsComponent from './trips/trips.component.js'
import tripsService from './trips/trips.service'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap
      // flightLocations
    ])
    .service('$locations', locationsService)
    .component('flightLocations', locationsComponent)
    .service('$users', usersService)
    .component('flightUsers', usersComponent)
    .component('flightCurrentUser', currentUserComponent)
    .service('$flights', flightsService)
    .component('flightFlights', flightsComponent)
    .service('$trips', tripsService)
    .component('flightTrips', tripsComponent)
    .constant('apiUrl', apiUrl)
    .constant('flightData', flightData)
    .constant('tripData', tripData)
    .component('flightApp', appComponent)
    // .config([$stateProvider, config])
    .name
