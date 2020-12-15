export default function checkChange(value) {
  const change = value > 0 ? "text-primary" : "text-danger";

  return change;
}
