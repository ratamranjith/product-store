import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.send("Server work  aaguthu");
})


app.listen(5000, () => {
    console.log("Server is runnig on port: 5000");
})
