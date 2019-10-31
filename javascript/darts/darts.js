export const solve = (x, y) => {
  /*
   * DESC: Takes the (x,y) coords of a dart on a dart
   *       board and returns the corresponding points.
   */

  //Radii of concentric rings of dart board and
  //respective points:
  const OUTER =  ring(10, 1)
  const MIDDLE = ring(5, 5)
  const INNER =  ring(1, 10)

  const dart_radius = Math.sqrt(x*x + y*y)

  if (dart_radius <= INNER.radius) return INNER.points;
  if (dart_radius <= MIDDLE.radius) return MIDDLE.points;
  if (dart_radius <= OUTER.radius) return OUTER.points;
  return 0;

};

const ring = (radius, points) => Object({'radius': radius, 'points':points})