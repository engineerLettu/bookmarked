import { Pool } from "pg";
import { configDotenv } from "dotenv";

//loads env files
configDotenv();

export const pool = new Pool({
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE
});


//Quick check at startup to confirm the connection works
pool.connect((err, client, release) => {
    if(err){
        console.error("Database not connecting:🔌", err.message);
    } else {
        console.log("Database connected successfully!✅");
    }
    release();
});