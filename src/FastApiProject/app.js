require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const port = 3000;

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// PostgreSQL client
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// CREATE - Add a new role
app.post('/roles', async (req, res) => {
  const { role_name, user_role, role_description } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO Role (role_name, user_role, role_description) VALUES ($1, $2, $3) RETURNING *',
      [role_name, user_role, role_description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting role');
  }
});

// READ - Get all roles
app.get('/roles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Role');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching roles');
  }
});

// READ - Get a role by ID
app.get('/roles/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await pool.query('SELECT * FROM Role WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Role not found');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching role');
  }
});

// UPDATE - Update a role by ID
app.put('/roles/:id', async (req, res) => {
  const { id } = req.params;
  const { role_name, user_role, role_description } = req.body;
  
  try {
    const result = await pool.query(
      'UPDATE Role SET role_name = $1, user_role = $2, role_description = $3 WHERE id = $4 RETURNING *',
      [role_name, user_role, role_description, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Role not found');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating role');
  }
});

// DELETE - Delete a role by ID
app.delete('/roles/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await pool.query('DELETE FROM Role WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Role not found');
    }
    res.status(200).send('Role deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting role');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
