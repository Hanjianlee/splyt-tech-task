/** Haversine Formulae
 * Getting Distance between two locations
 * https://www.sisense.com/blog/latitude-longitude-distance-calculation-explained/
 * Must be in radians
 * A is the square of half the chord length between the points
 * C is the angular distance in radians
 * A = sin^2( (lat1 - lat2)/2 ) + cos(lat1)*cos(lat2) *sin^2((long1-long2)/2)
 * C = 2*atan2(sqrt(a), sqrt(1-a))
 * Distance = RadiusOfEarth*c
 * **/

export interface HFInterface {
  latitude1: number;
  latitude2: number;
  longitude1: number;
  longitude2: number;
}

export function getDistanceHF({
  latitude1,
  latitude2,
  longitude1,
  longitude2,
}: HFInterface): number {
  var radiusOfEarth: number = 6371; // Radius of the earth in km
  var distanceLatitude: number = deg2rad(latitude2 - latitude1);
  var distanceLongitude: number = deg2rad(longitude2 - longitude1);
  var chordDistance: number =
    Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) +
    Math.cos(deg2rad(latitude1)) *
      Math.cos(deg2rad(latitude2)) *
      Math.sin(distanceLongitude / 2) *
      Math.sin(distanceLongitude / 2);
  var angularDistance: number =
    2 * Math.atan2(Math.sqrt(chordDistance), Math.sqrt(1 - chordDistance));
  var distance: number = radiusOfEarth * angularDistance; // Distance in km
  return distance;
}

export function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

export default getDistanceHF;
