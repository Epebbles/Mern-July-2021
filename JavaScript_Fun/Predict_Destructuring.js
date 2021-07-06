const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Tesla, Mercedes
console.log(randomCar)
console.log(otherRandomCar)


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Name is not defined error, due to name destructuring into otherName.
//console.log(name);
console.log(otherName);

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Error will throw because the password was already defined.
console.log(password);
console.log(hashedPassword);


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Since this is a boolean, first is equal to false, and second is true. 
console.log(first == second);
console.log(first == third);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Key is value, secondKey is the array[1,5,1,8,3,3], secondKey[1], and willThisWork is 5.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);








