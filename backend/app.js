// server.js
const express = require('express');
const postgres = require('postgres');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = 3001; // You can choose any port
app.use(cors());

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  try {
    const result = await sql`SELECT * from api.students`;
    return result; // Return the version string
  } catch (error) {
    console.error('Error fetching PostgreSQL version:', error);
    throw error;
  }
}

app.get('/api/pg-version', async (req, res) => {
  try {
    const version = await getPgVersion();
    res.json({ version });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch PostgreSQL version' });
  }
});

app.post('/api/postStudentDetails', async(req, res) =>{
  const studentDetails = req.body;
  try {
    const result = await sql`INSERT INTO api.applications (studentname, gradeset, age, aadhar, marks, gender) values (${studentDetails?.studentName}, ${studentDetails?.class}, ${studentDetails?.age}, ${studentDetails?.aadhar}, ${studentDetails?.marks}, ${studentDetails?.gender})`;
    res.json('Saved Successfully');
  } catch (err){
    res.status(500).json({error: 'Failed to insert'})
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
