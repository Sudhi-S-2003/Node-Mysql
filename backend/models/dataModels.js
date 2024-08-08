import connection from '../config/db.js';

const getAllData = (cb) => {
  const query = 'SELECT * FROM boat_trips';
  connection.query(query, (err, results) => {
    if (err) {
      return cb(err);
    }
    cb(null, results);
  });
};

const insertData = (data, callback) => {
  const { boat_number, fuel_measure, mileage, start_time, end_time, start_point, end_point } = data;
  const query = 'INSERT INTO boat_trips (boat_number, fuel_measure, mileage, start_time, end_time, start_point, end_point) VALUES (?, ?, ?, ?, ?, ?, ?)';//? is placeholder for sed for parameterized queries.
  connection.query(query, [boat_number, fuel_measure, mileage, start_time, end_time, start_point, end_point], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, { id: results.insertId, ...data });
  });
};

export default {
  getAllData,
  insertData
};
