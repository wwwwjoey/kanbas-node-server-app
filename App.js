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

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://wwwwjoey:Pt863088!@kanbas.tun3nun.mongodb.net/?retryWrites=true&w=majority&appName=Kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
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
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(
    session(sessionOptions));

app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000)
