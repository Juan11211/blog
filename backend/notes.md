mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to the DB'))
  .catch((error) => console.error(error));
uses a promise.

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to the DB');
  } catch (error) {
    console.error(error);
  }
}

connectToDatabase();

async/await syntax to make the code more concise:


const validator = require('validator');

if (validator.isEmail(email)) {
  console.log('Valid email address');
} else {
  console.log('Invalid email address');
}

In this code, the isEmail() function is used to check whether the email variable contains a valid email address. If the function returns true, the email address is considered valid; otherwise, it is considered invalid.

The validator package is a popular choice for validating and sanitizing user input in Node.js applications, and it is widely used in many frameworks and libraries, including Express and Mongoose.