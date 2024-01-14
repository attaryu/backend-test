import express from 'express';
import { json, urlencoded } from 'body-parser';

import routes from './routes';

const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
app.use(json());

app.use(routes);

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
