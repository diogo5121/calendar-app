
import { DataTypes, Model, literal } from 'sequelize';
import sequelize from '../database';

class Companies extends Model {
    public id!: number;
    public companyname!: string;
    public phone!: number;
    public email!: string;
    public planId!: number;
    public dateLimitedPlan!: Date;
}

Companies.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    uid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    companyname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    planId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateLimitedPlan: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW() + interval \'2 days\'')
    },
}, {
    sequelize,
    tableName: 'companies',
    timestamps: true,
});

export default Companies;

