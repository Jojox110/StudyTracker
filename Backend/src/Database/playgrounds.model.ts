import { Sequelize, Model, DataTypes } from 'sequelize';
import {create} from "node:domain";

const sequelize = new Sequelize('StudyTracker', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    timezone: '-03:00'
});

interface PlaygroundAttributes {
    created_by: number;
    playground_id: number;
    playground_name: string;
}

interface PlaygroundCreationAttributes {}

class Playground extends Model<PlaygroundAttributes, PlaygroundCreationAttributes> implements PlaygroundAttributes {
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

async function createPlayground(): Promise<void> {
    await Playground.create( {
        created_by: 1,
        playground_name: "test-five",
    })
}

export async function getPlaygroundData(createdBy: string): Promise<Playground[]> {
    const playgrounds: Playground[] = await Playground.findAll( {
        where: {
            created_by: createdBy,
        },
    });
    console.log(playgrounds)
    return playgrounds
}
