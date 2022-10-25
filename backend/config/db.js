import { Sequelize } from "sequelize";

const db = new Sequelize('db_dashboard', 'joyboy', 'imroot', {
  host: "localhost",
  dialect: "mysql"
});

export default db;
