const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "10.0.0.122",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "g1g4nteDespachante!", 
  database: process.env.DB_NAME || "gigante_despachante",
  waitForConnections: true,
  connectionLimit: 10,
  authPlugins: {
    gssapi_client: () => () => Buffer.alloc(0)
  }
});

module.exports = pool;