/* @ngInject */
class FlightsService {

  constructor ($http, apiUrl, flightData) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.Flight = flightData

    this.origin = 'Any'
    this.destination = 'Any'
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
    if (this.origin === 'Any') {
      return this.getAllFlights()
    }
    else {
      return this.$http
        .get(`${this.apiUrl}/flights`)
        .then(result => result
                          .data
                          // .filter(f => f.origin.toUpperCase() === this.origin.toUpperCase()))
                          .filter(this.Flight.from(this.origin)))
    }
  }

}

export default FlightsService
