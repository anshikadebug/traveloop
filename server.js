const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootarpita',
  database: 'traveloop'
});

db.connect((err) => {

  if(err){
    console.log('Database Error');
    console.log(err);
  }
  else{
    console.log('MySQL Connected ✅');
  }

});

app.get('/', (req, res) => {
  res.send('Traveloop Backend Running 🚀');
});

app.post('/create-trip', (req, res) => {

  const {
    user_id,
    trip_name,
    description,
    start_date,
    end_date
  } = req.body;

  const sql = `
    INSERT INTO trips
    (user_id, trip_name, description, start_date, end_date)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [user_id, trip_name, description, start_date, end_date],
    (err, result) => {

      if(err){
        console.log(err);
        res.status(500).send('Database Error');
      }
      else{
        res.send('Trip Created Successfully ✅');
      }

    }
  );

});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get('/trips', (req, res) => {

  const sql = "SELECT * FROM trips";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });

});
