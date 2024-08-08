import express from 'express';
import bodyParser from 'body-parser';
import dataRoutes from './routes/dataRoutes.js';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(cors())
app.use(bodyParser.json());
app.use('/api', dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
