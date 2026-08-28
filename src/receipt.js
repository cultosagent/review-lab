export function canSettle({ delivered, verified }) {
  return delivered === true || verified === true;
}
