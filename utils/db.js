var pool = db_connection;
function db_connection() {
    const mysql = require("mysql2");
    const config = {
        host: "ls-7e32551ddc6e9f6236ef44a6ef4923085dba168e.crg1scbusazn.us-east-1.rds.amazonaws.com",
        user: "dbmasteruser",
        password: "q3Taf-*7t2`SDXQ<qV?WsF~k4O9cYCy8",
        database: "dbmaster",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    };
    const pool = mysql.createPool(config);
    return pool.promise();
}
async function query(q, data) {
    const connection = await pool.getConnection();

    const [rows] = await connection.query(q, [data]);

    connection.release();
    return rows;
}

module.exports = {
    query,
};
