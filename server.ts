import express, { Application } from 'express'
const PORT: number = parseInt(process.env.PORT as string) || 3000;
const app: Application = express();

import apiRoutes from './src/routes/index.route'

app.use(express.json());
app.use('/', apiRoutes);


app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
