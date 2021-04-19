import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        status: 200,
        message: "It`s working!"
    })
})

app.post("/", (request, response) => {
    return response.json({
        status: 200,
        message: "User created successfully."
    })
})


app.listen(3333, () => console.log("Server is running on port 3333"));