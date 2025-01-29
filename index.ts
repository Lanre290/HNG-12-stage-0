import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        email: "lanre2967@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Lanre290/HNG-12-stage-0",
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));