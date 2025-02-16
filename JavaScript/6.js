// SPREAD OPERATOR
// It helps to make the new object or array from existing object or array.
const loki = {
    name: "lokichaulagain",
    age: 20,
    address: "kathmandu",
    phone: 9860123456,
};

// const newloki = { ...loki, qualification: "bachelor running" };
const newloki = { ...loki, age: 25 };
console.log(newloki);

// JSON (Javascript Object Notation Program)
// Json is the lightweight object notation format.
// It is mainly used to exchange data between a server and frontend.