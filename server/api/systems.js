import {solarSystems} from '~/data/solarsystems';

export default defineEventHandler((event) => {
  const searchString = getQuery(event).search;
  if (searchString === undefined) {
    return [];
  }
  return solarSystems.filter((system) => {
    return system.name.toLowerCase().startsWith(searchString.toLowerCase());
  }).slice(0, 6) || [];
})
