import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import ModuleRoutes from './Lab5/Module.js';
import CourseRoutes from './Kanbas/Courses/routes.js';


const app = express()
app.use(cors());    
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 10000)
