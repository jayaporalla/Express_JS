import express from 'express';
import path from 'path';

const app = express();
const htmlFilePath = path.join(process.cwd(), "public", "index.html");
const publicDirPath = path.join(process.cwd(), "public");

//#region Middlewares
app.use(express.static(publicDirPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

app.get("/", (req, res, next) => {
    return res.render(htmlFilePath);
})

app.listen(5000, () => console.log("Server up and running..."));