const Sequelize = require('sequelize');

module.exports = new Sequelize('yoursketch_db', 'yoursketchadmin@yoursketchdbserver', 'KPkln@se96', {
    host: 'yoursketchdbserver.mysql.database.azure.com',
	dialect: 'mysql',
	dialectOptions: {
		ssl: {
		  key: null,
		  cert: null,
		  ca: null
		}
	  },
    define: {
        timestamps: true
	},
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1
    }
});



