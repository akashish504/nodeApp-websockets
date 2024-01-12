import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080/');

// ws.on('error', console.error);

ws.on('open', function open() {
    ws.send('this server is ruuning');
    ws.close()
});

// ws.on('message', function message(data) {
//   console.log('received: %s', data);
// });