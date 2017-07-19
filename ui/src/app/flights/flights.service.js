/* @ngInject */
class FlightsService {

  constructor ($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl

    this.origin = 'Any'
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
                          .filter(f => f.origin === this.origin))
    }
  }

}

export default FlightsService
