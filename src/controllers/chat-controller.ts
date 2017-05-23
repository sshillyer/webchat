import { Router, Request, Response } from 'express';
import { UserMessage } from '../models/message';

const router: Router = Router();
let history: UserMessage[] = [];


// TODO: Get rid of this dummy data; used to test message schematic only.
// Dummy variables to test history
let userName: String = "Bob";
for (let i = 0; i < 10; i++) {
    let newMsg = new UserMessage('{"username": "' + userName + '","message": "msg # ' + i.toString() + '"}');
    history.push(newMsg);
}



router.get('/', (req: Request, res: Response) => {
    res.send(history[3].toString());
});

export const ChatController: Router = router;
