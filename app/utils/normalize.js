export function removeQuotes (content) {
  if (!content) return '';
  return content
    .trim()
    .replace(/( "| ')/g, ' “')
    .replace(/(" |' )/g, '” ')
    .replace(/"/g, '');
}

export function plains (content) {
  if (!content) return '';
  return removeQuotes(content)
    .replace(/(\r\n|\n|\r)/g, ' ')
    .replace(/ {2,}/g, ' ');
}
