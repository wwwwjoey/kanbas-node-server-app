export default function TodoRoutes(app) {
    const todos = [
      {
        id: 1,
        title: "First Todo",
        description: "This is the first todo item",
        completed: false,
      },
    ];
  
    app.put("/lab5/todos/:id/completed/:completed", (req, res) => {
      const { id, completed } = req.params;
      const todo = todos.find(t => t.id === parseInt(id));
      if (todo) {
        todo.completed = completed === "true";
        res.json(todo);
      } else {
        res.status(404).send("Todo not found");
      }
    });
  
    app.put("/lab5/todos/:id/description/:description", (req, res) => {
      const { id, description } = req.params;
      const todo = todos.find(t => t.id === parseInt(id));
      if (todo) {
        todo.description = description;
        res.json(todo);
      } else {
        res.status(404).send("Todo not found");
      }
    });
  
    app.get("/lab5/todos", (req, res) => {
      res.json(todos);
    });
  
    app.get("/lab5/todos/:id", (req, res) => {
      const todo = todos.find(t => t.id === parseInt(req.params.id));
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).send("Todo not found");
      }
    });
  }
  