import express from 'express';

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log(req.baseUrl, req.url);
    return res.send("<h1>Hello</h1>");
});

app.get("/hello", (req,res) => {
    console.log(req.baseUrl, req.url);
    return res.send({ message: "Hey!" });
});

app.post("/somedata", (req,res) => {
    console.log(req.baseUrl, req.url);
    console.log(req.body);
    return res.send({ message: "Post req Successful" });
})

app.listen(5000, () => console.log("Sever Started - 5000"));