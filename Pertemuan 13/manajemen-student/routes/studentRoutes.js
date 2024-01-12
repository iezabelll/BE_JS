// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getStudentById);
// Tambahkan endpoint lain sesuai kebutuhan untuk operasi CRUD

module.exports = router;
