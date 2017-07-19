/* @ngInject */
class FlightsService {

  constructor ($http, apiUrl, flightData) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.Flight = flightData

    this.origin = 'Any'
    this.destination = 'Any'

    this.guard = this.Flight.guard
    this.matchAny = this.Flight.match('Any') // Any -> Boolean
    this.anyOrigin = orig => f => this.matchAny(orig) // Flight -> Boolean
    this.keepAny = this.Flight.always(true) // Flight -> Boolean
    this.keepFrom = orig => this.Flight.from(orig) // Flight -> Boolean
    // this.originFilter = orig =>
    //   this.guard(
    //     this.matchAny,
    //     this.keepAny,
    //     this.keepFrom(orig)
    //   )(orig)
    // City + Any -> Flight -> Boolean
    this.originFilter = orig =>
      this.guard(
        this.anyOrigin(orig),
        this.keepAny,
        this.keepFrom(orig)
      )
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
    // // if (this.origin === 'Any') {
    // if (this.matchAny(this.origin)) {
    //   // return this.getAllFlights()
    //   return this.$http
    //     .get(`${this.apiUrl}/flights`)
    //     .then(result => result
    //                       .data
    //                       .filter(this.keepAny))
    // }
    // else {
    //   return this.$http
    //     .get(`${this.apiUrl}/flights`)
    //     .then(result => result
    //                       .data
    //                       .filter(this.keepFrom(this.origin)))
    // }

    return this.$http
      .get(`${this.apiUrl}/flights`)
      .then(result => result
                        .data
                        .filter(this.originFilter(this.origin)))
  }

}

export default FlightsService
