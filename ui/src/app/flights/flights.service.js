/* @ngInject */
class FlightsService {

  constructor ($http, apiUrl, flightData) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.Flight = flightData

    this.origin = 'Any'
    this.destination = 'Any'

    this.originFilter = this.Flight.originFilter
  }

  getAllFlights () {
    return this.$http
      .get(`${this.apiUrl}/flights`)
      .then(result => result.data)
  }

  getOrigin () {
    return this.origin
  }

  setOrigin (city) {
    this.origin = city
  }

  getAvailableFlights () {
    return this.$http
      .get(`${this.apiUrl}/flights`)
      .then(result => result
                        .data
                        .filter(this.originFilter(this.origin)))
  }

}

export default FlightsService
