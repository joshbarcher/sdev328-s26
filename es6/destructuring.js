
const colors = ["pink", "green", "orange", "yellow", "mauve", 
                "brown", "gray"];

const [c1, c2, c3, _, c4] = colors;

console.log(`Color #1: ${c1}`);
console.log(`Color #2: ${c2}`);
console.log(`Color #3: ${c3}`);
console.log(`Color #4: ${c4}`);

// const [results] = con.query("Select * FROM this");

const classroom = {
    location: "auburn center",
    numSeats: 33,
    occuppiedSeats: 25,
    instructor: {
        fname: "Josh",
        lname: "Archer"
    }
}

const { instructor : { fname }, numSeats, location: building } = classroom;
console.log(`There are ${numSeats} in the room`);
console.log(`The room is in ${building}`);
console.log(`First name of instructor is ${fname}`);

//print fullName using the function below
const fullName = { 
    fname: "Todd", 
    lname: "Smith", 
    init: "C",
    address: "1000 plum lane",
    phone: '111-222-3333'
}

printName(fullName);

function printName({ fname, lname, phone }) {
    console.log(`First: ${fname}`);
    console.log(`Last: ${lname}`);
    console.log(`Phone: ${phone}`);
}