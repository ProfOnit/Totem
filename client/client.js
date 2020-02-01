import * as Colyseus from "colyseus.js";

  let client = new Colyseus.Client('ws://localhost:4242');

  client.joinOrCreate("my_room", null).then(room => {
    console.log("joined successfully", room);
  }).catch(e => {
    console.error("join error", e);
  });

  client.getAvailableRooms('my_room').then(room => {
    room.forEach(room => {
      let roomList = document.getElementById("room_list");
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let text1 = document.createTextNode(room.roomId);
      let td2 = document.createElement("td");
      let text2 = document.createTextNode(room.clients + "/" + room.maxClients);
      td1.appendChild(text1);
      td2.appendChild(text2);
      tr.appendChild(td1);
      tr.appendChild(td2);
      roomList.appendChild(tr);
      room.clients
    })
  }).catch(e => {
    console.error(e)
  });

/*
client.joinOrCreate("my_room", null).then(room => {
  console.log("joined successfully", room);
}).catch(e => {
  console.error("join error", e);
});*/
