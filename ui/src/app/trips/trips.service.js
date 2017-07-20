/* @ngInject */
class TripsService {

  constructor ($http, apiUrl, flightData, tripData) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.Flight = flightData
    this.Trip = tripData

    this.currentTrip = this.Trip.EmptyTrip()
    console.log(this.currentTrip)

    this.EmptyTrip = this.Trip.EmptyTrip
    this.isEmptyTrip = this.Trip.isEmptyTrip
    console.log(this.isEmptyTrip(this.currentTrip))
    this.numFlights = this.Trip.numFlights
    this.flights = this.Trip.flights
    this.origin = this.Trip.origin
    this.destination = this.Trip.destination
    this.departure = this.Trip.departure
    this.arrival = this.Trip.arrival

    this.originFilter = this.Flight.originFilter
    this.destinationFilter = this.Flight.destinationFilter
    this.ordering = this.Flight.increasingByTime

    this.connectingFlight = this.Trip.connectingFlight
    this.addFlight = this.Trip.addFlight
    this.remFlight = this.Trip.remFlight
  }

  getTrip () {
    return this.currentTrip
  }

  addNextFlight (f) {
    this.addFlight(this.currentTrip)(f)
  }

  remLastFlight () {
    if (!this.isEmptyTrip(this.currentTrip)) {
      this.remFlight(this.currentTrip)
    }
  }

  getAvailableFlights () {
    return this.$http
      .get(`${this.apiUrl}/flights`)
      .then(result =>
        result
          .data
          .filter(this.connectingFlight(this.currentTrip))
          .sort(this.ordering)
      )
  }
}

export default TripsService
