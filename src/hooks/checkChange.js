export default function checkChange(value) {
  let change = value;

  //> 0 ? "text-success" : "text-danger";

  if (change < 0) {
    return "text-danger";
  }

  if (change > 0) {
    return "text-success";
  } else {
    return "text-dark";
  }
}
