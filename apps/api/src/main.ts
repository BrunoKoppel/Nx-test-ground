import * as express from 'express';
import { Message, firstPost } from '@nx-react-express/api-interfaces';


const app = express();


app.get('/api', (req, res) => {
  res.send(firstPost);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
