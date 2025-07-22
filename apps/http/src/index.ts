import express from "express";
import {client} from "@repo/prismadb/client";
const app = express();

app.use(express.json());


app.get("/", (req,res) => {
    res.json({
        message:"Hello Dear hi"
    });
});

app.post("/signup", async(req,res) => {
    const { username, password, email } = req.body;

    const isUser = await client.user.findFirst({
        where : {
            email : email
        }
    });

    if(isUser){
        res.json({
            message : "User already exist"
        });
        return;
    };

    const userData =  await client.user.create({
        data :{
            username : username,
            password : password,
            email : email
        }
    });

    res.json({
        message : "User Signup Successfully",
        userData
    })

});

app.listen(4000, () => {
    console.log("server is listining on port 4000");
})