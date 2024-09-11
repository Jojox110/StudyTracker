import {DataTypes, Model, Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// @ts-ignore
const sequelize: Sequelize = new Sequelize(process.env.DB_CONN_STRING)


interface PlaygroundAttributes {
    created_by: number;
    playground_id: number;
    playground_name: string;
}

interface PlaygroundCreationAttributes {}

export class Playground extends Model<PlaygroundAttributes, PlaygroundCreationAttributes> implements PlaygroundAttributes {
    public created_by!: number;
    public playground_id!: number;
    public playground_name!: string;
}

Playground.init(
    {
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        playground_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        playground_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "playgrounds",
        freezeTableName: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
)

export async function createPlayground(createdBy: number, playgroundName: string): Promise<boolean> {
    // A constraint is implemented in the DB to prevent a user from creating more than one playground with the same name
    // Combinations of created_by and playground_name must be unique in the db
    try {
        await Playground.create({
            created_by: createdBy,
            playground_name: playgroundName,
        })
        return true;
    }
    catch (error) {
        return false;
    }
}

export async function getAllUserPlaygrounds(createdBy: string): Promise<Playground[]> {
    return await Playground.findAll({
        where: {
            created_by: createdBy,
        },
    });
}
