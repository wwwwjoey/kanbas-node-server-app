import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = req.body;
        try {
            await dao.updateCourse(id, course);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        try {
            await dao.deleteCourse(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post("/api/courses", async (req, res) => {
        const course = req.body;
        try {
            const newCourse = await dao.createCourse(course);
            res.json(newCourse);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get("/api/courses", async (req, res) => {
        try {
            const courses = await dao.findAllCourses();
            res.json(courses);
        } catch (error) {
            res.status(500).send(error);
        }
    });
}
