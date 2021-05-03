// Objects: Part 1

// 1. Object Person
const person = {
    'Forename': "Zak",
    'Name': "McKrakken",
}
// Solution 1
for (const entry of Object.entries(person)) {
    console.log (`${entry[0]}: ${entry[1]}`);
}
// Soulution 2
Object.entries(person).forEach(
    entry => console.log (`${entry[0]}: ${entry[1]}`)
);

// 2. Get Values
function getObjectValues(drinkChoices) {
    return Object.values(drinkChoices);
}

const objectValues = getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
});

console.log(objectValues);

// Bonus Questions
// 1. Convert keys and values into an array.
object = {
    A: 1,
    B: 2,
    C: 3
};
function objectToArray(object) {
    return Object.entries(object);
}
console.log(objectToArray(object));

// 2. List Properties
function objectPopertiesToArray(object) {
    return Object.keys(object);
}
console.log(objectPopertiesToArray(object));

// 3. Merge
let first = {firstName: "John"}
let last = {lastName: "Smith"}

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeObjects(first, last));

// Extra credit:
// Answer: If property names are equal then the property of
// the second object will overwrite property of the first object

// 4. Switch Keys and Values
function switchKeysAndValues(obj) {
    const newObject = {};
    Object.entries(obj).forEach(
        entry => {
            console.log(entry);
            newObject[entry[1]] = entry[0];
        }
    );
    return newObject;
}

console.log(switchKeysAndValues(person));

// 5. Return Keys and Values

function returnKeysandValues(obj) {
    return [Object.keys(obj), Object.values(obj)];
}
console.log(returnKeysandValues(person));
