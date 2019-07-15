// You are given two angles (in degrees) of a triangle.
//
// Write a function to return the 3rd.
//
// Note: only positive integers will be tested.
// the angles always add up to 180 so an equation of 180 - (a + b) will do the trick.

function otherAngle(a, b) {
  return 180 - (a + b);
}
