// Code your solution here
function findMatching(drivers, driver) {
    return drivers.filter(a => a.toLowerCase() === driver.toLowerCase() 
    )};



    function fuzzyMatch(drivers, driver) {
    return drivers.filter( possibleMatch => 
        possibleMatch.toLowerCase().indexOf(driver.toLowerCase()) === 0
    )
};

function matchName(drivers, driver){
   return drivers.filter (newMatch =>
    newMatch.name === driver)}

