const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8')

const calorieCounter = (inputStr) => {
    const groups = inputStr.split('\n\n');
    const sums = groups.map(group => {
        return group
            .split('\n')
            .map(stringValue => parseInt(stringValue))
            .reduce((acc, val) => acc + val)
    })

    const sortedGroups = [...sums].sort((x, y) => y - x);
    
    return { 'highestValue': sortedGroups[0], 'topThreeValues': sortedGroups.slice(0, 3), sortedGroups };
}

console.log(calorieCounter(input));