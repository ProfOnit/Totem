const colyseus = require('colyseus');

exports.MyRoom = class extends colyseus.Room {

  onCreate (options) {
  }

  onJoin (client, options) {
    console.log(client.id);
  }

  onMessage (client, message) {
  }

  onLeave (client, consented) {
  }

  onDispose() {
  }

}
