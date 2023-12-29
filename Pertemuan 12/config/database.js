// Import Sequelize
import { Sequelize } from "sequelize";
import "dotenv/config";
// import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";


// Destructing object env
const {
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST
} = process.env;

// Membuat Koneksi database.
// Menerima parameter object: database, username, password, dialect
const sequelize = new Sequelize({
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: "mysql",
});

const Student = sequelize.define("Student", {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

try {
    await Student.sync();
    console.log("The table student was created");
} catch (error) {
    console.log("Cannot create table: ", error);
}

// Test connect ke database
try {
    await sequelize.authenticate();
    console.log("Database connected");
} catch (error) {
    console.error("Cannot connect to database: ", error);
}

// export default sequelize;
export default Student;