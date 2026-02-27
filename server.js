const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000;
const peerServer = PeerServer({
  port: PORT,
  path: '/baboot'
});

console.log(`Baboot Custom PeerServer is running on port ${PORT}`);
