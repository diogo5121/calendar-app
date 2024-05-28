import { DataTypes, Model, literal } from 'sequelize';
import sequelize from '../database';

class User extends Model {
  public id!: number;
  public uid!: string;
  public name!: string;
  public email!: string;
  public companyId!: number;
  public phone!: string;
  public eventsUser!: string;
  public ticketsUser!: string;
  public friends!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  companyId: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  typeUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  eventsUser: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '[]'
  },
  ticketsUser: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '[]'
  },
  friends: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '[]'
  },
}, {
  sequelize,
  tableName: 'users',
  timestamps: true,
});

export default User;
