import { Request, Response } from "express";
import cors from "cors";
import express from "express";


// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

// FALLBACKS
app.use((_: Request, response: Response) => {
    response.status(404).json({
        message: "Route not found.",
    });
});

// START SERVER
const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}.`));