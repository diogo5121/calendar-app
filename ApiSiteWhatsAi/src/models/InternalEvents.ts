
import { DataTypes, Model, literal } from 'sequelize';
import sequelize from '../database';

class Events extends Model {
    public id!: number;
    public event_name!: string;
    public state_code!: string;
    public state_name!: string;
    public city_name!: string;
    public address!: string;
    public attraction!: string;
    public dateTime!: Date;
    public uuid!: string;
}

Events.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    event_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    state_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    attraction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'events',
    timestamps: true,
});

export default Events;

