/* @ngInject */
class TripsService {

  constructor ($http, apiUrl, flightData) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.Flight = flightData
  }

}

export default TripsService
