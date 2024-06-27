import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findAllCourseQuizzes = async (req, res) => {
    const { courseNumber } = req.params;
    try {
      const quizzes = await dao.findAllCourseQuizzes(courseNumber);
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const createQuiz = async (req, res) => {
    const newQuiz = {
      ...req.body,
      title: "New Quiz",
      courseNumber: req.params.cid,
      _id: new Date().getTime().toString(),
    };
    try {
      const quiz = await dao.createQuiz(newQuiz);
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const status = await dao.deleteQuiz(qid);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const status = await dao.updateQuiz(qid, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const findQuiz = async (req, res) => {
    const { courseNumber, qid } = req.params;
    try {
      const quiz = await dao.findOneQuiz(courseNumber, qid);
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };






  app.get("/api/courses/:cid/quizzes", findAllCourseQuizzes);
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.put("/api/quizzes/:qid", updateQuiz);
  app.get("/api/courses/:cid/quizzes/:qid", findQuiz);
}
