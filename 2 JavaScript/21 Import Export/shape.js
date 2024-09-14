console.log("Modules (Together)");
// Name export
export const squareArea = (side) => side * side;

// Default export
export default function circleArea(radius) {
  return Math.PI * radius * radius;
}
