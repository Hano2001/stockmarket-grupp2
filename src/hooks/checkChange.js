export default function checkChange(value) {
  let change = value > 0 ? "text-primary" : "text-danger";

  if (value === 0) {
    change = "text-dark";
  }

  return change;
}
