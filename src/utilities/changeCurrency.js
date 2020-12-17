export default function changeCurrency(market) {
  let currency = "";
  switch (market) {
    case "euronext-paris":
    case "frankfurter-wertpapierborse":
    case "helsingforsborsen":
      currency = " EUR";
      break;
    case "first-north":
    case "ngm-equity":
    case "ngm-nordic-mtf":
    case "spotlight":
    case "stockholmsborsen":
    case "sek":
      currency = " SEK";
      break;
    case "nasdaq":
    case "new-york-stock-exchange":
    case "usd":
      currency = " USD";
      break;
    case "osloborsen":
      currency = " NOK";
      break;
    case "kopenhamnsborsen":
      currency = " DKK";
      break;
    default:
      currency = "";
  }
  return currency;
}
