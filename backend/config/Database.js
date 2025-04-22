import sequelize  from 'sequelize';

const db = new sequelize('porto-express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;