import express from 'express';
import { config } from 'config';
import userRoute from 'routes/user';

const PORT = config.API_PORT;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello world');
});

//Routes
userRoute(app);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
