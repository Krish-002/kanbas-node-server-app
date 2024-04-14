import model from "./model.js";
export const createAssignment = (assignment) => {
    delete assignment._id
    return model.create(assignment);
  }
export const findAllAssignment = () => model.find();
export const findAssignmentById = (assignmentId) => model.findById(assignmentId);
export const findAssignmentByTitle = (title) =>  model.findOne({ title: title });
export const findAssignmentByCourseId = (courseId) =>  model.find({ courseId: courseId });
export const updateAssignment = (assignmentId, assignment) =>  model.updateOne({ _id: assignmentId }, { $set: assignment });
export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });