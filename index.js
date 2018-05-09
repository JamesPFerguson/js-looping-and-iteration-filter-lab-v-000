// Code your solution in this file
function findMatching(drivers, name) {
   return drivers.filter(function (driver) {
     return driver.toLowerCase() === name.toLowerCase()} )
}

function fuzzyMatch(drivers, string) {
  return driver.filter(function (driver) {
    return driver.startsWith(string)
  })
}
function matchName(drivers, name) {

}
