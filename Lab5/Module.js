export default function ModuleRoutes(app) {
    const module = {
      id: "1",
      name: "Introduction to Programming",
      description: "This module covers the basics of programming.",
      course: "Computer Science 101",
    };
  
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    app.get("/lab5/module/name", (req, res) => {
      res.send(module.name);
    });
  }
  