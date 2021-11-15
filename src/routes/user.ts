import express, { Express } from 'express';
import { buildResponse } from 'utils/helpers/buildResponse';

function userRoute(app: Express) {
  const router = express.Router();
  app.use('/api/user', router);

  router.get('/', function (req, res) {
    const body = buildResponse({
      message: 'Users retreived',
      data: {
        hello: 'world',
      },
    });

    res.status(200);
    res.send(body);
  });
}

export default userRoute;
