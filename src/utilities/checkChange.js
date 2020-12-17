export default function checkChange(value) {
  let change = value;

  if (change < 0) {
    return "text-danger";
  } else if (change > 0) {
    return "text-success";
  } 
    return null;
}
