import express from "express";

const app = express();


app.get("/", (req,res) => {
    res.json({
        message:"Hello Dear"
    });
});

app.listen(4000, () => {
    console.log("server is listining on port 4000");
})