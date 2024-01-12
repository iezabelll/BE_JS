class StudentModel {
    constructor() {
      this.students = [
        {
          id: 1,
          name: 'Eza',
        },
        {
          id: 2,
          name: 'Dea',
        },
        {
            id: 3,
            name: 'Vivi',
        },
        {
            id: 4,
            name: 'Intan',
          },
      ];
    }
  
    getAllStudents() {
        return this.students;
    }
    
    getStudentById(id) {
        return this.students.find(student => student.id === id);
    }
    
    addStudent(student) {
        // Logika untuk menambahkan data mahasiswa baru
    }
    
    updateStudent(id, updatedStudent) {
        // Logika untuk memperbarui data mahasiswa
    }
    
    deleteStudent(id) {
        // Logika untuk menghapus data mahasiswa
    }
}
    
module.exports = new StudentModel();
  