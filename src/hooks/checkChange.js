export default function checkChange(value) {
  const change = value.today > 0 ? "text-primary" : "text-danger";

  return change;
}
