import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get("/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
        where: { id: id },
    });
    res.json(user);
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



