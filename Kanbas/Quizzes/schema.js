import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    id: String,
    questionType:  {
        type: String, 
        enum: ["Multiple Choice", "True/False", "Fill"],
        default: "Multiple Choice" 
    },
    questionTitle: String,
    questionDescription: String,
    questionPoints: Number,
    correctAnswer: String,
    options: [],
}, { _id: false });

const quizzesSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    title: { type: String, required: true},
    courseNumber: { type: String, required: true},
    quizType: {
        type: String, 
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz" 
    },
    points: Number,
    assignmentGroup: {
        type: String, 
        enum: ["Assignments", "Quizzes", "Exams", "Project"],
        default: "Quizzes" 
    },
    shuffleAnswers: {
        type: Boolean, 
        default: true 
    },
    timeLimit: {
        type: Boolean, 
        default: true
    },
    minutes: {type: String, default: "20"},
    multipleAttempts: {
        type: Boolean, 
        default: false
    },
    allowedAttempts: {type: Number, default: 1},
    showCorrectAnswers: {
        type: Boolean,
        default: true
    },
    accessCode: String,
    oneQuestionAtATime: {
        type: Boolean, 
        default: true
    },
    webcamRequired: {
        type: Boolean,
        default: false
    },
    lockQuestions: {
        type: Boolean,
        default: false
    },
    due: String,
    availableFrom: String,
    availableUntil: String,
   
    assignTo: { type: String, default: "Everyone" },
    published: { type: String, default: "unpublished" },
    requiredToViewResults: { type: Boolean, default: false },
    requireLockdownBrowser: { type: Boolean, default: false },
    viewResponses: { type: Boolean, default: true },
    attemptNumber: { type: Number, default: 0 },
    questions: { type: [questionSchema], default: [] },
    instructions: { type: String, default: "" }

  },
  { collection: "quizzes" }
);
export default quizzesSchema;