export const makeTitleCase = (marketName) => {
  return marketName.split('-').map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}