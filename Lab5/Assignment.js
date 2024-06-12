export default function AssignmentRoutes(app) {
    const assignment = {
      id: 1,
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-10-10",
      completed: false,
      score: 0,
    };
  
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    app.get("/lab5/assignment/title", (req, res) => {
      res.send(assignment.title);
    });
  
    app.put("/lab5/assignment/title/:title", (req, res) => {
      assignment.title = req.params.title;
      res.json(assignment);
    });
  }
  