import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Notifications extends Model {
    public id!: number;
    public from!: string;
    public to!: string;
    public message!: string;
    public viewed!: boolean;
    public title!: string;
}

Notifications.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    viewed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'Notifications',
    timestamps: true,
});

export default Notifications;
