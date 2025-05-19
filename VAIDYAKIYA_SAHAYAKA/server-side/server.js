const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'VAIDYAKIYA_SAHAYAKA'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected');
});

// POST patient data
app.post('/patients', (req, res) => {
  const {
    firstName, lastName, phoneNumber, age, dateOfBirth, gender,
    bplCardNumber, address, bystanderName, bystanderNumber, relationToPatient
  } = req.body;

  // Step 1: Check if phone number already exists
  const checkSql = `SELECT id FROM patients WHERE phone_number = ?`;
  db.query(checkSql, [phoneNumber], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      return res.status(400).json({ message: 'Phone number already registered' });
    }

    // Step 2: Insert if not exists
    const insertSql = `
      INSERT INTO patients 
      (first_name, last_name, phone_number, age, date_of_birth, gender, bpl_card_number, address, bystander_name, bystander_number, relation_to_patient)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      firstName, lastName, phoneNumber, age, dateOfBirth, gender,
      bplCardNumber, address, bystanderName, bystanderNumber, relationToPatient
    ];

    db.query(insertSql, values, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send({ message: 'Patient added', patientId: result.insertId });
    });
  });
});


// POST illness data
app.post('/illness', (req, res) => {
  const {
    patientId, category, symptomDays, symptoms,
    prescription, geneticCondition, terminallyIll
  } = req.body;

  const sql = `
    INSERT INTO patient_illnesses
    (patient_id, category, symptom_days, symptoms, prescription, genetic_condition, terminally_ill)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    patientId, category, symptomDays, symptoms,
    prescription, geneticCondition, terminallyIll
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Illness data saved' });
  });
});

// GET patients
app.get('/patients', (req, res) => {
    const sql = 'SELECT * FROM patients';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching patients:', err);
        return res.status(500).send({ error: 'Database error' });
      }
  
      res.status(200).json(results);
    });
  });

  app.post('/login', (req, res) => {
    const { phoneNumber, dateOfBirth } = req.body;

  
    const sql = `
      SELECT * FROM patients
      WHERE phone_number = ? AND DATE(date_of_birth) = ?
    `;
  
    db.query(sql, [phoneNumber, dateOfBirth], (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0) {
        return res.status(401).send({ message: 'Invalid credentials' });
      }
      res.status(200).send({ message: 'Login successful', patient: results[0] });
    });
  });
  
  
  app.get('/matched-hospitals', (req, res) => {
    const { patientId } = req.query;
  
    const categoryQuery = `
      SELECT category FROM patient_illnesses WHERE patient_id = ? ORDER BY id DESC LIMIT 1
    `;
  
    db.query(categoryQuery, [patientId], (err, categoryResults) => {
      if (err) return res.status(500).json({ error: 'Error fetching illness category' });
  
      if (categoryResults.length === 0) {
        return res.status(404).json({ error: 'Illness category not found' });
      }
  
      let categories;
      try {
        categories = JSON.parse(categoryResults[0].category);
        if (!Array.isArray(categories)) categories = [categories];
      } catch {
        categories = [categoryResults[0].category];
      }
  
      const placeholders = categories.map(() => '?').join(', ');
      const hospitalQuery = `
        SELECT name AS hospital_name, contact_number
        FROM hospitals
        WHERE TRIM(LOWER(speciality)) IN (${placeholders})
      `;
  
      db.query(hospitalQuery, categories.map(c => c.trim().toLowerCase()), (err, hospitalResults) => {
        if (err) return res.status(500).json({ error: 'Error fetching hospitals' });
        res.status(200).json(hospitalResults);
      });
    });
  });
  
  // GET illnesses for a specific patient
