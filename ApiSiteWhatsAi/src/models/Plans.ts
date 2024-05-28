
import { DataTypes, Model, literal } from 'sequelize';
import sequelize from '../database';

class Plans extends Model {
    public id!: number;
    public title!: string;
    public connections!: number;
    public servicesAi!: number;
    public price!: number;
}

Plans.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    connections: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servicesai: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'plans',
    timestamps: true,
});

export default Plans;

