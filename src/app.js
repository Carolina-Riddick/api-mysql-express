import express from "express";
import morgan from "morgan";
import router from "./routes/language_routes.js"

const app = express();

//PORT
app.set("port", 3000)

// Middleware
app.use(morgan("dev"));
app.use(express.json())

//Routes
app.use("/api/languages", router);

export default app;


