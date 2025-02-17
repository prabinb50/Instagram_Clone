// CONDITIONAL STATEMENT
// It checks the given condition and execute the block statement

const votingAge = 18;
const personAge = 20;

const checkAge = () => {
    if (personAge < votingAge) {
        console.log("You are not eligible for voting");
    } else {
        console.log("You are eligible for voting");
    }
}
checkAge();



// For Loop
// It is used to check the given condition using the every iteration
const a = 10;
for (let i = 0; i < a; i++) {
    console.log("Hello World");
}