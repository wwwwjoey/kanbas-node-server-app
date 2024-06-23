import "dotenv/config";
import express from 'express';
import Hello from "./Hello.js";
import Lab5 from './Lab5/index.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js"
import cors from "cors";
import mongoose from 'mongoose';
import session from "express-session";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
app.use(
    cors({
        credentials: true,
        origin: "https://667338e070b58f86829eb536--deft-muffin-34875d.netlify.app/"
    }));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(
    session(sessionOptions));

app.use(express.json());

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000)
