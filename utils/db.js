var pool = db_connection;
function db_connection() {
    const mysql = require("mysql2");
    const config = {
        host: "",
        user: "",
        password: "",
        database: "",
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
