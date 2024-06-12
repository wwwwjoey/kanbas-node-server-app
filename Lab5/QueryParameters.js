export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
  
      if (!a || !b || !operation) {
        return res.status(400).send("Missing parameters");
      }
  
      const numA = parseFloat(a);
      const numB = parseFloat(b);
  
      if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send("Invalid numbers");
      }
  
      let result;
      switch (operation) {
        case "add":
          result = numA + numB;
          break;
        case "subtract":
          result = numA - numB;
          break;
        case "multiply":
          result = numA * numB;
          break;
        case "divide":
          if (numB === 0) {
            return res.status(400).send("Cannot divide by zero");
          }
          result = numA / numB;
          break;
        default:
          return res.status(400).send("Invalid operation");
      }
      res.send(result.toString());
    });
  
    app.get("/lab5/calculator/:operation/:a/:b", (req, res) => {
      const { operation, a, b } = req.params;
  
      const numA = parseFloat(a);
      const numB = parseFloat(b);
  
      if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send("Invalid numbers");
      }
  
      let result;
      switch (operation) {
        case "add":
          result = numA + numB;
          break;
        case "subtract":
          result = numA - numB;
          break;
        case "multiply":
          result = numA * numB;
          break;
        case "divide":
          if (numB === 0) {
            return res.status(400).send("Cannot divide by zero");
          }
          result = numA / numB;
          break;
        default:
          return res.status(400).send("Invalid operation");
      }
      res.send(result.toString());
    });
  }
  