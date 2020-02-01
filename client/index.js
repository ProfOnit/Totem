const Colyseus = require('colyseus.js');


let client = new Colyseus.Client('ws://localhost:4242');

client.joinOrCreate("my_room", null).then(room => {
  console.log("joined successfully", room);
}).catch(e => {
  console.error("join error", e);
});
