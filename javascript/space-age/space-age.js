export const age = (planet, s) => {
	/* DESC: Given an age in seconds, returns how old
	 *       a person/thing would be on a given planet
	 *       to a precision of 2 decimal places.
	 * ARGS:
	 *   - s: Number => an age/timespan in seconds
	 *   - planet: String => name of a planet in our solar system
	 */
	const age = s / ( ORBITAL_PERIOD[planet.toLowerCase()] * SECONDS_PER_EARTH_YEAR )
	return Number(age.toFixed(2))
};

const ORBITAL_PERIOD = {
	/* Orbital periods of the planets in terms of Earth years. */
	mercury: 0.240846,
	venus: 0.61519726,
	earth: 1.0,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132
}

const SECONDS_PER_EARTH_YEAR = 31557600
