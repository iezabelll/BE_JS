import { Express } from "express";

const app = Express();

app.get("/", function (req, res) {
    res.send("halaman home");
});

app.listen