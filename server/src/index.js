import App from './app.js';
import dbConnection from './db/dbConnect.js';

const app = App;
const Port = process.env.PORT;

// const Name = "Aakash"

const user = {
  name: "Aaksh",
  age: 20,
  city: "New York"
}
// Eslint dot-anotation fix automatically
console.log(user["name"]);
console.log(user.name);
console.log(user["age"]);
console.log(user["city"]);

dbConnection()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is Running at : ${Port}`);
    });
  })
  .catch((error) => {
    console.log(`Error in MongoDB is  ${error.message}`);
    throw error;
  });
