const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const createUser = () => {
    const fakeUser = {
        __id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
    return fakeUser;
}

const createCompany = () => {
    const fakeCompany = {
        __id: faker.datatype.uuid(),
        companyName: faker.company.companyName(),
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
    return fakeCompany;
}



//app.get("/api", (req, res) => {
//    res.json({ message: "Kevin is the goodest boy" });
//});

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json(newFakeUser);
})

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    console.log(newFakeCompany);
    res.json(newFakeCompany);
})

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    console.log("New User");
    console.log("New Company");
    res.json({newFakeUser, newFakeCompany});
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`) });