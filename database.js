const { Pool } = require("pg");

const pool = new Pool({
    user: "norashala", 
    host: "localhost",
    database: "postgres", 
    password: "", 
    port: 5432,
});

async function createTable() {
    // TODO
}

async function insertData() {
    // TODO
}

async function main() {
    await createTable();
    await insertData();
}

main()
    .catch(console.error)
    .finally(() => pool.end());