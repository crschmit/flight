/* @ngInject */
class FlightsService {

  constructor ($http, apiUrl, flightData) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.Flight = flightData

    this.origin = 'Any'
    this.destination = 'Any'

    this.originFilter = this.Flight.originFilter
    this.destinationFilter = this.Flight.destinationFilter
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

  getDestination () {
    return this.destination
  }

  setDestination (city) {
    this.destination = city
  }

  getAvailableFlights () {
    return this.$http
      .get(`${this.apiUrl}/flights`)
      .then(result =>
        result
          .data
          .filter(this.originFilter(this.origin))
          .filter(this.destinationFilter(this.destination))
      )
  }

}

export default FlightsService
