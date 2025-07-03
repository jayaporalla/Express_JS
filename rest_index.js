import express from 'express';
import todoRouter from './routes/todo.route'

const app = express();

//#region Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

app.use("api/v1", todoRouter); //middleware
//#region Request URLs
//https://localhost:5000/api/v1/todos       - GET
//https://localhost:5000/api/v1/todo        - POST
//https://localhost:5000/api/v1/todo/:id    - PUT
//https://localhost:5000/api/v1/todo/:id    - DELETE
//#endregion

app.listen(5000, () => console.log("Server up and running..."));