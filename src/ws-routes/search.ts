import WebSocket from 'ws';

const search = (socket: WebSocket.WebSocket) => {
    socket.on('message', (message) => {
        socket.send(`You said: ${message} from /`);
    });
}

export default search;