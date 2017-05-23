import * as express from 'express';
import * as sio from 'socket.io';
// import { Server} from 'http';


import { ChatController } from './controllers';

const app: express.Application = express();

const port: Number = process.env.PORT || 3000;

app.use('/hello', ChatController);

app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/'); // TODO: The replacement isn't happening here
});
