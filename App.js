import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Users/routes.js";
import ModuleRoutes from "./Users/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({   credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",})); 
    

app.use(express.json());
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
  app.use(session(sessionOptions));
  
  

AssignmentRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
