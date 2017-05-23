import * as express from 'express';
// import * as ws from 'ws';
import WebSocket = require('ws');
import Message = require('./models/message');
import { ChatController } from './controllers';


const serverPort: number = process.env.PORT || 3000;

const WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: serverPort });


server.on('connection', ws => {
    ws.on('message', message => {
        try {
            let userMessage: Message.UserMessage = new Message.UserMessage(message);
            broadcast(JSON.stringify(userMessage));
        } catch (e) {
            console.error(e.message);
        }
    });
});

console.log('Server is running on port', serverPort);

function broadcast(data: string): void {
    server.clients.forEach(client => {
        client.send(data);
    });
};







const app: express.Application = express();
app.use('/', ChatController);


const port: number = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/'); // TODO: The replacement isn't happening here
});
