import { Router } from 'express';
import { getAllTodos } from '../handlers/todo.handlers.js';

const todoRouter = Router();

//#region Requests
todoRouter.get("/todos", getAllTodos);
todoRouter.post("/todo");
todoRouter.put("/todo/:id"); //todo/dynamic
todoRouter.delete("/todo/:id");
//#endregion

export default todoRouter;