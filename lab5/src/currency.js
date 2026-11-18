function parseCurrency(value) {
  return parseFloat(value.replace('$', ''));
}
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}
function addCurrencies(value1, value2) {
  return formatCurrency(parseCurrency(value1) + parseCurrency(value2));
}
module.exports = { parseCurrency, formatCurrency, addCurrencies };
