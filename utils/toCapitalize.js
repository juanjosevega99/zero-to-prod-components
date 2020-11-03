const toCapitalize = (string) =>
  string.chartAt(0).toUpperCase() + string.slice(1)

module.exports = toCapitalize
