/* @ngInject */
class LocationsService {
  constructor ($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
  }

  getAllLocations () {
    return this.$http
      .get(`${this.apiUrl}/location`)
      .then(result => result.data)
  }
}

export default LocationsService
