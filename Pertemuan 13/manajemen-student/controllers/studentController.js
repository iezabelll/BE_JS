// controllers/studentController.js
const StudentModel = require('../models/studentModel');

class StudentController {
  getAllStudents(req, res) {
    const students = StudentModel.getAllStudents();
    res.json(students);
  }

  getStudentById(req, res) {
    const { id } = req.params;
    const student = StudentModel.getStudentById(parseInt(id));
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  }

  addStudent(req, res) {
    const { name, age, grade } = req.body;
    const newStudent = {
      id: StudentModel.getAllStudents().length + 1,
      name,
      age,
      grade
    };
    const student = StudentModel.addStudent(newStudent);
    res.status(201).json(student);
  }

  updateStudent(req, res) {
    const { id } = req.params;
    const updatedStudent = req.body;
    const student = StudentModel.updateStudent(parseInt(id), updatedStudent);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  }

  deleteStudent(req, res) {
    const { id } = req.params;
    StudentModel.deleteStudent(parseInt(id));
    res.sendStatus(204);
  }

}

module.exports = new StudentController();
