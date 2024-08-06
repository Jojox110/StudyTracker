import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize('StudyTracker', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});

interface UserAttributes {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    user_id: number;
}

interface UserCreationAttributes {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public username!: string;
    public email!: string;
    public first_name!: string;
    public last_name!: string;
    public password!: string;
    public user_id!: number;
}

User.init(
    {
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        last_name: {
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
        },
    },
    {
        sequelize,
        // Avoid any issues regarding how Sequelize handles table names
        // Notice that it is User**s** and not User. User is a reserved name in postgres
        tableName: "users",
        freezeTableName: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
)

async function test() {
    await User.create({
        username: 'one',
        first_name: 'one',
        last_name: 'one',
        email: 'one@test.com',
        password: '123456',
    })
    const user: User[] = await User.findAll()
    console.log(JSON.stringify(user))
}

test()