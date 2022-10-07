export default function getDeg(val) {
  if (val > 360) return val - 360;
  if (val < 0) return val + 360;
  return val;
}
