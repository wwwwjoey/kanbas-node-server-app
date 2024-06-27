import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const createCourse = async (req, res) => {
    const newNumber = new Date().getTime().toString();

    const newCourse = {
      ...req.body,
      _id: newNumber,
      number: newNumber,
    };
    const course = await dao.createCourse(newCourse);
    res.json(course);

  };

  const deleteCourse = async (req, res) => {
    const { id } = req.params;

    const status = await dao.deleteCourse(id);
    res.json(status);
  };


  const updateCourse = async (req, res) => {
    const courseNumber = req.params.number;
    const updatedData = req.body;
    delete updatedData._id;

    const status = await dao.updateCourse(courseNumber, updatedData);

    res.json(status);

  };

  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:number", updateCourse);
}