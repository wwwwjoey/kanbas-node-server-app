import model from "./model.js";

export const findAllCourses = () => model.find();
export const createCourse = (course) => {
    return model.create(course);
};

export const deleteCourse = (id) =>
  model.deleteOne({ _id: id });

export const updateCourse = (courseNumber, course) => {
    return model.updateOne({ number: courseNumber }, { $set: course });
};