// City :: String
// Time :: Number
// Flight :: {
//   origin: City,
//   destination: City,
//   flightTime: Time,
//   offset: Time
// }

// Any: City
const Any = 'Any'

// origin: Flight -> City
const origin = f => f.origin
// destination: Flight -> City
const destination = f => f.destination
// departure: Flight -> Time
const departure = f => f.offset
// arrival: Flight -> Time
const arrival = f => departure(f) + f.flightTime

// from: City -> Flight -> Boolean
const from = c => f => c.toUpperCase() === origin(f).toUpperCase()
// to: City -> Flight -> Boolean
const to = c => f => c.toUpperCase() === destination(f).toUpperCase()
// departsAfter: Time -> Flight -> Boolean
const departsAfter = t => f => t < departure(f)
// arrivesBefore: Time -> Flight -> Boolean
const arrivesBefore = t => f => t > arrival(f)

// guard: (x -> bool, x -> y, x -> y) -> x -> y
const guard = (cnd, grd, fct) =>
  x => cnd(x) ? grd(x) : fct(x)

// always: x -> y -> x
const always = x => y => x
// match: x -> y -> Boolean
const match = x => y => x === y

// Any -> Boolean
const matchAny = match(Any)
// City -> Flight -> Boolean
const anyOrigin = orig => f => matchAny(orig)
// Flight -> Boolean
const keepAny = always(true)
// City -> Flight -> Boolean
const keepFrom = orig => from(orig)
// City -> Flight -> Boolean
const originFilter = orig =>
  guard(
    anyOrigin(orig),
    keepAny,
    keepFrom(orig)
  )

// City -> Flight -> Boolean
const anyDestination = dest => f => matchAny(dest)
// City -> Flight -> Boolean
const keepTo = dest => to(dest)
// City -> Flight -> Boolean
const destinationFilter = dest =>
  guard(
    anyDestination(dest),
    keepAny,
    keepTo(dest)
  )

const Flight = {
  origin,
  destination,
  departure,
  arrival,
  from,
  to,
  departsAfter,
  arrivesBefore,
  originFilter,
  destinationFilter
}

export default Flight