app.get('/illness/:patientId', (req, res) => {
    const { patientId } = req.params;
  
    const sql = `
      SELECT id, patient_id, category, symptom_days, symptoms, prescription, genetic_condition, terminally_ill
      FROM patient_illnesses
      WHERE patient_id = ?
      ORDER BY id DESC
    `;
  
    db.query(sql, [patientId], (err, results) => {
      if (err) {
        console.error('Error fetching illness data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ message: 'No illness records found for this patient' });
      }
  
      // Optional: If category was stored as a JSON stringified array, parse it
      results.forEach(row => {
        try {
          row.category = JSON.parse(row.category);
        } catch {
          row.category = [row.category]; // wrap string in array
        }
      });
      
  
      res.status(200).json(results);
    });
  });
  app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
  
    const adminUser = {
      username: 'admin',
      password: 'admin123'
    };
  
    if (username === adminUser.username && password === adminUser.password) {
      res.status(200).json({ message: 'Admin login successful' });
    } else {
      res.status(401).json({ message: 'Invalid admin credentials' });
    }
  });
  // In Express server
// Add hospital
app.post('/hospitals', (req, res) => {
    const { name, contact_number, speciality } = req.body;
    // insert into DB (e.g., SQL or Mongo)
    res.status(201).json({ message: 'Hospital added' });
  });
  
  // Get all hospitals
  app.get('/hospitals', (req, res) => {
    const query = 'SELECT * FROM hospitals';
    db.query(query, (err, results) => {
      if (err) {
        console.error('DB error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });
  
  
  // Delete hospital
  app.delete('/hospitals/:id', (req, res) => {
    const { id } = req.params;
    // delete from DB by ID
    res.json({ message: 'Hospital deleted' });
  });
  
  // GET /user/profile?patientId=123

// Update user profile
app.put('/user/profile/:id', (req, res) => {
  const { id } = req.params;
  const {
    firstName, lastName, phoneNumber, age, dateOfBirth, gender,
    bplCardNumber, address, bystanderName, bystanderNumber, relationToPatient
  } = req.body;

  const sql = `
    UPDATE patients SET 
      first_name = ?, last_name = ?, phone_number = ?, age = ?, 
      date_of_birth = ?, gender = ?, bpl_card_number = ?, 
      address = ?, bystander_name = ?, bystander_number = ?, relation_to_patient = ?
    WHERE id = ?
  `;

  const values = [
    firstName, lastName, phoneNumber, age, dateOfBirth, gender,
    bplCardNumber, address, bystanderName, bystanderNumber, relationToPatient,
    id
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: 'Database update error' });
    res.status(200).json({ message: 'Profile updated successfully' });
  });
});

  app.post('/register', (req, res) => {
    const {
      firstName, lastName, phoneNumber, age, dateOfBirth, gender,
      bplCardNumber, address, bystanderName, bystanderNumber, relationToPatient,
      category, symptomDays, symptoms, prescription, geneticCondition, terminallyIll
    } = req.body;
  
    // Step 1: Insert into patients
    const patientSql = `
      INSERT INTO patients 
      (first_name, last_name, phone_number, age, date_of_birth, gender, bpl_card_number, address, bystander_name, bystander_number, relation_to_patient)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const patientValues = [
      firstName, lastName, phoneNumber, age, dateOfBirth, gender,
      bplCardNumber, address, bystanderName, bystanderNumber, relationToPatient
    ];
  
    db.query(patientSql, patientValues, (err, patientResult) => {
      if (err) return res.status(500).json({ error: 'Error inserting patient', details: err });
  
      const patientId = patientResult.insertId;
  
      // Step 2: Insert into patient_illnesses
      const illnessSql = `
        INSERT INTO patient_illnesses
        (patient_id, category, symptom_days, symptoms, prescription, genetic_condition, terminally_ill)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const illnessValues = [
        patientId, category, symptomDays, symptoms, prescription, geneticCondition, terminallyIll
      ];
  
      db.query(illnessSql, illnessValues, (err, illnessResult) => {
        if (err) return res.status(500).json({ error: 'Error inserting illness', details: err });
  
        res.status(201).json({ message: 'Patient and illness registered', patientId });
      });
    });
  });
  
  
  
  
  

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
