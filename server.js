require('dotenv').config();
const express = require("express");
const mysql=require('mysql');
const cors=require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("From Backend running");
});

const connection=mysql.createConnection({
    host:'localhost',
    database:'test',
    port:'3306',
    user:'root',
    password:process.env.DB_PASSWORD
});

connection.connect((err)=>{
   if(!err) console.log("connected to the database")
   else console.log(err);
});

app.post('/api/submit-form', (req, res) => {
  const { name, preferredLanguage, standardInput, sourceCode } = req.body;

  const query = 'INSERT INTO userinput (name, preferred_language, standard_input, source_code) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, preferredLanguage, standardInput, sourceCode], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});


app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM userinput';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/user/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = 'SELECT * FROM userinput WHERE userId = ?'; 
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(results);
  });
});


try {
  app.listen(PORT, () => {
    console.log(`${PORT} Conneted`);
  });
} catch (error) {
  console.log(error);
}

// connection.end();