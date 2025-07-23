import {Sequelize} from "sequelize";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

async function ensureDataBaseExist() {

    
}


await ensureDataBaseExist();

const sequelize = new Sequelize(
    '13practica_ORM',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:100000,
        }
    }
);

async function testConnection(){
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    }catch (error){
        console.error('Cannot be connected to  Mysql');
    }
}

testConnection();

export {sequelize};