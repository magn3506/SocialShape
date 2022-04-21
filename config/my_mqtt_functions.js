let recieved_payload = [];

const myTopic = "socialShape"; //YOU MUST CHANGE THIS!

// --- CONNECTING--------------------------------------
client.on("connect", function () {
  console.log("connected!");
  client.subscribe(myTopic);
});

// --- SEND MESSAGE --------------------------------------
function sendMessage(msg) {
  let JSONmsg = JSON.stringify(msg); //JSON.stringify turns any datatype into String/text
  client.publish(myTopic, JSONmsg);
}

// --- RECEIVING MESSAGE --------------------------------------
client.on("message", function (myTopic, message) {
  let msg = JSON.parse(message); //Decode JSON string
  // do your thing here when a message arrives--------
  
  //  If re
  if (recieved_payload.length) { 
    recieved_payload = removeRedundantDevices(msg, recieved_payload)
  };

  recieved_payload.push(msg);

});

function removeRedundantDevices(latesDevice, alldevices) {
  let uniqueChars = alldevices.filter((element) => {
      return element.id !== latesDevice.id
  });
  return uniqueChars;

} 

