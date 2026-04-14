
const hobbies = ["video games", "hiking", "eating", "swim", "knitting", "crochet", "sketching", "soccer", "reading", "skating", "piano", "programming"];

//forEach() - loops over each element
let count = 1;
hobbies.forEach(el => console.log(el));

//map() - transforms elements in the array
const hobbiesBig = hobbies.map(el => {
    return `<section class='hobby'>
        <h1>${el}</h1>
        <p>This is one of our hobbies</p>;
    </section>`;
});
console.log(hobbiesBig);
console.log(hobbies);

const lengthsArr = hobbies.map(elem => elem.length);
console.log(lengthsArr);

//filter() - retains elements that pass a filter
const filteredResults = hobbies.filter(elm => elm.startsWith("s"));
console.log(filteredResults);

//try filtering the array for all hobbies that end with "g"
const results = hobbies.filter(e => e.endsWith("g"));
console.log(results);

//find() - returns an element that matches a condition
//give me the hobby with seven characters
const result = hobbies.find(el => el.length === 6);
console.log(result);

//some() - returns true if anything matches
let yesNo = hobbies.some(el => el.length >= 15);
console.log("Are some hobbies length 15?", yesNo);

//every() - returns true if everything matches
yesNo = hobbies.every(el => el.length >= 5);
console.log("Are all hobbies length 5?", yesNo);

//sort() - will sort the array
hobbies.sort((a, b) => {
    console.log(`Comparing ${a} and ${b}`);

    const aLength = a.length;
    const bLength = b.length;
    
    if (aLength === bLength) return 0; //equal? return 0
    else if (aLength < bLength) return -1; //a < b return negative
    else return 1; //a > b return positive
})
hobbies.forEach(el => console.log(el));