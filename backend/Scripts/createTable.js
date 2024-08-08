import connection from '../config/db.js'; 
const query = `
  CREATE TABLE IF NOT EXISTS boat_trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    boat_number INT NOT NULL,
    fuel_measure DECIMAL(10, 2) NOT NULL,
    mileage DECIMAL(10, 2) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    start_point VARCHAR(255) NOT NULL,
    end_point VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

connection.query(query, (err, results) => {
  if (err) {
    console.error('Error creating table:', err);
    return;
  }
  console.log('Table created or already exists.');
  
  connection.end();
});
