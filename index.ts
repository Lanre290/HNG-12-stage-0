import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        slack_email: "lanre2967@gmail.com",
        timestamp: new Date().toISOString(),
        github_url: "https://github.com/yourusername/hng12-backend",
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
