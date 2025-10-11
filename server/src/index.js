import App from "./app.js";
import dbConnection from "./db/dbConnect.js";

const app = App;
const Port = process.env.PORT;

dbConnection()
    .then(() => {
        app.listen(Port, () => {
            console.log(`Server is Running at : ${Port}`);
        })
    }).catch((error) => {
        console.log(`Error in MongoDB is  ${error.message}`);
        throw error;
    })