import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'..','public')) );

app.get('/api', (req, res, next) => {
  res.json({'cool': 123})
});

app.listen('3001');

export default app;