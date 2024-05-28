import { Sequelize } from "sequelize";
import { config } from "../config/sequelize";

const sequelize = new Sequelize(config);

export default sequelize;