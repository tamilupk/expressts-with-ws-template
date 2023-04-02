import WebSocket from 'ws';
import { Server } from 'http';
import search from './search';

const createWSS = (server: Server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (socket, req) => {
        switch (req.url) {
            case '/api/ws/search':
                search(socket);
                break;
            default:
                socket.send('No route found');
                socket.close();
        }
      });
}

export default createWSS;