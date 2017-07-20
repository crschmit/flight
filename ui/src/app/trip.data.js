////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Trip Data
////////////////////////////////////////////////////////////////////////////////
// Trip :: {
//   numFlights: Nat,
//   flights: [Flight],
//   departure: Time,
//   arrival: Time,
//   origin: City,
//   destination: City,
// }
const Trip = (numFlights, flights, departure, arrival, origin, destination) => ({
  numFlights,
  flights,
  departure,
  arrival,
  origin,
  destination
})
// EmptyTrip := {
//     numFlights: 0,
//     flights: [],
//     departure: 'Any',
//     arrival: 'Any',
//     origin: 'Any',
//     destination: 'Any'
// }
// isEmptyTrip: X -> Boolean
const EmptyTrip = () => ({
  numFlights: 0,
  flights: []
})
const isEmptyTrip = x => x.numFlights === 0

const isTrip = x =>
  isEmptyTrip(x) || (
    x.numFlights &&
    x.flights &&
    x.departure &&
    x.arrival &&
    x.origin &&
    x.destination
 )

 const isFlight = x =>
   x.flightTime &&
   x.offset &&
   x.origin &&
   x.destination
////////////////////////////////////////////////////////////////////////////////
// Flight Accessors
////////////////////////////////////////////////////////////////////////////////
// origin: Flight -> City
const flightOrigin = f => f.origin
// destination: Flight -> City
const flightDestination = f => f.destination
// departure: Flight -> Time
const flightDeparture = f => f.offset
// arrival: Flight -> Time
const flightArrival = f => flightDeparture(f) + f.flightTime
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const flightEQ = (f1, f2) => {
    flightOrigin(f1).toUpperCase() === flightOrigin(f2).toUpperCase() &&
    flightDestination(f1).toUpperCase() === flightDestination(f2).toUpperCase() &&
    f1.offset === f2.offset &&
    f1.flightTime === f2.flightTime
}

// Trip Accessors
// numFlights: Trip -> Nat
const numFlights = t => isTrip(t) ? t.numFlights : undefined
// flights: Trip -> [Flight]
const flights = t => {
  if(isTrip(t)) {
    if (isEmptyTrip(t)) return []
    else return t.flights
  }
}
// origin: Trip -> City
const origin = t => {
  if(isTrip(t)) {
    if (isEmptyTrip(t)) return 'Any'
    else return t.origin
  }
}
// destination: Trip -> City
const destination = t => {
  if(isTrip(t)) {
    if (isEmptyTrip(t)) return 'Any'
    else return t.destination
  }
}
// departure: Trip -> Time
const departure = t => {
  if(isTrip(t)) {
    if (isEmptyTrip(t)) return 'Any'
    else return t.departure
  }
}
// arrival: Trip -> Time
const arrival = t => {
  if(isTrip(t)) {
    if (isEmptyTrip(t)) return 'Any'
    else return t.arrival
  }
}

// from: City -> Flight -> Boolean
const flightFrom = c => f => isFlight(f) ? c.toUpperCase() === flightOrigin(f).toUpperCase() : false
// departsAfter: Time -> Flight -> Boolean
const flightDepartsAfter = t => f => isFlight(f) ? (t < flightDeparture(f)) : false

// connectingFlight: Trip -> Flight -> Boolean
const connectingFlight = t => f =>
  isEmptyTrip(t) ||
  (isTrip(t) &&
   destination(t).toUpperCase() === flightOrigin(f).toUpperCase() &&
   arrival(t) < flightDeparture(f))

// Trip Manipulation ...
// addFlight: Trip -> Flight -> Trip + undefined
const addFlight = t => f => {
  if (isTrip(t) && connectingFlight(t)(f)) {
    return Trip(
      numFlights(t) + 1,
      [f, ...flights(t)],
      departure(t),
      flightArrival(f),
      origin(t),
      flightDestination(f)
    )
  }
}
// remFlight: Trip -> Trip
const remFlight = t => {
  if (isTrip(t) && !isEmptyTrip(t)) {
    if (numFlights(t) === 1) return EmptyTrip()
    else return Trip(
      numFlights(t) - 1,
      flights(t).slice(1),
      departure(t),
      arrival(flights(t)[1]),
      origin(t),
      flightDestination(flights(t)[1])
    )
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Trip Companion Object
////////////////////////////////////////////////////////////////////////////////
const TripMethods = {
  EmptyTrip,
  isEmptyTrip,
  numFlights,
  flights,
  origin,
  destination,
  departure,
  arrival,
  connectingFlight,
  addFlight,
  remFlight
}
////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default TripMethods
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
