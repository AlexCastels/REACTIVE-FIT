import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    password: "duck",
    host: "localhost",
    port: 5432,
    database:"calendarDatabase"
})

export default pool;