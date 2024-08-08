import dataModel from '../models/dataModels.js';

const getAllData = (req, res) => {
  dataModel.getAllData((err, results) => {
    if (err) {
      console.error('Error :', err);
      res.status(500).send('Error to fetching data');
      return;
    }
    return res.json(results);
  });
};

const insertData = (req, res) => {
  const data = req.body;
  dataModel.insertData(data, (err, results) => {
    if (err) {
      console.error('Error :', err);
    return  res.status(500).send('Error inserting data');
    
    }
    return res.json(results);
  });
};

export default {
  getAllData,
  insertData
};
