import {Sequelize, Model, DataTypes, Optional} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// @ts-ignore
// const sequelize: Sequelize = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     timezone: '-03:00'
// });

const sequelize: Sequelize = new Sequelize(process.env.DB_CONN_STRING)


interface UserAttributes {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    user_id: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'user_id'>{}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;
    public user_id!: number;
}

User.init(
    {
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }
    },
    {
        sequelize,
        tableName: "users",
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: "updated_at",
    }
)

export async function getUserInfoAfterLogin(email: string): Promise<User | null> {
    const userInfo: User | null = await User.findOne({where: {email: email}})
    if (userInfo == null) {
        return null;
    }
    return userInfo;
}

export async function getAllUsers(): Promise<User[]> {
    return await User.findAll();
}

export async function createUser(user: UserCreationAttributes): Promise<void> {
    await User.create({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
    })
}

export async function isEmailInUse(email: string): Promise<boolean> {
    const result: User | null = await User.findOne({where: {email: email}})
    console.log("Checkpoint two")
    return result != null;
}
