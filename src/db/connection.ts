import { Sequelize } from "sequelize";

const opciones = {
    host: "172.30.0.2",
    database: "HOSVITAL",
    username: "HOSVITAL",
    password: "CCQ2019Clinica"
};

const sequelize = new Sequelize(opciones.database, opciones.username, opciones.password, { 
    host: opciones.host,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        }
    },
    logging: false
});

export default sequelize;
