import mysql from 'mysql'

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "UCM_RECLAMOS"
})

export default db